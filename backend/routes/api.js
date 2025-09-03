const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


const mainController = require('../controllers/mainController');
const projectController = require('../controllers/projectController');
const contactController = require('../controllers/contactController');

router.get('/company', mainController.getCompanyInfo);
router.post('/user', mainController.createUser);

// Projects routes
router.get('/projects', projectController.getProjects);
router.get('/projects/:id', projectController.getProjectById);
router.post('/projects', projectController.createProject);
router.put('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);

// Contacts routes
router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);

module.exports = router;

