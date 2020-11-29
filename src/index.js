class TodoList {
  constructor() {
    this.input = null;
    this.addBtn = null;
    this.wrapper = null;

    this.init();
  }

  init = () => {
    this.input = document.getElementById("input");
    this.addBtn = document.getElementById("btn");
    this.wrapper = document.getElementById("wrapper_tasks");
    this.addBtn.addEventListener("click", this.showWrapper);
  };

  showWrapper = () => {
    if (input.value !== "") {
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const btnDone = document.createElement("button");
      const btn = document.createElement("button");
      const fasDone = document.createElement("i");
      const farDel = document.createElement("i");

      li.setAttribute("class", "todoli");
      h3.setAttribute("class", "castoro");
      btnDone.setAttribute("class", "done-btn");
      fasDone.setAttribute("class", "fas fa-check-double");
      btn.setAttribute("class", "delete-btn");
      farDel.setAttribute("class", "far fa-trash-alt");

      li.append(h3);
      btnDone.append(fasDone);
      li.append(btnDone);
      btn.append(farDel);
      li.append(btn);

      h3.innerText = input.value;

      input.value = "";

      this.wrapper.append(li);

      this.doneBtn(btnDone, li);
      this.deleteBtn(btn, li);
    }
  };

  deleteBtn = (btn, task) => {
    btn.addEventListener("click", () => {
      task.remove();
    });
  };

  doneBtn = (btnDone, task) => {
    btnDone.addEventListener("click", () => {
      task.classList.toggle("complited");
    });
  };
}

new TodoList();
