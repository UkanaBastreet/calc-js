import { Calc } from "./Calc"

const cur = document.querySelector("#cur")
const sec = document.querySelector("#sec")
const btns = document.querySelector("#btns")
const sign = document.querySelector("#sign")

new Calc(btns, cur, sec, sign).init()
