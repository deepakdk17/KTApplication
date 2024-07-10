const { Category } = require('../models');

// Render the view to list all categories
exports.renderAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.render('categories/index', { categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Render the view to create a new category
exports.renderCreateCategory = async (req, res) => {
  res.render('categories/create');
};

// Render the view to edit an existing category
exports.renderEditCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      res.render('categories/edit', { category });
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new category
exports.createCategory = async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.redirect('/categories');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update an existing category
  exports.updateCategory = async (req, res) => {
    try {
      const [updated] = await Category.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        res.redirect('/categories');
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete a category
  exports.deleteCategory = async (req, res) => {
    try {
      const deleted = await Category.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.redirect('/categories');
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  