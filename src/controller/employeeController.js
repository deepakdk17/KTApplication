const { Employee } = require('../models');

// Render the view to list all employees
exports.renderAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.render('employees/index', { employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Render the view to create a new employee
exports.renderCreateEmployee = async (req, res) => {
  res.render('employees/create');
};

// Render the view to edit an existing employee
exports.renderEditEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.render('employees/edit', { employee });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
      const employee = await Employee.create(req.body);
      res.redirect('/employees');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update an existing employee
  exports.updateEmployee = async (req, res) => {
    try {
      const [updated] = await Employee.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        res.redirect('/employees');
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete an employee
  exports.deleteEmployee = async (req, res) => {
    try {
      const deleted = await Employee.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.redirect('/employees');
      } else {
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  