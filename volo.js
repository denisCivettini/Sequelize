const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config');
const { table } = require('console');

class Volo extends Model { }

Volo.init({
    id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true
    },
    orariopartenza: {
        type: DataTypes.TIME
    },
    durataminuti: {
        type: DataTypes.SMALLINT
    },
    fkaereoportopartenza: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    fkaereoportoarrivo: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'volo',
    tableName: 'volo',
});

module.exports = Volo;