export class Calc {
  constructor(btns, cur, sec) {
    this.root = btns
    this.cur = cur
    this.sec = sec
    this.sign = null
  }
  set(obj, text) {
    if (!text) {
      obj.innerText = ""
    } else {
      if (+obj.innerText === 0) {
        obj.innerText = text
      } else {
        obj.innerText += text
      }
    }
  }
  setSec(text = "") {
    this.set(this.sec, text)
  }
  setCur(text) {
    this.set(this.cur, text)
  }
  init() {
    // ========================
    window.calc = this //======
    // ========================

    this.root.onclick = ({ target }) => {
      if (!target.dataset.id) return
      if (target.dataset.type === "number") {
        this.setCur(target.dataset.id)
      } else {
        this[target.dataset.id]()
      }

      // if(){
      //   this.setCur(cur.innerText + target.dataset.id)
      // }
      // switch (target.dataset.id) {
      //   case "AC":
      //     this.setCur('')
      // }
    }
  }
  switcher(sign) {
    const cur = this.cur
    const sec = this.sec
    switch (sign) {
      case "plusMinus":
        return -cur
      case "procent":
        return 
      case "split":
      case "multyply":
      case "minus":
      case "plus":
      case "equal":
    }
  }
  allСlear() {
    this.setCur(0)
    this.setSec()
  }
  plusMinus() {
    // if (+this.cur.innerText > 0) {
    this.cur.innerText = -this.cur.innerText
    // }
  }
  procent() {}
  split() {
    this.sign = "split"
    this.sec.innerText = this.cur.innerText
    this.cur.innerText = 0
  }
  multyply() {}

  minus() {}
  plus() {}
  change() {}
  equal() {}
}
