const axios = require("axios");
const { saveDB } = require ("./src/saveDB.js")
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Importando info a la BD`);
  saveDB()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
