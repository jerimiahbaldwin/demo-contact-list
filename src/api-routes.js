let express = require('express')
let router = express.Router()
let contactController = require('./controllers/contactController')


router.get('/contacts', contactController.findAll)

router.get('/contacts/:id', contactController.findById)

router.post('/contacts', contactController.create)

router.put('/contacts/:id', contactController.updateById)

router.delete('/contacts/:id', contactController.deleteById)

module.exports = router