

module.exports = (sequelize, Sequelize) => {
       const User = sequelize.define("users", {
              name: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              email: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false,
                     unique: true
              },
              password: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              address: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              phone: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              role: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              identity_type: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              identity_number: {
                     type: Sequelize.DataTypes.STRING,
                     allowNull: false
              },
              created_at: {
                     type: 'TIMESTAMP',
                     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                     allowNull: false
              },
              updated_at: {
                     type: 'TIMESTAMP',
                     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                     allowNull: false
              },
       },
              {
                     timestamps: false
              });
       return User;
}






