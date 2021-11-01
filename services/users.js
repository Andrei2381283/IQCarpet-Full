// Import Engine
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Import Models
const UserModel = require("../models/User");
const RoleModel = require("../models/Role");
const SellerCardModel = require("../models/SellerCard");

// Import Validate
const { validationResult } = require("express-validator");

// @route    POST api/users
// @desc     Register user
// @access   Public
const registration = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    fullname,
    iAmSeller,
    companyName,
    birthDay,
    location,
    phoneNumber,
    login,
    email,
    password
  } = req.body;

  try {
    // let user = await User.findOne({ email });
    const userCandidate = await UserModel.findOne({ email: email });

    if (userCandidate) {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Error",
        message: "Пользователь с таким email уже существует!"
      });
    }

    // Если регистрируется покупатель, то регистрируем покупателя
    if (!iAmSeller || iAmSeller === "" || iAmSeller === null) {
      // Находим роль "USER", которая явялется базовой для всех пользователей,
      // чтобы присвоить ее нвоому пользователю
      const userRoleCustomerUSER = await RoleModel.findOne({ value: "USER" });
      // TODO: Оптимизировать
      const userRoleCustomerCUSTOMER = await RoleModel.findOne({
        value: "BUYER"
      });

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      // Создаем нового пользователя, записываем его введеный email в теле запроса,
      // записываем базовую для всех пользователей роль, которую мы нашли в Базе Данных ролей пользователей
      const newUserCustomer = await UserModel.create({
        fullname: fullname,
        iAmSeller:
          !iAmSeller || iAmSeller === "" || iAmSeller === null ? false : true,
        birthDay: birthDay,
        location: location,
        phoneNumber: phoneNumber,
        login: login,
        email: email,
        password: hashPassword,
        roles: [userRoleCustomerUSER.value, userRoleCustomerCUSTOMER.value]
      });

      const payloadCustomer = {
        user: {
          id: newUserCustomer.id
        }
      };

      // Возвращаем успешный статус с ответом от сервера и данными о пользователе
      jwt.sign(
        payloadCustomer,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else {
      // Если регистрируется продавец(Компания), то регистрируем продавца(Компанию)
      // Находим роль "USER", которая явялется базовой для всех пользователей,
      // чтобы присвоить ее нвоому пользователю
      const userRoleSellerrUSER = await RoleModel.findOne({ value: "USER" });
      // TODO: Оптимизировать
      const userRoleSellerCUSTOMER = await RoleModel.findOne({
        value: "SELLER"
      });

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      // Создаем нового пользователя, записываем его введеный email в теле запроса,
      // записываем базовую для всех пользователей роль, которую мы нашли в Базе Данных ролей пользователей
      const newUserSeller = await UserModel.create({
        fullname: fullname,
        iAmSeller: iAmSeller,
        companyName: companyName,
        birthDay: birthDay,
        location: location,
        phoneNumber: phoneNumber,
        login: login,
        email: email,
        password: hashPassword,
        roles: [userRoleSellerrUSER.value, userRoleSellerCUSTOMER.value]
      });

      // TODO: Сделать создание Карточки Продавца
      await SellerCardModel.create({
        iAmSeller: newUserSeller.iAmSeller,
        companyName: newUserSeller.companyName,
        location: newUserSeller.location,
        phoneNumberOne: newUserSeller.phoneNumber,
        // avatar:
        emailOne: newUserSeller.email,
        user: newUserSeller._id
      });

      const payloadSeller = {
        user: {
          id: newUserSeller.id
        }
      };

      jwt.sign(
        payloadSeller,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    }
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
    console.log({
      statusCode: 500,
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
  }
};

module.exports = {
  registration
};
