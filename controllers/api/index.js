const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const setRoutes = require('./setRoutes');
const userRoutes = require('./userRoutes');

router.use('/exercises', exerciseRoutes);
router.use('/sets', setRoutes);
router.use('/users', userRoutes);

module.exports = router;