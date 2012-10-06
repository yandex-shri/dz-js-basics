/**
 * @param {Mixed} x
 *
 * @return {String}
 */
function Type(x) {
  return Object.prototype.toString.call(x).replace(/^\[object\s|\]$/g, '');
}

/**
 * @param {Number} x
 *
 * @return {Boolean}
 */
function isNegativeZero (x) {
  return x === 0 && (1 / x) === -Infinity;
}

function toPrimitive(x) {
  return Object.prototype.valueOf.call(x);
}

/**
 * @param {Mixed} x
 * @param {Mixed} y
 *
 * @return {Boolean}
 */
function myEqual(x, y) {
  var type_x = Type(x),
      type_y = Type(y);

  //1
  if (type_x === type_y) {
    //1.a
    if (type_x === 'Undefined') {
      return true;
    }

    //1.b
    if (type_x === 'Null') {
      return true;
    }

    //1.c
    if (type_x === 'Number') {

      //1.c.i
      if (isNaN(x)) {
        return false;
      }

      //1.c.ii
      if (isNaN(y)) {
        return false;
      }

      //1.c.iii
      if (x === y) {
        return true;
      }

      //1.c.iv
      if (x === 0 && isNegativeZero(y)) {
        return true;
      }

      //1.c.v
      if (isNegativeZero(x) && y === 0) {
        return true;
      }

      //1.c.vi
      return false;
    }

    //1.d
    if (type_x === 'String') {
      return (x === y);
    }

    //1.e
    if (type_x === 'Boolean') {
      return (x === y);
    }

    //1.f
    return (x === y);
  }

  //2
  if (type_x === 'Null' && type_y === 'Undefined') {
    return true;
  }

  //3
  if (type_x === 'Undefined' && type_y === 'Null') {
    return true;
  }

  //4
  if (type_x === 'Number' && type_y === 'String') {
    return myEqual(x, Number(y).valueOf());
  }

  //5
  if (type_x === 'String' && type_y === 'Number') {
    return myEqual(Number(x).valueOf(), y);
  }

  //Strange, specification does not cover array comparison? huh =(

  if (type_x === 'Array') {
    return myEqual(x.toString(), y);
  }

  if (type_y === 'Array') {
    return myEqual(x, y.toString());
  }


  //6
  if (type_x === 'Boolean') {
    return myEqual(Number(x).valueOf(), y);
  }

  //7
  if (type_y === 'Boolean') {
    return myEqual(x, Number(y).valueOf());
  }

  //8
  if ((type_x === 'String' || type_x === 'Number') && type_y === 'Object') {
    return myEqual(x, y.toString());
  }

  //9
  if (type_x === 'Object' && (type_y === 'String' || type_y === 'Number')) {
    return myEqual(x.toString(), y);
  }


  //10
  return false;
}
