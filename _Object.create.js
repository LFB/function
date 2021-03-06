/**
 * 模拟实现 Object.create() 方法
 *
 * Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
 *
 * @param proto 原型对象，必须是个对象
 * @return 返回一个实例对象
 * @private
 */
function _ObjectCreate(proto) {
  if (typeof proto !== 'object') {
    throw new TypeError('需要传入对象');
  }

  function F() {
  }

  F.prototype = proto

  return new F()
}

/**
 * 测试：完成一个继承例子
 */
function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

// 使用_ObjectCreate 方法
Child.prototype = _ObjectCreate(Parent.prototype)

var o = new Child('lynn', 16)

console.log(o.name)
console.log(o.age)
console.log(o) // { name: 'lynn', age: 16 }
o.getName() // lynn
console.log(o instanceof Child) // true
console.log(o instanceof Parent) // true
console.log(o instanceof Object) // true
console.log(o instanceof Function) // false
console.log(Child instanceof Function) // true



