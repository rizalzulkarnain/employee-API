const express = require('express');
const router = express.Router();

const { getAbsens, addAbsens } = require('../controller/absensi');

router.post('/', addAbsens);
router.get('/', getAbsens);

module.exports = router;
