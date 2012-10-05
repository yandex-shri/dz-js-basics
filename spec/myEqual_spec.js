describe('"The Abstract Equality Comparison Algorithm" simulation', function() {
  var TYPES = {
        'UNDEFINED': undefined,
        'NULL': null,

        'OBJECT' : {'key': 'value'},
        'OBJECT (EMPTY)' : {},

        'ARRAY': [1, 2, 3],
        'ARRAY (EMPTY)': [],

        'STRING (test)': 'test',
        'STRING (0)': '0',
        'STRING (EMPTY)': '',

        'NUMERIC (5)': 5,
        'NUMERIC (0)': 0,
        'NUMERIC (NAN)': parseInt('NAN'),
        'NUMERIC (INFINITY)': 1/0,

        'BOOLEAN (TRUE)': true,
        'BOOLEAN (FALSE)': false
      };

  for(var x in TYPES) {
    for (var y in TYPES) {
      var a = TYPES[x],
          b = TYPES[y],
          TEST = x + ' == ' + y + ' SHOULD BE ' + ((a == b) ? 'TRUE' : 'FALSE');

      it( TEST, function() {

        expect(myEqual(a, b)).toEqual(a == b);
      });
    }
  }


});
