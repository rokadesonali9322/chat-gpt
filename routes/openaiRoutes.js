

const express = require("express");
const { summaryController, ParagraphController,ChatbotController
    ,jsconverterController,scifiImageController} =
     require("../controllers/openaiControllers");

const router = express.Router();

// route
router.post('/summary',summaryController)
router.post('/paragraph',ParagraphController)
router.post('/chatbot',ChatbotController)
router.post('/js-converter',jsconverterController)
router.post('/scifi-image',scifiImageController)
module.exports = router