import Welcome from '../../../src/models/welcome';
import AuthService from '../../../src/services/auth';

describe('Routes: welcome', () => {
  const defaultId = '56cb91bdc3464f14678934ca';
  const defaultWelcome = {
    name: 'Default welcome'
  };
  const expectedWelcome = {
    __v: 0,
    _id: defaultId,
    name: 'Default welcome'
  };
  const expectedAdminUser = {
    _id: defaultId,
    name: 'Jhon Doe',
    email: 'jhon@mail.com',
    role: 'admin'
  };
  const authToken = AuthService.generateToken(expectedAdminUser);

  beforeEach(async () => {
    await Welcome.deleteMany();

    const welcome = new Welcome(defaultWelcome);
    welcome._id = '56cb91bdc3464f14678934ca';
    return await welcome.save();
  });

  afterEach(async () => await Welcome.deleteMany());

  describe('GET /welcome', () => {
    it('deve retornar uma lista de boas-vindas', done => {

      request
        .get('/welcome')
        .set({ 'x-access-token': authToken })
        .end((err, res) => {
          expect(res.body).to.eql([expectedWelcome]);
          done(err);
        });
    });

    context('when an id is specified', done => {
      it('deve retornar 200 com uma bem-vinda', done => {

        request
          .get(`/welcome/${defaultId}`)
          .set({ 'x-access-token': authToken })
          .end((err, res) => {
            expect(res.statusCode).to.eql(200);
            expect(res.body).to.eql([expectedWelcome]);
            done(err);
          });
      });
    });
  });

  describe('POST /welcome', () => {
    context('when posting a welcome', () => {

      it('deve retornar uma nova bem-vinda com o código de status 201', done => {
        const customId = '56cb91bdc3464f14678934ba';
        const newWelcome = Object.assign({}, { _id: customId, __v: 0 }, defaultWelcome);
        const expectedSavedWelcome = {
          __v: 0,
          _id: customId,
          name: 'Default welcome'
        };

        request
          .post('/welcome')
          .set({ 'x-access-token': authToken })
          .send(newWelcome)
          .end((err, res) => {
            expect(res.statusCode).to.eql(201);
            expect(res.body).to.eql(expectedSavedWelcome);
            done(err);
          });
      });
    });
  });

  describe('PUT /welcome/:id', () => {
    context('when editing a welcome', () => {
      it('deve atualizar o bem-vindo e retornar 200 como código de status', done => {
        const customWelcome = {
          name: 'Custom name'
        };
        const updatedWelcome = Object.assign({}, customWelcome, defaultWelcome)

        request
          .put(`/welcome/${defaultId}`)
          .set({ 'x-access-token': authToken })
          .send(updatedWelcome)
          .end((err, res) => {
            expect(res.status).to.eql(200);
            done(err);
          });
      });
    });
  });

  describe('DELETE /welcome/:id', () => {
    context('when deleting a welcome', () => {
      it('deve excluir um bem-vindo e retornar 204 como código de status', done => {

        request
          .delete(`/welcome/${defaultId}`)
          .set({ 'x-access-token': authToken })
          .end((err, res) => {
            expect(res.status).to.eql(204);
            done(err);
          });
      });
    });
  });
});
