const { Activity , Country } = require("../db");

const getActivities = async (req , res) => {
    try {
       const allActivities = await Activity.findAll({
            include: Country,
       })

        res.status(200).json(allActivities)
    } catch (error) {
      return res.status(500).send({ message: error.message });  
    }
}

module.exports = getActivities;