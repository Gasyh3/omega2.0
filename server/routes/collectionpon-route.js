const express = require("express");
const collectionponController = require("../controllers/collectionpon-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.post("/", authMiddleware, collectionponController.createCollectionPon);
router.put("/:id", authMiddleware, collectionponController.updateCollectionPon);
router.delete("/:id", authMiddleware, collectionponController.deleteCollectionPon);
router.get("/", collectionponController.getAllCollectionPons);
router.get("/:id", collectionponController.getCollectionPonById);
router.get("/:id/:name", collectionponController.getCollectionPonByName);

module.exports = router;