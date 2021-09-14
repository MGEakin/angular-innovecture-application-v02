module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      name: {
            type: Sequelize.STRING
        },
      jd: {
            type: Sequelize.STRING
        }
    });

    return Role;
};
