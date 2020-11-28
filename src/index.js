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
      const btn = document.createElement("button");
      const farDel = document.createElement("i");

      li.setAttribute("class", "todoli");
      h3.setAttribute("class", "castoro");
      btn.setAttribute("class", "delete-btn");
      farDel.setAttribute("class", "far fa-trash-alt");

      li.append(h3);
      btn.append(farDel);
      li.append(btn);

      h3.innerText = input.value;

      input.value = "";

      this.wrapper.append(li);

      this.deleteBtn(btn, li);
      this.complitedTask(h3);
    }
  };

  deleteBtn = (btn, task) => {
    btn.addEventListener("click", () => {
      task.remove();
    });
  };

  complitedTask = (task) => {
    task.addEventListener("click", () => {
      task.classList.toggle("complited");
    });
  };
}

new TodoList();
