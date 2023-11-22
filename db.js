const { Sequelize } = require('sequelize');

// Database
const sequelize = new Sequelize(
    'cloud_7z4q', // Database name
    'cloud', // Username
    'opJr86URM2bKNgPMC7h8aU2nfmsWOiAv', // Password
    {
        host: 'dpg-clesb7s15k1s73f5nv7g-a',
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        define: {
            createdAt: 'added',
            updatedAt: 'updated',
        }
    },
);

// Testing the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database successfully.');
        await sequelize.sync(); // This syncs your models with the database schema
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
})();

module.exports = sequelize;
