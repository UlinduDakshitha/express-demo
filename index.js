require('dotenv').config();
const express = require('express')

const app = express()

// Middleware to read JSON body
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Static folder for uploads
app.use('/uploads', express.static(process.env.UPLOAD_PATH || 'uploads'))
 
// Routes
const employeeRoutes = require('./routes/employee-routes')
app.use('/api/v1/employees', employeeRoutes.router)

 

app.listen(process.env.PORT, () => {
  console.log('Server running on port ' + process.env.PORT);
})
