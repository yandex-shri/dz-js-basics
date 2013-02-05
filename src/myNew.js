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
      throw new TypeError('Constructor function is not found');
    }
    obj = {
      '__proto__': fun.prototype
    }
    fun.apply(obj, args);
  } else {
    throw new TypeError('Must be at least one argument');
  }

  return obj;
}