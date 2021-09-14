module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
            type: Sequelize.STRING
        },
      role: {
            type: Sequelize.INTEGER
        },
      practice: {
            type: Sequelize.INTEGER
        }
    });

    return User;
};
