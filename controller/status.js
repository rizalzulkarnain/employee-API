const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addStatus = async (req, res) => {
  try {
    const { STATUS } = req.body;
    const statusEmployee = await prisma.status.create({
      data: {
        STATUS,
      },
    });

    res.status(200).json({
      success: true,
      data: statusEmployee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getStatus = async (req, res) => {
  try {
    const statusEmployee = await prisma.status.findMany({});

    if (!statusEmployee)
      return res.status(404).json({
        success: false,
        message: 'Status Employee Not Found!.',
      });

    res.status(200).json({
      success: true,
      data: statusEmployee,
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
  getStatus,
  addStatus,
};
