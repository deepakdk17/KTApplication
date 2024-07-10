const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeRoutes');
const assetRoutes = require('./routes/assetsRoute');
const categoryRoutes = require('./routes/categoryRoute');
const { sequelize } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'jade');
app.set('views', './src/views');

// Define routes
app.use('/employees', employeeRoutes);
app.use('/assets', assetRoutes);
app.use('/categories', categoryRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
