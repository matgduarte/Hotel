class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();











/*Parte que modificará o texto do pacote*/
const pbarato = document.querySelectorAll(".pbarato");
const pmedio = document.querySelectorAll(".pmedio");
const pcaro = document.querySelectorAll(".pcaro");
const disponiveis = document.querySelectorAll(".disponivel");
const avaliacoes = document.querySelectorAll(".avaliar");

const opcoespbarato = [
"R$ 145,91",
"R$ 231,90",
"R$ 347,77",
"R$ 450,99"
];

const opcoespmedio = [
"R$ 560,00",
"R$ 678,70",
"R$ 899,10",
"R$ 1000,00",
"R$ 910,10"
];

const opcoespcaro = [
"R$ 1560,00",
"R$ 3600,00",
"R$ 7700,00",
"R$ 9800,00"
];

const opcoesDisponivel = [
"Disponível: Sim",
"Disponível: Não"
];

const opcoesAvaliar = [
"5/10",
"7/10",
"8.5/10",
"9/10",
"4/10"
];


setInterval(() => {

pbarato.forEach((pbarato) => {
  const aleatoriopbarato = Math.floor(Math.random() * opcoespbarato.length);
  pbarato.textContent = opcoespbarato[aleatoriopbarato];
});


pmedio.forEach((pmedio) => {
  const aleatoriopmedio = Math.floor(Math.random() * opcoespmedio.length);
  pmedio.textContent = opcoespmedio[aleatoriopmedio];
});


pcaro.forEach((pcaro) => {
  const aleatoriopcaro = Math.floor(Math.random() * opcoespcaro.length);
  pcaro.textContent = opcoespcaro[aleatoriopcaro];
});


disponiveis.forEach((disponivel) => {
  const aleatorioDisponivel = Math.floor(Math.random() * opcoesDisponivel.length);
  disponivel.textContent = opcoesDisponivel[aleatorioDisponivel];
});


avaliacoes.forEach((avaliar) => {
  const aleatorioAvaliar = Math.floor(Math.random() * opcoesAvaliar.length);
  avaliar.textContent = opcoesAvaliar[aleatorioAvaliar];
});
}, 30000);


