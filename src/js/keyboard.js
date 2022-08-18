export class Keyboard {
  #switchEl; // Private class fields = class의 속성(property)들은 기본적으로 public하며 class 외부에서 읽히고 수정될 수 있다. 하지만 ES2019 에서는 해쉬 # prefix를 추가해 private class 필드를 선언할 수 있게 되었다.   ;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
      console.log(event.target.checked);
    });
  }
}
