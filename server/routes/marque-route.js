const express = require("express");
const marqueController = require("../controllers/marque-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", marqueController.createMarque);
router.put("/:id", marqueController.updateMarque);
router.delete("/:id", marqueController.deleteMarque);
router.get("/", marqueController.getAllMarques);
router.get("/category/:categoryId", marqueController.getMarquesByCategory);

module.exports = router;
