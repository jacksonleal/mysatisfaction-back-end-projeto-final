class ProductsController {

  get(req, res) {
    return res.send([{
      nome: 'Default usuario',
      email: 'leal@leal.com',
      senha: '1234'
    }])
  }
}

export default ProductsController;
