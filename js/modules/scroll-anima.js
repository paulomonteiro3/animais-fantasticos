import debounce from './debounce.js'

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections); // '[data-anime="scroll"]'
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  // Verifica a distancia em cada objeto em relacao ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  // Pega a distancia de cada item em relacao ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.windowMetade,
      };
    });
  }
  // Metodo antigo
  // animaScroll() {
  //   this.sections.forEach((section) => {
  //     const sectionTop = section.getBoundingClientRect().top
  //     const isSectionVisible = sectionTop - this.windowMetade < 0;
  //     if (isSectionVisible) section.classList.add("ativo");
  //     else if (section.classList.contains("ativo")) {
  //       section.classList.remove("ativo");
  //     }
  //   });
  // }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this
  }
  // Remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
