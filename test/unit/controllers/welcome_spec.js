import WelcomeController from '../../../src/controllers/welcome';
import sinon from 'sinon';
import Welcome from '../../../src/models/welcome';

describe('Controller: Welcome', () => {
  const defaultWelcome = [
    {
      __v: 0,
      _id: '56cb91bdc3464f14678934ca',
      name: 'Default usuario',
    }
  ];

  const defaultRequest = {
    params: {}
  };

  describe('get() Users', () => {
    it('should return a list of Users', async () => {
      const response = {
        send: sinon.spy()
      };

      Welcome.find = sinon.stub();
      Welcome.find.withArgs({}).resolves(defaultWelcome);

      const welcomeController = new WelcomeController(Welcome);

      await welcomeController.get(defaultRequest, response);

      sinon.assert.calledWith(response.send, defaultWelcome);
    });

    it('should return 400 when an error occurs', async () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      };

      response.status.withArgs(400).returns(response);
      Welcome.find = sinon.stub();
      Welcome.find.withArgs({}).rejects({ message: 'Error' });

      const welcomeController = new WelcomeController(Welcome);

      await welcomeController.get(request, response);

      sinon.assert.calledWith(response.send, 'Error');
    });
  });

  describe('getById()', () => {
    it('should return one Users', async () => {
      const fakeId = 'a-fake-id';
      const request = {
        params: {
          id: fakeId
        }
      };
      const response = {
        send: sinon.spy()
      };

      Welcome.find = sinon.stub();
      Welcome.find.withArgs({ _id: fakeId }).resolves(defaultWelcome);

      const welcomeController = new WelcomeController(Welcome);
      await welcomeController.getById(request, response);

      sinon.assert.calledWith(response.send, defaultWelcome);
    });
  });

  describe('create() user', () => {
    it('should save a new user successfully', async () => {
      const requestWithBody = Object.assign(
        {},
        { body: defaultWelcome[0] },
        defaultRequest
      );
      const response = {
        send: sinon.spy(),
        status: sinon.stub()
      };
      class fakeWelcome {
        save() { }
      }

      response.status.withArgs(201).returns(response);
      sinon
        .stub(fakeWelcome.prototype, 'save')
        .withArgs()
        .resolves();

      const welcomeController = new WelcomeController(fakeWelcome);

      await welcomeController.create(requestWithBody, response);
      sinon.assert.calledWith(response.send);
    });

    context('when an error occurs', () => {
      it('should return 422', async () => {
        const response = {
          send: sinon.spy(),
          status: sinon.stub()
        };

        class fakeWelcome {
          save() { }
        }

        response.status.withArgs(422).returns(response);
        sinon
          .stub(fakeWelcome.prototype, 'save')
          .withArgs()
          .rejects({ message: 'Error' });

        const welcomeController = new WelcomeController(fakeWelcome);

        await welcomeController.create(defaultRequest, response);
        sinon.assert.calledWith(response.status, 422);
      });
    });
  });

  describe('update() users', () => {
    it('should respond with 200 when the user has been updated', async () => {
      const fakeId = 'a-fake-id';
      const updatedWelcome = {
        _id: fakeId,
        name: 'Updated user-name',
      };
      const request = {
        params: {
          id: fakeId
        },
        body: updatedWelcome
      };
      const response = {
        sendStatus: sinon.spy()
      };

      class fakeWelcome {
        static updateOne() { }
      }

      const updateOneStub = sinon.stub(fakeWelcome, 'updateOne');
      updateOneStub
        .withArgs({ _id: fakeId }, updatedWelcome)
        .resolves(updatedWelcome);

      const welcomeController = new WelcomeController(fakeWelcome);

      await welcomeController.update(request, response);
      sinon.assert.calledWith(response.sendStatus, 200);
    });

    context('when an error occurs', () => {
      it('should return 422', async () => {
        const fakeId = 'a-fake-id';
        const updatedWelcome = {
          _id: fakeId,
          name: 'Updated user-name',
        };
        const request = {
          params: {
            id: fakeId
          },
          body: updatedWelcome
        };
        const response = {
          send: sinon.spy(),
          status: sinon.stub()
        };

        class fakeWelcome {
          static updateOne() { }
        }

        const updateOneStub = sinon.stub(fakeWelcome, 'updateOne');
        updateOneStub
          .withArgs({ _id: fakeId }, updatedWelcome)
          .rejects({ message: 'Error' });
        response.status.withArgs(422).returns(response);

        const welcomeController = new WelcomeController(fakeWelcome);

        await welcomeController.update(request, response);
        sinon.assert.calledWith(response.send, 'Error');
      });
    });
  });

  describe('delete() user', () => {
    it('should respond with 204 when the user has been deleted', async () => {
      const fakeId = 'a-fake-id';
      const request = {
        params: {
          id: fakeId
        }
      };
      const response = {
        sendStatus: sinon.spy()
      };

      class fakeWelcome {
        static deleteOne() { }
      }

      const deleteOneStub = sinon.stub(fakeWelcome, 'deleteOne');

      deleteOneStub.withArgs({ _id: fakeId }).resolves();

      const welcomeController = new WelcomeController(fakeWelcome);

      await welcomeController.remove(request, response);
      sinon.assert.calledWith(response.sendStatus, 204);
    });

    context('when an error occurs', () => {
      it('should return 400', async () => {
        const fakeId = 'a-fake-id';
        const request = {
          params: {
            id: fakeId
          }
        };
        const response = {
          send: sinon.spy(),
          status: sinon.stub()
        };

        class fakeWelcome {
          static deleteOne() { }
        }

        const deleteOneStub = sinon.stub(fakeWelcome, 'deleteOne');

        deleteOneStub.withArgs({ _id: fakeId }).rejects({ message: 'Error' });
        response.status.withArgs(400).returns(response);

        const welcomeController = new WelcomeController(fakeWelcome);

        await welcomeController.remove(request, response);
        sinon.assert.calledWith(response.send, 'Error');
      });
    });
  });
});
