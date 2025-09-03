const User = require('../models/user');

exports.getCompanyInfo = (req, res) => {
  res.json({
    companyName: 'VY',
    ceo: {
      name: 'Vishal Sharma',
      phone: '6398692585',
      email: 'placementhub9@gmail.com',
    },
    cofounder: {
      name: 'Yash Gupta',
      phone: '9520102418',
      email: 'placementhub9@gmail.com',
    },
    projects: [
      'Allin1 management website',
      'College & Company placement ERP',
      'BookMyRoom App and website',
    ],
  });
};

exports.createUser = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const user = new User({ name, phone, email });
    await user.save();
    res.status(201).json({ message: 'User saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
