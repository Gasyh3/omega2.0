const express = require("express");
const marqueController = require("../controllers/marque-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", authMiddleware, marqueController.createMarque);
router.put("/:id", authMiddleware, marqueController.updateMarque);
router.delete("/:id", authMiddleware, marqueController.deleteMarque);
router.get("/", marqueController.getAllMarques);
router.get("/category/:categoryId", marqueController.getMarquesByCategory);

module.exports = router;
