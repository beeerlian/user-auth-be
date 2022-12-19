const db = require('../models')
const User = db.user;
exports.getAll = (req, res) => {
       User.findAll()
              .then(data => {
                     res.status(200).send({
                            success: true,
                            data
                     }
                     );
              })
              .catch(err => {
                     res.status(500).send({
                            success: false,
                            message:
                                   err.message
                     });
              });
}

exports.get = (req, res) => {
       const id = req.params.id;
       User.findByPk(id)
              .then(data => {
                     res.status(200).send({
                            success: true,
                            data
                     });
              })
              .catch(err => {
                     res.status(500).send({
                            message: err.message
                     });
              });
}

exports.update = (req, res) => {
       const id = req.params.id;
       User.findByPk(id)
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
       User.findByPk(id)
              .then(data => {

                     data.destroy().then(data => {
                            res.status(200).send({
                                   success: true,
                                   data
                            });
                     })
                            .catch(err => {
                                   res.status(500).send({
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
       User.create(req.body).then(data => {
              res.status(200).send({
                     success: true,
                     data
              });
       }).catch(err => {
              res.status(500).send({
                     success: false,
                     message: err.message
              });
       })
}

exports.register = (req, res) => {
       User.create(req.body).then(data => {
              res.status(200).send({
                     success: true,
                     data
              });
       }).catch(err => {
              res.status(500).send({
                     success: false,
                     message: err.message
              });
       })
}

exports.login = (req, res) => {
       User.findOne({
              where: {
                     email: req.body.email,
                     password: req.body.password
              }
       }).then(data => {
              if (data) {
                     res.status(200).send({
                            success: true,
                            data
                     });
              } else {
                     res.status(400).send({
                            success: false,
                            message: "email and password not match"
                     });
              }
       }).catch(err => {
              res.status(500).send({
                     success: false,
                     message: err.message
              });
       })
       // User.create(req.body).then(data => {
       //        res.status(200).send({
       //               success: true,
       //               data
       //        });
       // }).catch(err => {
       //        res.status(500).send({
       //               message: err.message
       //        });
       // })
}
