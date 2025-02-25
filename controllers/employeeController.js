const db = require("../models/db");

exports.getAllEmployee = (req, res) => {
    db.query("SELECT employee.name, employee.email, divisions.division_name, divisions.budget FROM employee JOIN divisions ON employee.division_id = divisions.division_id", (err, results) => {
        if (err) return res.status(500).json({error: "database error"});
        res.json(results);
    });
};

exports.getEmployeeByName = (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: "Name parameter is required" });
    }
    
    db.query("SELECT employee.name, employee.email, divisions.division_name, divisions.budget FROM employee JOIN divisions ON employee.division_id = divisions.division_id WHERE employee.name LIKE ?", [`%${name}%`], (err, results) => {
        if (err) return res.status(500).json({ error: "database error" });
        res.json(results);
    });
};

exports.addEmployee = (req, res) => {
    const { name, email, division_id } = req.body;
    if (!name || !email || !division_id) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    
    db.query("INSERT INTO employee (name, email, division_id) VALUES (?, ?, ?)", [name, email, division_id], (err, results) => {
        if (err) return res.status(500).json({ error: "database error" });
        res.json({ message: "Employee added successfully", employeeId: results.insertId });
    });
};
