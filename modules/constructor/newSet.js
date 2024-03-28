



newSet()

function newSet () {
  // 移除陣列中重複的值
  const arr1 = [1, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 8]
  const newArr = [...new Set(arr1)]
  // console.log(newArr) // [1, 2, 3, 4, 5, 6, 7, 8]

  const arr2 = new Set()
  arr2.add(1)
  arr2.add(2)
  arr2.add(3)
  // console.log(arr2) // Set(3) {1, 2, 3}
  // console.log(arr2.has(3)) // true
  // console.log(arr2.has(5)) // false
}