describe('Routes: Usuarios', () => {
  const defaultUsuario = {
    nome: 'Default usuario',
    email: 'leal@leal.com',
    senha: '1234'
  };

  describe('GET /usuarios', () => {
    it('retorna uma lista de usuários', done => {

      request
        .get('/usuarios')
        .end((err, res) => {
          expect(res.body[0]).to.eql(defaultUsuario);
          done(err);
        });
    });
  });
});
