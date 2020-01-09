const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body.product);
    res.status(200).send({ "message": "product register with success", "product": product});
  }
}
