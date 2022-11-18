const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const { mockUsers } = require('../mocks/mockUser');
const userService = require('../../services/user.service');
const userController = require('../../controllers/user.controller');

chai.use(chaiHttp);

describe('Teste user', () => {
  const request = {};
  const response = {};
  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(userService, 'getAllUsers').resolves(mockUsers);
  });

  afterEach(() => {
    userService.getAllUsers.restore();
  });
  describe('Verifica a chamada da função "getAllUsers"', () => {
    it('Verifica se o status retornado é o 200 - OK', async () => {
      await userController.getAllUsers(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('Verifica se o retorno é do tipo array', async () => {
      await userController.getAllUsers(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.true;
    });
  });
});
