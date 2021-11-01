// Import Engine
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");

// Import Services
const MailService = require("../utils/mailService");

// Import Generate Utils
const generateEmailVerifyCode = require("../utils/generate/generateEmailVerifyCode/generateEmailVerifyCode");

// Improt Models
const UserModel = require("../models/User");
const AvatarModel = require("../models/Avatar");

// Import Validate
const { validationResult } = require("express-validator");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
const getMyProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id)
      .populate("avatar")
      .select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
const authLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Получаем email и login из тела запроса
  // TODO: Исправить поле для проверки login и email на одно поле login или username
  const { email, login, password } = req.body;

  try {
    // Находим пользователя по email или login из тела запроса,
    // чтобы установить правильность ввода данных
    const user = await UserModel.findOne({
      $or: [{ email: email }, { login: login }]
    });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// @route    POST api/auth/reset-password-send-code
// @desc     User reset password send code
// @access   Public
const resetPasswordSendCode = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
        message: "Пользователь с таким email не найден!"
      });
    }

    // Если пользователь с таким email уже существует,
    // то пересоздадим код для подтверждения входа в аккаунт IQCarpet
    await UserModel.updateOne(
      { email: email },
      {
        $set: {
          emailVerifyCode: generateEmailVerifyCode().toString()
        }
      }
    );

    // Находим существующего c аккаунтом IQCarpet пользователя,
    // чтобы отправить код для подтверждения входа в аккаунт IQCarpet
    const existingUser = await UserModel.findOne({ email: email });

    // Отправляем на email пользователя код для подтверждения смены пароля в аккаунте IQCarpet
    await MailService.sendCodeForConfirmResetPassword(
      email,
      existingUser.emailVerifyCode
    );

    return res.status(200).json({ email: existingUser.email });
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

// @route    POST api/auth/reset-password-confirm-code
// @desc     User reset password confirm code
// @access   Public
const resetPasswordConfirmCode = async (req, res) => {
  try {
    const { email, code } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
        message:
          "Пользовательне найден! Пожалуйста, проверьте правильность запроса!"
      });
    }

    // TODO: Сделать валидацию для проверки пароля
    // TODO: Сделать шифрование паролей

    if (user.emailVerifyCode === code && user.emailVerifyCode !== "") {
      // Возвращаем Успешный статус 200 OK, Success
      return res
        .status(200)
        .json({ email: user.email, code: user.emailVerifyCode });
    } else if (user.emailVerifyCode !== code && user.emailVerifyCode !== "") {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message:
          "Код введен неверно! Пожалуйста, попробуйте еще раз ввести код!"
      });
    } else if ((user.emailVerifyCode === "" && code === "") || code || !code) {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message: "Пожалуйста, проверьте правильность запроса!"
      });
    } else {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message:
          "Что-то пошло не так! Пожалуйста, проверьте правильность запроса!"
      });
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

// @route    POST api/auth/reset-password
// @desc     User reset password
// @access   Public
const resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
        message:
          "Пользовательне найден! Пожалуйста, проверьте правильность запроса!"
      });
    }

    // TODO: Сделать валидацию для проверкт пароля
    // TODO: Сделать шифрование паролей

    if (user.emailVerifyCode === code && user.emailVerifyCode !== "") {
      // Обновляем модель пользователя, находим пользователя по его _id, email и выполняем это обновление,
      // если у пользователя верный код подтверждения для смены пароля
      // На место поля emailVerifyCode, где ддолжен быть код для смены пароля, мы ставим пустую строку.
      // Это нужно для безопасности пользователя, чтобы никто не мог сменить пароль по старому коду для подтверждения смены пароля
      // На место поля password у пользователя мы ставим новый пароль, который пользователь придумал и отправил вместе с кодом и email
      // через поле тела запроса newPassword
      const salt = await bcrypt.genSalt(10);
      const hashNewPassword = await bcrypt.hash(newPassword, salt);

      await UserModel.updateOne(
        { _id: user._id, email: email },
        {
          $set: {
            emailVerifyCode: "",
            password: hashNewPassword
          }
        }
      );

      // Возвращаем Успешный статус 200 OK, Success
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else if (user.emailVerifyCode !== code && user.emailVerifyCode !== "") {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message:
          "Код введен неверно! Пожалуйста, попробуйте еще раз ввести код!"
      });
    } else if ((user.emailVerifyCode === "" && code === "") || code || !code) {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message: "Пожалуйста, проверьте правильность запроса!"
      });
    } else {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message:
          "Что-то пошло не так! Пожалуйста, проверьте правильность запроса!"
      });
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

