const volo = require('./volo');
const aereoporto = require('./aereoporto');
const sequelize = require('sequelize');

aereoporto.hasMany(volo, { foreignKey: 'fkaereoportopartenza' });
volo.belongsTo(aereoporto, { foreignKey: 'fkaereoportopartenza' });

aereoporto.hasMany(volo, { foreignKey: 'fkaereoportoarrivo' });
volo.belongsTo(aereoporto, { foreignKey: 'fkaereoportoarrivo' });


const db = {
    sequelize,
    tabelle: [volo, aereoporto]
};

module.exports = db;