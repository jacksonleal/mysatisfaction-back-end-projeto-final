import Welcome from '../../../src/models/welcome';

describe('Routes: welcomeUsers', () => {
  const defaultId = '56cb91bdc3464f14678934ca';
  const defaultWelcome = {
    name: 'Default user-name',
  };
  const expectedWelcome = {
    __v: 0,
    _id: defaultId,
    name: 'Default user-name',
  }

  beforeEach(async () => {
    await Welcome.deleteMany();

    const welcome = new Welcome(defaultWelcome);
    welcome._id = '56cb91bdc3464f14678934ca';
    return await welcome.save();
  });

  afterEach(async () => await Welcome.deleteMany());

  describe('GET /fhome', () => {
    it('should return a list of Welcome users', done => {
      request.get('/fhome').end((err, res) => {
        expect(res.body).to.eql([expectedWelcome]);
        done(err);
      });
    });

    context('when an id is specified', done => {
      it('should return 200 with one Welcome users', done => {

        request
          .get(`/fhome/${defaultId}`)
          .end((err, res) => {
            expect(res.statusCode).to.eql(200);
            expect(res.body).to.eql([expectedWelcome]);
            done(err);
          });
      });
    });
  });

  describe('POST /fhome', () => {
    context('when posting a Welcome users', () => {

      it('should return a new users with status code 201', done => {
        const customId = '56cb91bdc3464f14678934ba';
        const newWelcome = Object.assign({}, { _id: customId, __v: 0 }, defaultWelcome);
        const expectedSavedWelcome = {
          __v: 0,
          _id: customId,
          name: 'Default user-name'
        };

        request
          .post('/fhome')
          .send(newWelcome)
          .end((err, res) => {
            expect(res.statusCode).to.eql(201);
            expect(res.body).to.eql(expectedSavedWelcome);
            done(err);
          });
      });
    });
  });

  describe('PUT /fhome/:id', () => {
    context('when editing a Welcome usuers', () => {
      it('should update the users and return 200 as status code', done => {
        const customWelcome = {
          name: 'Custom name'
        };
        const updatedWelcome = Object.assign({}, customWelcome, defaultWelcome)

        request
          .put(`/fhome/${defaultId}`)
          .send(updatedWelcome)
          .end((err, res) => {
            expect(res.status).to.eql(200);
            done(err);
          });
      });
    });
  });

  describe('DELETE /fhome/:id', () => {
    context('when deleting a Welcome users', () => {
      it('should delete a Welcome users and return 204 as status code', done => {

        request
          .delete(`/fhome/${defaultId}`)
          .end((err, res) => {
            expect(res.status).to.eql(204);
            done(err);
          });
      });
    });
  });
});
