const { Country, Activity } = require("../db");

const getCountrybyId = async (req , res) => {
    try {
        const { id } = req.params;
    
        
        const country = await Country.findByPk(id, {
          include: {
            model: Activity,
            through: {
              attributes: []
            }
          },
        });
    
        if (!country) {
          return res.status(404).send({ message: "País no encontrado" });
        }
    
        return res.status(200).json(country);
      } catch (error) {
        return res.status(500).send({ message: "Error al obtener el país", error: error.message });
      }
    };


module.exports = getCountrybyId