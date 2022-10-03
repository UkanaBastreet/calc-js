export class Calc {
  constructor(btns, cur, sec, sign) {
    this.root = btns
    this.cur = cur
    this.sec = sec
    this.sign = sign
  }
  setCur(number) {
    if (number === undefined) {
      this.cur.innerText = 0
    } else {
      this.cur.innerText = number
    }
  }
  setSec(number) {
    if (number) {
      this.sec.innerText = number
    } else {
      this.sec.innerText = ""
    }
  }
  setSign(sign) {
    if (!sign) this.sign.innerText = ""

    this.sign.innerText = sign
  }
  init() {
    this.root.onclick = ({ target }) => {
      const id = target.dataset.id
      const type = target.dataset.type
      const cur = this.cur.innerText

      if (!id) return

      switch (type) {
        case "number":
          if (+cur === 0) {
            this.setCur(id)
          } else {
            this.setCur(cur + id)
          }
          break
        case "sign":
          if (!signs[id]) {
            this[id]()
          } else {
            this.setSign(signs[id])
            this.setSec(this.cur.innerText)
            this.setCur()
          }
      }
    }
  }
  allСlear() {
    this.setCur()
    this.setSec()
  }
  equal() {
    const sign = this.sign.innerText
    const cur = +this.cur.innerText
    const sec = +this.sec.innerText
    if (!sign) return

    switch (sign) {
      case signs["plusMinus"]:
        this.setCur(cur)
        this.setSec(-cur)
        return
      case signs["procent"]:
        this.setCur(cur)
        this.setSec((sec / cur) * 100 + "%")
        return
      case signs["split"]:
        this.setCur(cur)
        this.setSec(sec / cur)
        return
      case signs["multyply"]:
        this.setCur(cur)
        this.setSec(sec * cur)
        return
      case signs["minus"]:
        this.setCur(cur)
        this.setSec(sec - cur)
        return
      case signs["plus"]:
        this.setCur(cur)
        this.setSec(sec + cur)
        return
      default:
        this.setSec("")
        this.setSign("")
    }
  }
  allСlear() {
    this.setCur()
    this.setSec("")
    this.setSign("")
  }
}

const signs = {
  plusMinus: "+-",
  procent: "%",
  split: "/",
  multyply: "*",
  minus: "-",
  plus: "+",
}
