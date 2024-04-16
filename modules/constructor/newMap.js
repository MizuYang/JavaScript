


newMap()

function newMap () {
  const map = new Map();
  // console.log(map) // Map(0) {size: 0}

  // set(keyName, value)
  map.set('foo', 'bar');
  // console.log(map) // 0: {"foo" => "bar"}

  // has(keyName) 回傳布林值
  // console.log(map.has('foo')) // true
  // console.log(map.has('bar')) // false

  // delete
  map.delete('foo')
  // console.log(map) // Map(0) {size: 0}
}