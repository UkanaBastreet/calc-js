import { Calc } from "./Calc"

const cur = document.querySelector("#cur")
const sec = document.querySelector("#sec")
const btns = document.querySelector("#btns")

btns.onclick = (event) => {
  //   console.log(event.target.id)
}
// window.onkeydown = console.log
new Calc(btns, cur, sec).init()
