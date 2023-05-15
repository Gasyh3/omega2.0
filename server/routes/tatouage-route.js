const express = require("express");
const tatouageController = require("../controllers/tatouage-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", authMiddleware, tatouageController.createTatouage);
router.put("/:id", authMiddleware, tatouageController.updateTatouage);
router.delete("/:id", authMiddleware, tatouageController.deleteTatouage);
router.get("/", tatouageController.getAllTatouages);
router.get("/:id", tatouageController.getTatouageById);
router.get("/:id/:name", tatouageController.getTatouageByName);

module.exports = router;