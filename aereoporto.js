const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config');
const { table } = require('console');

class Aereoporto extends Model { }

Aereoporto.init({
    codice: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(20)
    },
    fkcategoria: {
        type: DataTypes.TINYINT,
    },
    fkcitta: {
        type: DataTypes.SMALLINT,
    }
}, {
    sequelize,
    modelName: 'aereoporto',
    tableName: 'aereoporto',
});

module.exports = Aereoporto;