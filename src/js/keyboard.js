export class Keyboard {
  #switchEl; // Private class fields = class의 속성(property)들은 기본적으로 public하며 class 외부에서 읽히고 수정될 수 있다. 하지만 ES2019 에서는 해쉬 # prefix를 추가해 private class 필드를 선언할 수 있게 되었다.   ;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown", (event) => {
      console.log(event.code);
      if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
        this.#keyboardEl
          .querySelector(`[data-code=${event.code}]`)
          ?.classList.add("active");
      }
    });
    document.addEventListener("keyup", (event) => {
      // console.log("keyup");
      if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
        this.#keyboardEl
          .querySelector(`[data-code=${event.code}]`)
          ?.classList.remove("active");
      }
    });
  }

  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
    // console.log(event.target.checked);
  }

  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
    // console.log(event.target.value);
  }
}
