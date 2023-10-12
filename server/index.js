const saveDB = require ("./src/saveDB.js")
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: true })
.then(() => saveDB(Country))
.then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))

//force: true elimina y recrea todas las tablas en la base de datos.

