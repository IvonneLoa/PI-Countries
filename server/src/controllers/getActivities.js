const { Activity , Country } = require("../db");

const getActivities = async (req , res) => {
    try {
       const activities = await Activity.findAll({
            include: {
              model: Country,
              throug: {
                attributes: []
              }
            },
       });
       return activities.length > 0 ? res.status(200).json(activities) : res.status(404).send("No existen actividades turisticas")
    } catch (error) {
      res.status(500).send({ message: error.message });  
    }
}

module.exports = getActivities;