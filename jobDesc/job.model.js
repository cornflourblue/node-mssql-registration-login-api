const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        jobDesc: { type: DataTypes.STRING, allowNull: false },
        canSeeBids: { type: DataTypes.BOOLEAN, allowNull: false },
        canSubmitProjects: { type: DataTypes.BOOLEAN, allowNull: false },
    };


    return sequelize.define('jobDesc', attributes);
}