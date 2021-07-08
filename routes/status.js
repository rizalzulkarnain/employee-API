const express = require('express');
const router = express.Router();

const { getStatus, addStatus } = require('../controller/status');

router.post('/', addStatus);
router.get('/', getStatus);

module.exports = router;
