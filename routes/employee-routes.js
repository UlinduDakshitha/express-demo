 const express = require('express')
const { saveEmployee, getAllEmployees, updateEmployee, deleteEmployee } = require('../controller/employee-controller')
const upload = require('../middleware/uploadmiddleware');

const router = express.Router()

router.post('/save', upload.single('image'), saveEmployee)
router.get('/getAll', getAllEmployees)
router.put('/update/:id', updateEmployee)
router.delete('/delete/:id', deleteEmployee)

module.exports = { router }

//dot env file ekk hdla eke databse ekt one query danna puluwan
//multer eke file handling puluwn
//jsonwebtoken web token authentication puluwn
