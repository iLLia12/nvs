const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://root:root@localhost:5432/test_db', {
  define: {
    timestamps: false
  },
});

const sequelizeAuthenticate = async () => await sequelize.authenticate();

try {
  sequelizeAuthenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize