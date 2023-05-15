const Tatouage = require('../models/tatouage-model');

// Function to create a new tatouage
exports.createTatouage = async (req, res) => {
    try {
        const { tatouageName, tatouageImg, tatouageDescription, tatouagePrice } = req.body;
        const tatouage = await Tatouage.create({
            tatouageName,
            tatouageImg,
            tatouageDescription,
            tatouagePrice
        });
        res.status(201).json({ message: 'Tatouage created successfully', tatouage });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}  
// Function to update a tatouage
exports.updateTatouage = async (req, res) => {
    try {
        const { tatouageName, tatouageImg, tatouageDescription, tatouagePrice } = req.body;
        const { id } = req.params;
        const tatouage = await Tatouage.update({ tatouageName, tatouageImg, tatouageDescription, tatouagePrice }, { where: { id } });
        res.status(200).json({ message: 'Tatouage updated successfully', tatouage });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to delete a tatouage
exports.deleteTatouage = async (req, res) => {
    try {
        const { id } = req.params;
        await Tatouage.destroy({ where: { id } });
        res.status(200).json({ message: 'Tatouage deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get all tatouages
exports.getAllTatouages = async (req, res) => {
    try {
        const tatouages = await Tatouage.findAll();
        res.status(200).json({ tatouages });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get a tatouage by id
exports.getTatouageById = async (req, res) => {
    try {
        const { id } = req.params;
        const tatouage = await Tatouage.findOne({ where: { id } });
        res.status(200).json({ tatouage });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get a tatouage by name
exports.getTatouageByName = async (req, res) => {
    try {
        const { tatouageName } = req.params;
        const tatouage = await Tatouage.findOne({ where: { tatouageName } });
        res.status(200).json({ tatouage });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
