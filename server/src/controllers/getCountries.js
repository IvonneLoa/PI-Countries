const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const getCountries = async (req , res) => {
    try {
      let {name } = req.query;
      if(name) {
        const country = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`
            }
          },
          incluede: {
            model: Activity,
            attributes: ["name"],
            through: {
              attributes: []
            }
          }
        });
        return country.length > 0 ? res.status(200).json(country) : 
        res.status(404).send(`No existe país con el nombre ${name}`)
      }
      const countries = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      });
      return countries.length > 0 ? res.status(200).json(countries) :
      res.status(404).send("No existen registros de países")
    } catch (error) {
      res.status(500).send(error.message)
      
    }
}

module.exports = getCountries