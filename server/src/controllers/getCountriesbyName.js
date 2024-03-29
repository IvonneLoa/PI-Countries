const { Op } = require("sequelize");
const { Country } = require("../db");

const getCountrybyName = async (req , res) => {
    try {
        const { name } = req.query;
    
        
        const countries = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`, 
            },
          },
        });
    
        if (countries.length === 0) {
          return res.status(404).send("No se encontraron países con el nombre proporcionado.");
        }
        return res.status(200).json(countries);
      } catch (error) {
        return res.status(500).send("Error al obtener países por nombre");
      }
}

module.exports = getCountrybyName