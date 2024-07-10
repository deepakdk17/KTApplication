const { Asset, Category } = require('../models');

// Render the view to list all assets
exports.renderAllAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll({ include: Category });
    const categories = await Category.findAll();
    res.render('assets/index', { assets, categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Render the view to create a new asset
exports.renderCreateAsset = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.render('assets/create', { categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Render the view to edit an existing asset
exports.renderEditAsset = async (req, res) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    const categories = await Category.findAll();
    if (asset) {
      res.render('assets/edit', { asset, categories });
    } else {
      res.status(404).json({ error: 'Asset not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new asset
exports.createAsset = async (req, res) => {
    try {
      const asset = await Asset.create(req.body);
      res.redirect('/assets');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update an existing asset
  exports.updateAsset = async (req, res) => {
    try {
      const [updated] = await Asset.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        res.redirect('/assets');
      } else {
        res.status(404).json({ error: 'Asset not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete an asset
  exports.deleteAsset = async (req, res) => {
    try {
      const deleted = await Asset.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.redirect('/assets');
      } else {
        res.status(404).json({ error: 'Asset not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
