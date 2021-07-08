const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addEmployee = async (req, res) => {
  try {
    const { NAMA, ALAMAT, JABATAN_ID, STATUS_ID, ABSENSI_ID } = req.body;

    const employee = await prisma.karyawan.create({
      data: {
        NAMA,
        ALAMAT,
        JABATAN_ID,
        STATUS_ID,
        ABSENSI_ID,
      },
    });

    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await prisma.karyawan.findMany({
      include: {
        jabatan: true,
        status: true,
        absensi: true,
      },
    });

    if (!employee)
      return res.status(404).json({
        success: false,
        message: 'Employee Not Found!,.',
      });

    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id, NAMA, ALAMAT } = req.body;
    const updatedUser = await prisma.karyawan.update({
      where: {
        id: id,
      },
      data: {
        NAMA,
        ALAMAT,
      },
    });

    if (!updatedUser)
      return res.status(404).json({
        success: false,
        message: 'Update Failed',
      });

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
    console.log(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.karyawan.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deletedUser)
      return res.status(404).json({
        success: false,
        message: 'Failed Delete User.',
      });

    res.status(200).json({
      success: true,
      data: deletedUser,
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
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
