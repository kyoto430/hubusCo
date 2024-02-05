// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}

burger();

function calculator() {
  let cards = document.querySelectorAll('.calc__card');
  let progressBarText = document.querySelector('.calc__progress span');
  let progressBarValue = document.querySelector('.progress');
  let calcBtn = document.querySelector('.calc__btn');

  let numberQuestion = 0;

  function switchText(number) {
    if (number === 3) {
      calcBtn.style.transform = 'scale(1)';
    } else {
      calcBtn.style.transform = 'scale(0)';
    }

    switch (number) {
      case 0:
        progressBarText.innerText = 'Сделайте выбор!';
        progressBarValue.style.width = 0 + 'px';
        break;
      case 1:
        progressBarText.innerText = 'Шаг 1 из 3';
        progressBarValue.style.width = 124 + 'px';
        break;
      case 2:
        progressBarText.innerText = 'Шаг 2 из 3';
        progressBarValue.style.width = '50%';
        break;
      case 3:
        progressBarText.innerText = 'Шаг 3 из 3';
        progressBarValue.style.width = '100%';
        break;
      default:
        break;
    }
  }

  cards.forEach((card) => {
    let iconCheck = card.querySelector('.calc__icon');
    let imgCard = card.querySelector('.calc__img');
    if (iconCheck.classList.contains('checked')) {
      iconCheck.src = './assets/images/calculator/check-01.svg';
    }
    card.addEventListener('click', function () {
      if (imgCard.classList.contains('selected')) {
        imgCard.classList.remove('selected');
      } else {
        imgCard.classList.add('selected');
      }
      if (!iconCheck.classList.contains('checked')) {
        iconCheck.classList.add('checked');
        iconCheck.src = './assets/images/calculator/check-01.svg';
        numberQuestion += 1;
        switchText(numberQuestion);
      } else {
        iconCheck.classList.remove('checked');
        iconCheck.src = './assets/images/calculator/check-02.svg';
        numberQuestion -= 1;
        switchText(numberQuestion);
      }
    });
  });
}

calculator();

function helpItemsSelect() {
  let helpItems = document.querySelectorAll('.help__item');

  helpItems.forEach(function (item) {
    let helpImg = item.querySelector('.help__item-img');
    let helpText = item.querySelector('.help__item-text');
    item.addEventListener('click', function () {
      helpImg.classList.toggle('active');
      helpText.classList.toggle('active');
    });
  });
}

helpItemsSelect();
