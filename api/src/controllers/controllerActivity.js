const { Country, Activity } = require('../db')


module.exports = {
    // [ ] POST /activity:
    createActivity: async function(req, res, next){
        try {
        const { name, difficulty, duration, season, countries } = req.body;
        let createdActivity = await Activity.create({
            // where: {
                name,
                difficulty,
                duration,
                season,
            // }
        });
        const findedCountry = await Country.findOne({
            where: {
                name: countries,
            }
        });
        await createdActivity.addCountry(findedCountry);
        res.status(200).json(createdActivity);
        }catch(err){
            next(err);
        };
},
    deleteActivity: async function(req, res, next){
        try {
        const { id } = req.params;
        await Activity.destroy({
            where: {
                id:id
            }
        });
        res.status(200).json({message:"Deleted successfully"})
        }catch(err){
            next(err);
        };
},
    getAllActivities: async function(req, res, next){
        try {
        let activities = await Activity.findAll({
            include: {
                model: Country,
                attributes: ["name"]
            }
        });
        res.status(200).json(activities);
        }catch(err){
            next(err);
        };
},
};