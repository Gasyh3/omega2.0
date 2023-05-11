const Work = require("../models/work-model");

// Function to create a new work
exports.createWork = async (req, res) => {
  try {
    const { workName, workDescription, workPrice, categoryId } = req.body;
    const work = await Work.create({
      workName,
      workDescription,
      workPrice,
      categoryId,
    });
    res.status(201).json({ message: "Work created successfully", work });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to update a work
exports.updateWork = async (req, res) => {
  try {
    const { workName, workDescription, workPrice, categoryId } = req.body;
    const { id } = req.params;
    const work = await Work.update(
      { workName, workDescription, workPrice, categoryId },
      { where: { id } }
    );
    res.status(200).json({ message: "Work updated successfully", work });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to delete a work
exports.deleteWork = async (req, res) => {
  try {
    const { id } = req.params;
    await Work.destroy({ where: { id } });
    res.status(200).json({ message: "Work deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get all works
exports.getAllWorks = async (req, res) => {
  try {
    const works = await Work.findAll();
    res.status(200).json({ works });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get a work by id
exports.getWorkById = async (req, res) => {
  try {
    const { id } = req.params;
    const work = await Work.findByPk(id);
    res.status(200).json({ work });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get all works by category
exports.getWorksByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const works = await Work.findAll({ where: { categoryId } });
    res.status(200).json({ works });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};
