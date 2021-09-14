module.exports = (sequelize, Sequelize) => {
    const Opening = sequelize.define("opening", {
      title: {
        type: Sequelize.STRING
      },
      openDate: {
        type: Sequelize.DATE
      },
      closeDate: {
        type: Sequelize.DATE
      },
      rate: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.INTEGER
      },
      client: {
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.INTEGER
      }
    });

  return Opening;
};
