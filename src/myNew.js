/**
 *
 * @return {}
 */
function myNew() {
  var args = Array.prototype.slice.call(arguments),
    fun = null,
    obj = null;
  if (args.length) {
    fun = args.shift();
    if (typeof fun !== 'function') {
      throw {
        'name': 'TypeError',
        'message': 'Constructor function is not found'
      }
    }
    obj = {
      '__proto__': fun.prototype
    }
    fun.apply(obj, args);
  } else {
    throw {
      'name': 'TypeError',
      'message': 'Must be at least one argument'
    }
  }

  return obj;
}