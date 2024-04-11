





newPromise()

async function newPromise () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('結束')
    }, 1000)
  })
  try {
    const res = await promise
    // console.log(res) // 結束
  } catch (err) {
    console.error(err)
  }

  const res3 = await fn3()
  // console.log(res3)
  const res2 = await fn2()
  // console.log(res2)
  const res1 = await fn1()
  // console.log(res1)

  function fn1 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 500)
    })
  }
  function fn2 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 800)
    })
  }
  function fn3 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3)
      }, 1000)
    })
  }
}