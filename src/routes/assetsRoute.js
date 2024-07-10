const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

router.get('/', assetController.renderAllAssets);
router.get('/create', assetController.renderCreateAsset);
router.get('/:id/edit', assetController.renderEditAsset);
router.post('/', assetController.createAsset);
router.put('/:id', assetController.updateAsset);
router.delete('/:id', assetController.deleteAsset);

module.exports = router;
