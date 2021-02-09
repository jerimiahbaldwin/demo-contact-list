let db = require('../models')


exports.create = function(req, res) {
  let payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phone: req.body.phone,
    email: req.body.email,
  }
  db.Contact.create(payload)
  .then(data => res.json({status: 'success', data}))
  .catch(err => res.json({status: 'error', message: err.message}))
}

exports.updateById = function(req, res) {
  db.Contact.update(req.body, {
    where: {
      id: req.params.id
    },
    limit: 1
  })
  .then(() => db.Contact.findOne({id: req.params.id})
    .then(data => res.json({status: 'success', data})))
  .catch(err => res.json({status: 'error', message: err.message}))
}

exports.deleteById = function(req, res) {
  db.Contact.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json({status: 'success', data}))
  .catch(err => res.json({status: 'error', message: err.message}))
}

exports.findAll = function(req, res) {
  db.Contact.findAll()
  .then(data => res.json({status: 'success', data}))
  .catch(err => res.json({status: 'error', message: err.message}))
}

exports.findById= function(req, res) {
  db.Contact.findOne({id: req.params.id})
  .then(data => res.json({status: 'success', data}))
  .catch(err => res.json({status: 'error', message: err.message}))
}
