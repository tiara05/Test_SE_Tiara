const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getAllEmployee);
router.get("/name", employeeController.getEmployeeByName);
router.post("/employee", employeeController.addEmployee);

module.exports = router;