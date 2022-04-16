const { Country, Activity } = require('../db')


module.exports = {
    // [ ] POST /activity:
    createActivity: async function(req, res, next){
        try {
        const { name, difficulty, duration, season, country } = req.body;
        // console.log("BODY", req.body)
        let createdActivity = await Activity.create({
                name,
                difficulty,
                duration,
                season,
        });

        country.map(async c => {
            const findedCountry = await Country.findAll(
                { 
                    where: {
                        name: c
                    }
                })
                await createdActivity.addCountry(findedCountry);
        });
        // const findedCountry = await Country.findOne({
        //     where: {
        //         name: country,
        //     }
        // });
        // console.log("PAÍSS", country)
        res.status(200).json(createdActivity);
        }catch(err){
            next(err);
        };
},
//     deleteActivity: async function(req, res, next){
//         try {
//         const { id } = req.params;
//         await Activity.destroy({
//             where: {
//                 id:id
//             }
//         });
//         res.status(200).json({message:"Deleted successfully"})
//         }catch(err){
//             next(err);
//         };
// },
    getAllActivities: async function(req, res, next){
        try {
        let activities = await Activity.findAll({

            include: {
                model: Country,
                attributes: ["name"]
                //  through: { attributes : []}
            }
        });
        res.status(200).json(activities);
        }catch(err){
            next(err);
        };
},
};