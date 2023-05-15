const Livredor = require('../models/livredor-model');

// Function to create a new livredor
exports.createLivredor = async (req, res) => {
    try {
        const { livredorName, livredorMot } = req.body;
        const livredor = await Livredor.create({
            livredorName,
            livredorMot
        });
        res.status(201).json({ message: 'Livredor created successfully', livredor });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}

// Function to update a livredor
exports.updateLivredor = async (req, res) => {
    try {
        const { livredorName, livredorMot } = req.body;
        const { id } = req.params;
        const livredor = await Livredor.update({ livredorName, livredorMot }, { where: { id } });
        res.status(200).json({ message: 'Livredor updated successfully', livredor });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}

// Function to delete a livredor
exports.deleteLivredor = async (req, res) => {
    try {
        const { id } = req.params;
        await Livredor.destroy({ where: { id } });
        res.status(200).json({ message: 'Livredor deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}

// Function to get all livredors
exports.getAllLivredors = async (req, res) => {
    try {
        const livredors = await Livredor.findAll();
        res.status(200).json({ livredors });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}

