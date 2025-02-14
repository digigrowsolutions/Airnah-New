const express = require('express')
const { handleWebhook } = require('../controllers/authController')

const router = express.Router()

router.post('/webhook', handleWebhook)

module.exports = router
