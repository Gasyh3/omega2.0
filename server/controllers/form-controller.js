const Form = require("../models/form-model");

// Function to create a new form
exports.createForm = async (req, res) => {
    try {
        const { formNom, formPrenom, formEmail, formTelephone, formMessage } = req.body;
        const form = await Form.create({
            formNom,
            formPrenom,
            formEmail,
            formTelephone,
            formMessage
        });
        res.status(201).json({ message: 'Form created successfully', form });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to delete a form
exports.deleteForm = async (req, res) => {
    try {
        const { id } = req.params;
        await Form.destroy({ where: { id } });
        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get all forms
exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.findAll();
        res.status(200).json({ forms });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}
// Function to get a form by id
exports.getFormById = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await Form.findOne({ where: { id } });
        res.status(200).json({ form });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
}

