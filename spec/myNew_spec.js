describe('The "new" Operator simulation', function() {
  var simulated;

  function Car(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year || (new Date()).getFullYear();

    this.getInfo = function () {
      return this.manufacturer + ' ' + this.model + ' ' + this.year;
    };
  }

  Car.prototype.getDetailedInfo = function () {
    return 'Производитель: ' + this.manufacturer + '. Модель: ' + this.model + '. Год: ' + this.year;
  };

  beforeEach(function() {
    simulated = myNew(Car, 'BMW', 'X5', 2010);
  });

  it('should be instance of a Car', function() {
    expect(simulated instanceof Car).toEqual(true);
  });

  it('should run Car prototype method', function() {
    expect(simulated.getDetailedInfo()).toEqual('Производитель: BMW. Модель: X5. Год: 2010');
  });

  it('should run Car method', function() {
    expect(simulated.getInfo()).toEqual('BMW X5 2010');
  });

  it('should return error when called with no arguments', function() {
    expect(function() {
      myNew();
    }).toThrow('Must be at least one argument');
  });

  it('should return error when called without function name', function() {
    expect(function() {
      myNew('Car', 'BMW', 'X5', 2010);
    }).toThrow('Constructor function is not found');
  });


});



