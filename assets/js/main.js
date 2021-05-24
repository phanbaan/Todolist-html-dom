function popupToggle() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
let items = [
  {
    name: "Create adWords campaign",
    category: "marketing",
    description:
      "lLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit voluptate id adipisci similique quam perferendis saepe soluta pariatur modi?",
    time: "22 Feb,2021",
    completed: false,
    url: "./assets/img/team4.jpg",
  },
  {
    name: "Create adWords campaign",
    category: "design",
    description:
      "lLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit voluptate id adipisci similique quam perferendis saepe soluta pariatur modi?",
    time: "22 Feb,2021",
    completed: false,
    url: "./assets/img/team-3.jpg",
  },
  {
    name: "Create adWords campaign",
    category: "development",
    description:
      "lLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit voluptate id adipisci similique quam perferendis saepe soluta pariatur modi?",
    time: "22 Feb,2021",
    completed: true,
    url: "./assets/img/team-2.jpg",
  },
  {
    name: "Create adWords campaign",
    category: "management",
    description:
      "lLorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit voluptate id adipisci similique quam perferendis saepe soluta pariatur modi?",
    time: "22 Feb,2021",
    completed: false,
    url: "./assets/img/team-1.jpg",
  },
];

function showCategory() {
  let form = document.getElementById("form");
  let categorys = [];
  for (let i = 0; i < items.length; i++) {
    if (categorys.indexOf(items[i].category) === -1) {
      categorys.push(items[i].category);
    }
  }
  let category = categorys.map((item) => {
    return (
      '<label class="form-check__label"><input type="radio" name="radio" class="form-check__input">' +
      item +
      "</label>"
    );
  });

  return (form.innerHTML = category.join(""));
}
showCategory();

function showDoing(items) {
  let doing__list = document.getElementById("doing__list");
  let doing = items.filter((item) => item.completed === false);
  let doing__item = doing.map((item) => {
    return (
      '<li class="doing__item">' +
      '<div class="doing__icon">' +
      '<i class="fas fa-check"></i>' +
      "</div>" +
      '<div class="doing__text">' +
      '<h3 class="doing__title">' +
      item.name +
      "</h3>" +
      '<p class="doing__time">' +
      item.time +
      "</p>" +
      "</div>" +
      '<div class="doing__img-box">' +
      '<img src="' +
      item.url +
      '" alt="" class="doing__img">' +
      "</div>" +
      "</li>"
    );
  });
  return (doing__list.innerHTML = doing__item.join(""));
}
showDoing(items);

function showCompleted() {
  let complete__card = document.getElementById("complete__card");
  let countComplete = 0;
  let completed = items
    .filter((item) => item.completed === true)
    .map((i) => {
      countComplete++;
      return (
        '<div class="complete__card-item">' +
        '<div class="complete__card-icon">' +
        '<i class="fas fa-check"></i>' +
        "</div>" +
        '<div class="complete__card-text">' +
        '<h4 class="complete__card-title">' +
        i.name +
        "</h4>" +
        '<span class="complete__card-time">' +
        '<i class="far fa-clock"></i>' +
        i.time +
        "</span>" +
        '<p class="complete__card-content">' +
        i.description +
        "</p>" +
        "</div>" +
        "</div>"
      );
    });
  return [(complete__card.innerHTML = completed.join("")), countComplete];
}
showCompleted();

function filterCategory() {}
function addTask() {
  let name = document.getElementById("input__name").value;
  let time = document.getElementById("input__time").value;
  let description = document.getElementById("input__description").value;
  let select = document.getElementById("select").value;
  console.log(select);

  items.push({
    name,
    time,
    category: select,
    description,
    completed: false,
    url: "",
  });
  showDoing(items);
  popupToggle();
}
function filterCategory() {
  let selectItem = document.getElementById("doing__select").value;
  let itemFilter = items.filter((item) => {
    return item.category === selectItem;
  });
  showDoing(itemFilter);
}

function coutItem() {}
