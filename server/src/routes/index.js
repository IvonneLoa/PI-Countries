const { Router } = require("express");
const router = Router(); // para poder usar router

//controladores
const getCountries = require("../controllers/getCountries.js");
const getCountriesbyId = require("../controllers/getCountriesbyId.js");
const getCountriesbyName = require("../controllers/getCountriesbyName.js");
const postActivities = require("../controllers/postActivities.js");
const getActivities = require("../controllers/getActivities.js");


//rutas
router.get("/countries", getCountries) //solicita todos los paises a la bd
router.get("/countries/:id", getCountriesbyId) //solicita el pais por id a la bd
router.get("/countries/:name", getCountriesbyName)
router.post("/activities", postActivities) // crea una nueva actividad turistica
router.get("/activities", getActivities) // solicita la lista de actividades turisticas

module.exports = router;
