const express = require("express");
const formController = require("../controllers/form-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", formController.createForm);
router.delete("/:id", authMiddleware, formController.deleteForm);
router.get("/", formController.getAllForms);
router.get("/:id", formController.getFormById);

module.exports = router;