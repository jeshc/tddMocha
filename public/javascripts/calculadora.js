
function LogicaCalculadora() {}

LogicaCalculadora.prototype.sumar = function(a,b) {
  console.log(a+b);
  return a+b;
};

module.exports = LogicaCalculadora;
