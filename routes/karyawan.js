const express = require('express');
const router = express.Router();

const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controller/karyawan');

router.post('/', addEmployee);
router.get('/', getEmployee);
router.put('/', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
