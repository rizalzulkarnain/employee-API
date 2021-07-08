const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addPosition = async (req, res) => {
  try {
    const { JABATAN } = req.body;
    const position = await prisma.jabatan.create({
      data: {
        JABATAN,
      },
    });

    res.status(200).json({
      success: true,
      data: position,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getPosition = async (req, res) => {
  try {
    const position = await prisma.jabatan.findMany({});

    if (!position)
      return res.status(404).json({
        success: false,
        message: 'Postion Not Found!.',
      });

    res.status(200).json({
      success: true,
      data: position,
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
  getPosition,
  addPosition,
};
