var chai = require('chai');
var expect = chai.expect; // para los xpec
var LogicaCalculadora = require('../calculadora');

describe('Calculadora', function() {
  it('sumar(2,2) debe regresar 4', function() {
    var cal = new LogicaCalculadora([]);
    expect(cal.sumar(2,2)).to.equal(4);
  });

});
