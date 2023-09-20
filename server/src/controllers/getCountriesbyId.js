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
    
        if (!id)
          return res.status(404).send("No existe ID") 
          country ? res.status(200).json(country)
          :
          res.status(404).send(`No existe país con el id: ${id}`)
      } catch (error) {
        return res.status(500).send(error.message);
      }
    };


module.exports = getCountrybyId