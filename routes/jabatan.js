const express = require('express');
const router = express.Router();

const { getPosition, addPosition } = require('../controller/jabatan');

router.post('/', addPosition);
router.get('/', getPosition);

module.exports = router;
