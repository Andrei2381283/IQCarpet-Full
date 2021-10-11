// Import Engine
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Improt Models
const UserModel = require('../models/User');

// Import Validate
const { validationResult } = require('express-validator');

const getMyProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const authLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // const { email, password } = req.body;
  // Получаем email и login из тела запроса
  // TODO: Исправить поле для проверки login и email на одно поле login или username
  const { email, login, password } = req.body;

  try {
    // let user = await User.findOne({ email });
    // Находим пользователя по email или login из тела запроса,
    // чтобы установить правильность ввода данных
    const user = await UserModel.findOne({
      $or: [{ email: email }, { login: login }]
    });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: '5 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getMyProfile,
  authLogin
};
