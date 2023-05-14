const express = require("express");
const livredorController = require("../controllers/livredor-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", authMiddleware, livredorController.createLivredor);
router.put("/:id", authMiddleware, livredorController.updateLivredor);
router.delete("/:id", authMiddleware, livredorController.deleteLivredor);
router.get("/", livredorController.getAllLivredors);

module.exports = router;