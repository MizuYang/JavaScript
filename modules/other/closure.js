


// closure 閉包

const mizu = bankHandler('Mizu')
// console.log(mizu) // {getMoney: ƒ, addMoney: ƒ, takeMoney: ƒ} <- 讀取不到money
mizu.addMoney(1000)
mizu.takeMoney(200)
// console.log(mizu.getMoney()) // Mizu 有 800 元

const tina = bankHandler('Tina')
tina.addMoney(5000)
tina.takeMoney(2000)
// console.log(tina.getMoney()) // Tina 有 3000 元

// 兩人的 money 變數是存在自己的函式作用域, 不會互相影響

function bankHandler (name) {
  let money = 0

  return {
    getMoney () {
      console.log(`${name} 有 ${money} 元`)
      return money
    },
    addMoney (value) {
      money += value
    },
    takeMoney (value) {
      money -= value
    }
  }
}




















