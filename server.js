const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello World',
  });
});

app.use('/jabatan', require('./routes/jabatan'));
app.use('/karyawan', require('./routes/karyawan'));
app.use('/absensi', require('./routes/absensi'));
app.use('/status', require('./routes/status'));

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server Running Good on Port: ${PORT} !`));
