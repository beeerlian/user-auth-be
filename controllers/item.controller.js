const db = require('../models')
const Item = db.item;
exports.getAll = (req, res) => {
       Item.findAll()
              .then(data => {
                     res.status(200).send({
                            success: true,
                            data
                     });
              })
              .catch(err => {
                     res.status(500).send({
                            message:
                                   err.message
                     });
              });
}

exports.get = (req, res) => {
       const id = req.params.id;
       Item.findByPk(id)
              .then(data => {
                     res.status(200).send({
                            success: true,
                            data
                     });
              })
              .catch(err => {
                     res.status(500).send({
                            success: false,
                            message: err.message
                     });
              });
}

exports.update = (req, res) => {
       const id = req.params.id;
       Item.findByPk(id)
              .then(data => {
                     data.dataValues = { ...data.dataValues, ...req.body };
                     data.save().then(data => {
                            res.status(200).send({
                                   success: true,
                                   data
                            });
                     })
                            .catch(err => {
                                   res.status(500).send({
                                          success: false,
                                          message: err.message
                                   });
                            });
              })
              .catch(err => {
                     res.status(500).send({
                            success: false,
                            message: err.message
                     });
              });
}

exports.delete = (req, res) => {
       const id = req.params.id;
       Item.findByPk(id)
              .then(data => {
                     data.destroy().then(result => {
                            res.status(200).send({
                                   success: true,
                                   data
                            });
                     })
                            .catch(err => {
                                   res.status(500).send({
                                          success: false,
                                          message: err.message
                                   });
                            });
              })
              .catch(err => {
                     res.status(500).send({
                            success: false,
                            message: err.message
                     });
              });
}

exports.create = (req, res) => {
       Item.create(req.body).then(data => {
              res.status(200).send({
                     success: true,
                     data
              });
       }).catch(err => {
              console.log(err)
              res.status(500).send({
                     success: false,
                     message: err.message
              });
       })
}


