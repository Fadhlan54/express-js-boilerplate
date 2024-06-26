const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('../docs/swagger.json')

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
