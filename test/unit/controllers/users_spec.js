import UsersController from '../../../src/controllers/users';
import sinon from 'sinon';

describe('Controllers: Users', () => {
  const defaultUser = [{
    nome: 'Default usuario',
    email: 'leal@leal.com',
    senha: '1234'
  }];

  describe('get() users', () => {
    it('should return a list of Users', () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };

      const usersController = new UsersController();
      usersController.get(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(defaultUser)).to.be.true;
    });
  });
});
