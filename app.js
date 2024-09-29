const basket = document.querySelector("#moment");
const totalSumElement = document.querySelector(".main-shopping-cart__sum");
const totalSumElement2 = document.querySelector(".main-basket-amount__sum");
const totalScore = document.querySelector(".main-shopping-cart__scores");

const snowBording = [
  {
    snowBord: "Сноуборд GNU Asym Carbon Credit Btx Multicolor",
    cost: 59395,
    image: "https://i.imghippo.com/files/NzmMx1727178872.svg",
    count: 5,  // Количество на складе
  },
  {
    snowBord: "Сноуборд Lib Tech Skate Banana Yellow",
    cost: 59395,
    image: "https://i.imghippo.com/files/NzmMx1727178872.svg",
    count: 15,  // Количество на складе
  },
];

const createItem = (snowBord, cost, image, availableCount) => {
  let count = 1;
  const initialCost = cost;

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("main-basket-img");

  itemContainer.innerHTML = `
        <img src="./img/x.svg" alt="x" class="main-basket-img__delete" style="cursor: pointer;" />
        <div class="main-basket-img-bg">
            <img src="${image}" alt="snowBord" />
        </div>
        <div class="main-basket-p">
            <p class="main-basket-p__name">${snowBord}</p>
            <p class="main-basket-p__article">Артикул производителя: 19SN003</p>
            <div class="main-basket-p-color-size">
                <p class="main-basket-p__color__size">Цвет: Цветной</p>
                <p class="main-basket-p__color__size">Размер: XL</p>
            </div>
        </div>
        <div class="main-basket-quantity">
            <img src="./img/minus.svg" alt="minus" class="main-basket-quantity__minus" style="cursor: pointer;" />
            <input class="main-basket-quantity__count" placeholder="0" value="${count}" readonly />
            <img src="./img/plus.svg" alt="plus" class="main-basket-quantity__plus" style="cursor: pointer;" />
        </div>
        <p class="main-basket__cost">${cost} ₽</p>
    `;

  const minusButton = itemContainer.querySelector(
    ".main-basket-quantity__minus"
  );
  const plusButton = itemContainer.querySelector(".main-basket-quantity__plus");
  const countInput = itemContainer.querySelector(
    ".main-basket-quantity__count"
  );
  const costDisplay = itemContainer.querySelector(".main-basket__cost");

  minusButton.addEventListener("click", () => {
    if (count > 1) {
      count--;
      countInput.value = count;
      const newCost = initialCost * count;
      costDisplay.textContent = `${newCost} ₽`;
      updateTotalSum();
    }
  });
  
  plusButton.addEventListener("click", () => {
    if (count < availableCount) {
      count++;
      countInput.value = count;
      const newCost = initialCost * count;
      costDisplay.textContent = `${newCost} ₽`;
      updateTotalSum();
    } else {
      alert(`Извините, на складе доступно только ${availableCount} товаров.`);
    }
  });

  return itemContainer;
};

const updateTotalSum = () => {
  const allCosts = document.querySelectorAll(".main-basket__cost");
  let totalSum = 0;

  allCosts.forEach((costElement) => {
    const costText = costElement.textContent
      .replace(" ₽", "")
      .replace(/\s+/g, "");
    totalSum += parseFloat(costText);
  });

  const discountSum = totalSum;

  // Добавил кэшбек 2%
  const percent = 2;
  const resultScore = discountSum / 100 * percent;

  totalSumElement.textContent = `${discountSum.toFixed(2)} ₽`;
  totalSumElement2.textContent = `${discountSum.toFixed(2)} ₽`;
  totalScore.textContent = `+ ${resultScore.toFixed(2)} баллов`;
};

snowBording.forEach((item) => {
  const newItem = createItem(item.snowBord, item.cost, item.image, item.count);
  basket.appendChild(newItem);
});

updateTotalSum();
