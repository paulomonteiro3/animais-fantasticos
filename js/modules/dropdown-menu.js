import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define touchstart e click, argumentos padrao de events,
    // CASO O USUARIO NAO DEFINA
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // adiciona os eventos ao dropdownMenu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  // Ativa o dropdownmenu e adiciona a funcao
  // que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.remove("active");
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
