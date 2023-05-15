const CollectionPon = require('../models/collectionpon-model');

// Function to create a new collectionpon
exports.createCollectionPon = async (req, res) => {
    try {
        const { collectionponName, collectionponImg, collectionponDescription, collectionponPrice } = req.body;
        const collectionpon = await CollectionPon.create({
            collectionponName,
            collectionponImg,
            collectionponDescription,
            collectionponPrice
        });
        res.status(201).json({ message: 'CollectionPon created successfully', collectionpon });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to update a collectionpon
exports.updateCollectionPon = async (req, res) => {
    try {
        const { collectionponName, collectionponImg, collectionponDescription, collectionponPrice } = req.body;
        const { id } = req.params;
        const collectionpon = await CollectionPon.update({ collectionponName, collectionponImg, collectionponDescription, collectionponPrice }, { where: { id } });
        res.status(200).json({ message: 'CollectionPon updated successfully', collectionpon });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to delete a collectionpon
exports.deleteCollectionPon = async (req, res) => {
    try {
        const { id } = req.params;
        await CollectionPon.destroy({ where: { id } });
        res.status(200).json({ message: 'CollectionPon deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get all collectionpons
exports.getAllCollectionPons = async (req, res) => {
    try {
        const collectionpons = await CollectionPon.findAll();
        res.status(200).json({ collectionpons });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get a collectionpon by id
exports.getCollectionPonById = async (req, res) => {
    try {
        const { id } = req.params;
        const collectionpon = await CollectionPon.findOne({ where: { id } });
        res.status(200).json({ collectionpon });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get a collectionpon by name
exports.getCollectionPonByName = async (req, res) => {
    try {
        const { collectionponName } = req.params;
        const collectionpon = await CollectionPon.findOne({ where: { collectionponName } });
        res.status(200).json({ collectionpon });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
