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
  },

  async show(req, res) {
    const { id } = req.params
    const product = await Product.findById(id);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body.product, { new: true });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    res.send({ "message": "product remove with success" });
  },
}
