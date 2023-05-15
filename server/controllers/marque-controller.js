const Marque = require("../models/marque-model");

// Function to create a new marque
exports.createMarque = async (req, res) => {
  try {
    const { marqueName, marqueImg, categoryId } = req.body;
    const marque = await Marque.create({
      marqueName,
      marqueImg,
      categoryId,
    });
    res.status(201).json({ message: "Marque created successfully", marque });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to update a marque
exports.updateMarque = async (req, res) => {
  try {
    const { marqueName, marqueImg, categoryId } = req.body;
    const { id } = req.params;
    const marque = await Marque.update(
      { marqueName, marqueImg, categoryId },
      { where: { id } }
    );
    res.status(200).json({ message: "Marque updated successfully", marque });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to delete a marque
exports.deleteMarque = async (req, res) => {
  try {
    const { id } = req.params;
    await Marque.destroy({ where: { id } });
    res.status(200).json({ message: "Marque deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get all marques
exports.getAllMarques = async (req, res) => {
  try {
    const marques = await Marque.findAll();
    res.status(200).json({ marques });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};

// Function to get all marques by category
exports.getMarquesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const marques = await Marque.findAll({ where: { categoryId } });
    res.status(200).json({ marques });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err });
  }
};