// @route    PUT api/auth/settings
// @desc     Settings profile
// @access   Private
const myProfileSettings = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        stringStatus: "Not Found",
        message: "Пользователь не найден!"
      });
    }

    const {
      fullname,
      birthDay,
      location,
      // TODO: city,
      phoneNumber,
      email
    } = req.body;

    // TODO: Сделать валидацию для ввода символов в fullname и другие поля,
    // сделать валидацию на пустые строки и пробелы в форме
    if (fullname) {
      user.fullname = fullname;
    }

    // TODO: Сделать валидацию для ввода символов в fullname и другие поля,
    // сделать валидацию на пустые строки и пробелы в форме
    if (birthDay) {
      user.birthDay = birthDay;
    }

    // TODO: Сделать валидацию для ввода символов в fullname и другие поля,
    // сделать валидацию на пустые строки и пробелы в форме
    if (location) {
      user.location = location;
    }

    // TODO: Сделать валидацию для ввода символов в fullname и другие поля,
    // сделать валидацию на пустые строки и пробелы в форме
    if (phoneNumber) {
      user.phoneNumber = phoneNumber;
    }

    // TODO: Сделать валидацию для ввода символов в fullname и другие поля,
    // сделать валидацию на пустые строки и пробелы в форме
    if (email) {
      user.email = email;
    }

    user.save();

    return res.status(200).json(user);
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

// @route    POST api/auth/settings/upload-avatar
// @desc     Settings profile Upload Avatar
// @access   Private
const myProfileSettingsUploadAvatar = async (req, res) => {
  try {
    const avatar = await AvatarModel.findOne({ user: req.user.id });

    if (!avatar) {
      const { file } = req;

      if (!file) {
        return res.status(400).json({
          statusCode: 400,
          stringStatus: "Bad Request",
          message: "Поле с файлом не найдено!"
        });
      }

      const ext = file.originalname.split(".").pop();

      const newAvatar = await AvatarModel.create({
        filename: file.path.split("\\").pop(),
        ext: ext,
        url: `${req.protocol}://${
          req.headers.host
        }/files/images/avatars/${file.path.split("\\").pop()}`,
        user: req.user.id
      });

      await UserModel.updateOne(
        { _id: req.user.id },
        {
          $set: {
            avatar: newAvatar._id
          }
        }
      );

      const updatedUser = await UserModel.findOne({ _id: req.user.id })
        .populate("subscriptions frineds")
        .select("-password");

      return res.status(200).json(updatedUser);
    }

    fs.unlink(
      `./public/files/images/avatars/${avatar.filename}`,
      function (err) {
        if (err) {
          console.log(err);
          return res.status(400).json({
            statusCode: 400,
            stringStatus: "Bad Request",
            message: `Something went wrong! ${err}`
          });
        }
      }
    );
    await AvatarModel.deleteOne({ user: req.user.id });

    const { file } = req;

    if (!file) {
      return res.status(400).json({
        statusCode: 400,
        stringStatus: "Bad Request",
        message: "Поле с файлом не найдено!"
      });
    }

    const ext = file.originalname.split(".").pop();

    const newAvatar = await AvatarModel.create({
      filename: file.path.split("\\").pop(),
      ext: ext,
      url: `${req.protocol}://${
        req.headers.host
      }/files/images/avatars/${file.path.split("\\").pop()}`,
      user: req.user.id
    });

    await UserModel.updateOne(
      { _id: req.user.id },
      {
        $set: {
          avatar: newAvatar._id
        }
      }
    );

    const updatedUser = await UserModel.findOne({ _id: req.user.id })
      .populate("subscriptions frineds")
      .select("-password");

    return res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({
      statusCode: "500",
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
    console.log({
      statusCode: "500",
      stringStatus: "Error",
      message: `Something went wrong! ${err}`
    });
  }
};

module.exports = {
  getMyProfile,
  authLogin,
  resetPasswordSendCode,
  resetPasswordConfirmCode,
  resetPassword,
  myProfileSettings,
  myProfileSettingsUploadAvatar
};
