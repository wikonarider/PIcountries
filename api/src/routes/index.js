const { Router } = require('express');
const { getCountries } = require('../controllers/controllerCountry');
const {     
    createActivity,
    deleteActivity,
    getAllActivities, 
} = require('../controllers/controllerActivity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// GET /countries
router.get('/countries', getCountries);
router.get('/countries/:id', getCountries);
router.get('/countries/?name=', getCountries);
router.post('/activities/add', createActivity);
// EXTRAS -----------------------------------------
router.delete('/delete/:id', deleteActivity);
router.get('/activities', getAllActivities);   



module.exports = router;
