import UsersController from '../../../src/controllers/users';
import sinon from 'sinon';
import User from '../../../src/models/user';

describe('Controllers: Users', () => {
  const defaultUser = [
    {
      nome: 'default usuario',
      email: 'leal@leal.com',
      senha: '1234'
    }
  ];

  describe('get() users', () => {
    it('should return a list of users', async () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };

      User.find = sinon.stub();
      User.find.withArgs({}).resolves(defaultUser);

      const usersController = new UsersController(User);

      await usersController.get(request, response);

      sinon.assert.calledWith(response.send, defaultUser);
    });

    it('should return 400 when an error occurs', async () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      };

      response.status.withArgs(400).returns(response);
      User.find = sinon.stub();
      User.find.withArgs({}).rejects({ message: 'Error' });

      const usersController = new UsersController(User);

      await usersController.get(request, response);

      sinon.assert.calledWith(response.send, 'Error');
    });
  });
});
