const Contact = require('../models/contact');

// Create Contact Message
exports.createContact = async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;
    const contact = new Contact({ name, email, message, phone });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all contact messages
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
