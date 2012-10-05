## Домашнее задание: [Js. Основы](https://github.com/yandex-shri/lectures/blob/master/16-js-basics.md)

### new

Согласно спецификации http://es5.github.com/#x11.2.2 напишите функцию, которая реализует оператор `new` под Firefox или Хром.

**Скелет функции должен быть следующим**

```javascript
/**
 * @param {Function} Constructor
 * @param {Array}    [args]
 *
 * @return {Object}
 */
function myNew(Constructor, args) {}
```

В качестве проверки на `[[Construct]]` используйте следующую функцию. Она не совсем точена, но из клиента `[[Construct]]`
больше никак не проверить.
```javascript
function isConstructor(func) {
    return typeof func === "function" && func.hasOwnProperty('prototype');
}

// isConstructor(String.prototype.match) === false
// isConstructor(String) === true
```

Напишите тест, который порывает все особенности этого алгоритма. Будет здорово если вы приложите ссылку на jsfiddle.net

### ==

Согласно спецификации http://es5.github.com/#x11.9.3 реализуйте The Abstract Equality Comparison Algorithm

**Скелет функции должен быть следующим**

```javascript
/**
 * @param {Mixed} x
 * @param {Mixed} y
 *
 * @return {Boolean}
 */
function myEqual(x, y) {}
```

В качестве функции `Type` используйте слудующую


```javascript
/**
 * @param {Mixed} x
 *
 * @return {String}
 */
function Type(x) {
    return Object.prototype.toString.call(x).replace(/^\[object\s|\]$/g, '');
}
```

В качестве функции проверки на отрицательный ноль используйте следующую


```javascript
/**
 * @param {Number} x
 *
 * @return {Boolean}
 */
function isNegativeZero (x) {
    return x === 0 && (1 / x) === -Infinity;
}
```

Напишите тест, который порывает все особенности этого алгоритма. Будет здорово если вы приложите ссылку на jsfiddle.net


См. также: [пост про домашние задания](http://clubs.ya.ru/4611686018427468886/replies.xml?item_no=450).