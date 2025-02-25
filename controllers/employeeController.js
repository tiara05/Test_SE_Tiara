const db = require("../models/db");

exports.getAllEmployee = (req, res) => {
    db.query("SELECT employee.name, employee.email, divisions.division_name, divisions.budget FROM employee JOIN divisions ON employee.division_id = divisions.division_id", (err, results) => {
        if (err) return res.status(500).json({error: "database error"});
        res.json(results);
    });
};