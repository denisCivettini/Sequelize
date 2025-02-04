const db = require('./associazioni');

db.sequelize.authenticate().then(() => {   
    console.log('Connection has been established successfully.');   
}).catch((err) => {
    console.error('Unable to connect to the database:', err); 
})

db.sequelize.sync().then(() => {
    console.log('Database & tables created!');
}).catch((err) => {
    console.error('Unable to create tables:', err);
});