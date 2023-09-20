const { Activity , Country } = require("../db");

const getActivities = async (req , res) => {
    try {
       const activities = await Activity.findAll({
            include: {
              model: Country,
              //asociacion con el modelo Country
              through: {
                attributes: []
              }
            },
       });
       return activities.length > 0 ? res.status(200).json(activities) : res.status(404).send("No existen actividades turisticas")
    } catch (error) {
      res.status(500).send(error.message);  
    }
}

module.exports = getActivities;