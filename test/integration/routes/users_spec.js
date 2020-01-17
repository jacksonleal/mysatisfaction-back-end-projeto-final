import User from '../../../src/models/user';

describe('Routes: Users', () => {
  let request;
  let app;

  before(async () => {
    app = await setupApp();
    request = supertest(app);
  });

  after(async () => await app.database.connection.close());

  const defaultUser = {
    nome: 'default usuario',
    email: 'leal@leal.com',
    senha: '1234'
  };
  const expectedUser = {
    __v: 0,
    _id: '56cb91bdc3464f14678934ca',
    nome: 'default usuario',
    email: 'leal@leal.com',
    senha: '1234'
  };

  beforeEach(async () => {
    await User.deleteMany();

    const user = new User(defaultUser);
    user._id = '56cb91bdc3464f14678934ca';
    return await user.save();
  });

  afterEach(async () => await User.deleteMany());

  describe('GET /users', () => {
    it('should return a list of users', done => {
      request.get('/users').end((err, res) => {
        expect(res.body).to.eql([expectedUser]);
        done(err);
      });
    });
  });
});
