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
                        id: c.id || c.cca3,
                        cod: c.cod || "",
                        name: c.name || 'country name',
                        flag: c.flag || 'img',
                        continent: c.continent,
                        capital: c.capital || 'sorry, at the moment it is not available',
                        region: c.region || 'sorry, at the moment it is not available',
                        area: c.area || 0,
                    }
                })
            });
            allCountries = await Country.findAll({
                include: [{
                    model: Activity,
                    attributes: ['name', 'difficulty', 'duration', 'season'],
                    // through: { attributes : []}
                },],
            });
            // console.log("¿CUÁNTOS PAÍSES TENGO?", allCountries.length);
        // [ ] GET /countries/{idPais}:
        if(id) {
            allCountries = allCountries.find(ccod => ccod.cod.toLowerCase() === id.toLowerCase());
        };
        // [ ] GET /countries?name=
        if(name) {
            allCountries = allCountries.filter(cname => cname.name.toLowerCase().includes(name.toLowerCase()));
        };
        res.status(200).json(allCountries);
        }catch(err){
            next(err)
        };
    },
};