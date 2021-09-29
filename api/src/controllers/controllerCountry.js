const { Country, Activity } = require('../db')
const axios = require('axios')

module.exports = {
    getCountries: async function(req, res, next){
        const { name } = req.query;
        const { id } = req.params;
        try {
            let resApi = await axios.get(`https://restcountries.com/v3/all`);
            let countries = resApi.data.map(country => {
                return {
                    id: country.ccn3 || country.cca3,
                    cod: country.cca3 || "",
                    name: country.name.common || 'country name',
                    flag: country.flags.find(e=> e.includes('png')) || 'img',
                    continent: country.region,
                    capital: country.capital && country.capital[0] || 'sorry, at the moment it is not available',
                    region: country.subregion || 'sorry, at the moment it is not available',
                    area: country.area || 0,
                }
            });
            // console.log(countries);
            // res.status(200).json(countries);
            //---------------------------------------------------------------------------------
            let allCountries = countries.map(async c => {
                await Country.findOrCreate({
                    where: {
                        id: c.id,
                        cod: c.cod,
                        name: c.name,
                        flag: c.flag,
                        continent: c.continent,
                        capital: c.capital,
                        region: c.region,
                        area: c.area
                    }
                })
            });
            allCountries = await Country.findAll({
                include: [{
                    model: Activity,
                    attributes: ['name', 'difficulty', 'duration', 'season'],
                },],
            });
        // [ ] GET /countries/{idPais}:
        if(id){
            allCountries = allCountries.find(ccod => ccod.cod.toLowerCase() === id.toLowerCase());
        };
        // [ ] GET /countries?name=
        if(name){
            allCountries = allCountries.find(cname => cname.name[0].toLowerCase().includes(name.toLowerCase()));
        };
        res.status(200).json(allCountries);
        }catch(err){
            next(err)
        };
    },

    //     setCountry: async function(req, res, next){
    //         const { countries } = req.body
    //         try {
    //         let activities = await Activity.setCountry(countries);
    //         }catch(err){
    //             next (err);
    //         }
    // },
};




// ----------------------------------------------------
        //     const countriesDB = countries.map(async c => {
        //         await Country.findOrCreate({
        //             where: {
        //                 id: c.id,
        //                 name: c.name,
        //                 flag: c.flag,
        //                 continent: c.continent,
        //                 capital: c.capital,
        //                 region: c.region,
        //                 area: c.area
        //             }
        //         })
        //     });
        //     await Promise.all(countriesDB)
        //     .then(cs =>{
        //             console.log("PAÍSES", cs)
        //             return res.status(200).json(cs);
        //         }) 


            //  await Promise.all(countries.map(c => Country.findOrCreate({ 
            //     where: {
            //         id: c.id,
            //         name: c.name,
            //         flag: c.flag,
            //         continent: c.continent,
            //         capital: c.capital,
            //         region: c.region,
            //         area: c.area
            //     }
            //  })))
            // let localCountries = await Country.findAll();
            // console.log("PAÍSES", localCountries);
            // console.log("PAÍSES", countriesDB);
            // return res.status(200).json(countriesDB);

            // let allCountries = await apires.forEach(e => {
            //      Country.findOrCreate({
            //         where: apires[0]
                    // {
                    //     id: e.id,
                    //     name: e.name,
                    //     flag: e.flag,
                    //     continent: e.continent,
                    //     capital: e.capital,
                    //     region: e.region,
                    //     area: e.area,
                    //     population: e.population,
                    // }
            //     })
            // })

            // let allCountries = countries.map( async e => {
            //     await Country.findOrCreate({
            //         where: {
            //             id: e.id,
            //             name: e.name,
            //             flag: e.flag,
            //             continent: e.continent,
            //             capital: e.capital,
            //             region: e.region,
            //             area: e.area,
            //         }
            //     })
            // });