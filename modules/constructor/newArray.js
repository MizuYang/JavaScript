

newArray()

function newArray () {
  const array = new Array(5); // 快速取得5個空的值
  console.log(array) // [empty × 5]

  array.fill('mizu') // 將所有值填入 mizu
  console.log(array) // ['mizu', 'mizu', 'mizu', 'mizu', 'mizu']

  array.forEach(item => console.log(item))
}