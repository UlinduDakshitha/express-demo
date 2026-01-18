const connection=require("../db/db-connection");


//save employee data to database
const saveEmployee=(req,res)=>{
    connection.query('INSERT INTO employee (name, age, salary) VALUES (?, ?, ?)', 
    [req.body.name, req.body.age, req.body.salary], 
    (err, results) => { 
        if (err) {                      
          console.error(err)
           res.status(500).send('Error saving data')
           return;
        }
        res.send('User saved successfully')
    })   
}

//get all employee data from database
const getAllEmployees = (req, res) => {
    connection.query('SELECT id, name, age, salary FROM employee', (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error fetching data')
            return
        }
        res.json(results)
    })
}


//update employee data in database
const updateEmployee = (req, res) => {
    const { id } = req.params
    const { name, age, salary } = req.body

    if (!id) {
        res.status(400).send('Employee id is required')
        return
    }

    connection.query(
        'UPDATE employee SET name = ?, age = ?, salary = ? WHERE id = ?',
        [name, age, salary, id],
        (err, result) => {
            if (err) {
                console.error(err)
                res.status(500).send('Error updating data')
                return
            }
            if (result.affectedRows === 0) {
                res.status(404).send('Employee not found')
                return
            }
            res.send('Employee updated successfully')
        }
    )
}

//delete employee data from database
const deleteEmployee = (req, res) => {
    const { id } = req.params

    if (!id) {
        res.status(400).send('Employee id is required')
        return
    }

    connection.query('DELETE FROM employee WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error deleting data')
            return
        }
        if (result.affectedRows === 0) {
            res.status(404).send('Employee not found')
            return
        }
        res.send('Employee deleted successfully')
    })
}

module.exports = { saveEmployee, getAllEmployees, updateEmployee, deleteEmployee };