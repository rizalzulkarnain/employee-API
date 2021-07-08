const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addAbsens = async (req, res) => {
  try {
    const { TGL_ABSEN, JAM_MASUK, JAM_KELUAR } = req.body;
    const absensiEMployee = await prisma.absensi.create({
      data: {
        TGL_ABSEN,
        JAM_MASUK,
        JAM_KELUAR,
      },
    });

    res.status(200).json({
      success: true,
      data: absensiEMployee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getAbsens = async (req, res) => {
  try {
    const absensiEMployee = await prisma.absensi.findMany({});

    if (!absensiEMployee)
      return res.status(404).json({
        success: false,
        message: 'Absensi EMployee Not Found!,.',
      });

    res.status(200).json({
      success: true,
      data: absensiEMployee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

module.exports = {
  getAbsens,
  addAbsens,
};
