


newFormData()

function newFormData () {
  const formData = new FormData()
  // console.log(formData)

  // append(keyName, value) 新增欄位、值
  formData.append('name', 'mizu')
  formData.append('name', 'jack')
  formData.append('age', 18)

  // formData.get(keyName) 只取出第一個
  // console.log(formData.get('name')) // mizu
  
  // formData.getAll(keyName) 取出全部
  // console.log(formData.getAll('name')) // ['mizu', 'jack']
  
  // formData.delete(keyName) 刪除指定 key
  formData.delete('name')
  // console.log(formData.getAll('name')) // []
  
  // formData.set(keyName, value) 已有的欄位就修改值, 沒有就新增
  // console.log(formData.get('age')) // 18
  formData.set('age', 30)
  // console.log(formData.get('age')) // 30
}
