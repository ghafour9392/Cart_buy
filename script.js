const mobile = [
  {
    id: 1,
    title: "Redmi Note 8 2021",
    description:
      "گوشی موبایل شیائومی  Redmi Note 8 2021 ظرفیت 64 گیگابایت  - رم 4 گیگابایت",
    camera: 48,
    hard: 64,
    inch: 6.3,
    battery: 4000,
    price: 5199000,
    rank: "4.3",
    imageAddress: "pic/mobileImages/4.png",
    color: ["#006cf0"],
  },
  {
    id: 2,
    title: "Redmi 9A",
    description:
      "گوشی موبایل شیائومی مدل Redmi 9A ظرفیت 32 گیگابایت رم 2 گیگابایت",
    camera: 13,
    hard: 32,
    inch: 6.53,
    battery: 5000,
    price: 2589000,
    rank: "4.1",
    imageAddress: "pic/mobileImages/3.png",
    color: ["#8f8f8f", "#1a1a1a"],
  },
  {
    id: 3,
    title: "Poco F3 5G",
    description:
      "گوشی موبایل شیائومی مدل Poco F3 5G - ظرفیت 256 گیگابایت - رم 8 گیگابایت",
    camera: 48,
    hard: 256,
    inch: 6.67,
    battery: 4520,
    price: 8799000,
    rank: "4.7",
    imageAddress: "pic/mobileImages/2.png",
    color: ["#22a148", "#3479bf", "#ffffff"],
  },
  {
    id: 4,
    title: "Redmi Note 9S",
    description: "گوشی موبایل شیائومی Redmi Note 9S ظرفیت 64 گیگابایت",
    camera: 48,
    hard: 64,
    inch: 6.67,
    battery: 5020,
    price: 5259000,
    rank: "4.0",
    imageAddress: "pic/mobileImages/1.png",
    color: ["#8f8f8f", "#ffffff", "#1a1a1a"],
  },
  {
    id: 5,
    title: "Redmi Note 10 Pro Max",
    description:
      "گوشی موبایل شیائومی Redmi Note 10 Pro Max ظرفیت 128 گیگابایت - رم 6 گیگابایت",
    camera: 108,
    hard: 128,
    inch: 6.67,
    battery: 5020,
    price: 7099000,
    rank: "3.8",
    imageAddress: "pic/mobileImages/5.png",
    color: ["#3479bf", "#a7dae8"],
  },
  {
    id: 6,
    title: "Redmi Note 10S",
    description:
      " گوشی موبایل شیائومی مدل Redmi Note 10S ظرفیت 128 گیگابایت - رم 8 گیگابایت",
    camera: 64,
    hard: 128,
    inch: 6.43,
    battery: 5000,
    price: 5969000,
    rank: "4.2",
    imageAddress: "pic/mobileImages/6.png",
    color: ["#3479bf", "#a7dae8"],
  },
  {
    id: 7,
    title: "Xiaomi 11 Lite 5G NE",
    description:
      "گوشی موبایل شیائومی Xiaomi 11 Lite 5G NE - ظرفیت 256 گیگابایت - رم 8 گیگابایت",
    camera: 64,
    hard: 256,
    inch: 6.55,
    battery: 4250,
    price: 8879000,
    rank: "4.6",
    imageAddress: "pic/mobileImages/7.png",
    color: ["#000"],
  },
  {
    id: 8,
    title: "Xiaomi 11T Pro 5G",
    description:
      "گوشی موبایل شیائومی مدل 11T Pro 5G ظرفیت 256 گیگابایت - رم 12 گیگابایت",
    camera: 108,
    hard: 256,
    inch: 6.67,
    battery: 5000,
    price: 14939000,
    rank: "4.6",
    imageAddress: "pic/mobileImages/5.png",
    color: ["#8f8f8f","#ffee59","#3479bf"],
  },
];
let inCard = [];
const section = document.querySelector(".section");
const basket = document.querySelector(".basket");
const backdrop = document.querySelector(".backdrop");
const modalBuys = document.querySelector(".modalbuy");

section.innerHTML = "";
mobile.forEach((el) => {
  let colors = "";
  switch (el.color.length) {
    case 1:
      colors = `<ul class="colors">
      <li style="background:${el.color[0]}"></li>
    </ul>`;
      break;
    case 2:
      colors = `<ul class="colors">
      <li style="background:${el.color[0]}"></li>
      <li style="background:${el.color[1]}"></li>
    </ul>`;
      break;
    case 3:
      colors = `<ul class="colors">
      <li style="background:${el.color[0]}"></li>
      <li style="background:${el.color[1]}"></li>
      <li style="background:${el.color[2]}"></li>
    </ul>`;
      break;
    default:
      colors = "";
      break;
  }
  section.innerHTML += `
  <div class="product" data-id="${el.id}">
  <div class="product-image">
    <img src="${el.imageAddress}" alt="">
  </div>
  <p class="product-title">${el.description}</p>
  <ul class="product-feature">
    <li class="battery">
      <i class="fa-solid fa-battery-three-quarters"></i>
      <span>${el.battery}</span>
    </li>
    <li class="sizeScreen">
      <i class="fa-solid fa-mobile-screen"></i>
      <span>${el.inch}</span>
    </li>
    <li class="sizeHard">
      <i class="fa-solid fa-sd-card"></i>
      <span>${el.hard}</span>
    </li>
    <li class="camera">
      <i class="fa-solid fa-camera"></i>
      <span>${el.camera}</span>
    </li>
  </ul>
  <div class="product-price">
    <span class="price">${el.price.toLocaleString("fa-IR")}</span>
    <span>تومان</span>
  </div>
  <div class="product-card">
    <button class="buy">افزودن به سبد خرید</button>
    <i class="fa-solid fa-signal"></i>
    <div>
      <i class="fa-solid fa-star"></i> <span>${el.rank}</span>
    </div>
  </div>
  ${colors}
</div>
  `;
});

section.addEventListener("click", addInCard);
basket.addEventListener("click", modalBuy);
backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  modalBuys.style = "z-index: -1; transform: translateY(-100vh);";
});
modalBuys.addEventListener("click", events);

function addInCard(e) {
  const className = [...e.target.classList];
  // console.log(className);
  if (className[0] === "buy" && e.target.textContent === "افزودن به سبد خرید") {
    // console.log(e.target.parentElement.parentElement.dataset.id);
    let arrTemp = [];
    const id_product = e.target.parentElement.parentElement.dataset.id;
    const pruduct = mobile.filter((e) => {
      return e.id === parseInt(id_product);
    });
    arrTemp = [
      {
        id: pruduct[0].id,
        title: pruduct[0].title,
        price: pruduct[0].price,
        imageAddress: pruduct[0].imageAddress,
        count: 1,
      },
    ];
    // console.log(pruduct);
    inCard.push(...arrTemp);
    document.querySelector(".basket .fa-cart-shopping span").style =
      "display:block;";
    document.querySelector(".basket .fa-cart-shopping span").innerHTML =
      parseInt(document.querySelector(".basket .fa-cart-shopping span").innerHTML)+1;
    e.target.style = "background-color: #48d848;";
    e.target.textContent = "به سبد اضافه شد";
    // console.log(inCard);
    showInCard();
  }
}
function showInCard() {
  modalBuys.innerHTML = `<p class="title">مشاهده سبد خرید</p>`;
  inCard.forEach((el) => {
    const price = el.price * el.count;
    modalBuys.innerHTML += `
    <div class="productBuy" data-id="${el.id}">
      <div class="productBuy-image">
        <img src="${el.imageAddress}" alt="">
      </div>
      <div class="title-price">
        <p class="productBuy-title">${el.title}</p>
        <p class="productBuy-price">${price.toLocaleString("fa-IR")}</p>
      </div>
      <div class="count">
        <i class="fa-solid fa-angle-up"></i>
        <span>${el.count}</span>
        <i class="fa-solid fa-angle-down"></i>
      </div>
      <i class="fa-solid fa-trash-can"></i>
    </div>
    `;
  });
  const allPrice = inCard.reduce(
    (total, num) => total + num.price * num.count,
    0
  );
  modalBuys.innerHTML += `
    <div class="all">
      <span>:قیمت کل</span>
      <span class="all-price">${allPrice.toLocaleString("fa-IR")}</span>
    </div>
  `;
}
function modalBuy(e) {
  // console.log(e.target.classList[0]);
  if (
    e.target.classList[0] === "fa-solid" ||
    e.target.parentElement.classList[0] === "fa-solid"
  ) {
    if(inCard.length>0){
      backdrop.style.display = "block";
      modalBuys.style = "z-index: 11; transform: translateY(0vh);";
    }else alert("The cart is empty");
  }
}
function events(e) {
  // console.log(e.target.classList);
  if (e.target.classList[1] === "fa-angle-up") {
    e.target.nextElementSibling.innerHTML =
      parseInt(e.target.nextElementSibling.innerHTML) + 1;
    // console.log(e.target.parentElement.parentElement.dataset.id);
    inCard.map((el) => {
      if (el.id === parseInt(e.target.parentElement.parentElement.dataset.id)) {
        el.count += 1;
      }
    });
    // console.log(inCard);
    showInCard();
    basketCount();
  }
  if (e.target.classList[1] === "fa-angle-down") {
    e.target.previousElementSibling.innerHTML =
      parseInt(e.target.previousElementSibling.innerHTML) - 1;
    if (e.target.previousElementSibling.innerHTML === "0") {
      deleteproduct(e.target.parentElement.parentElement.dataset.id);
    } else {
      // console.log(e.target.parentElement.parentElement.dataset.id);
      inCard.map((el) => {
        if (
          el.id === parseInt(e.target.parentElement.parentElement.dataset.id)
        ) {
          el.count -= 1;
        }
      });
      // console.log(inCard);
      showInCard();
      basketCount();
    }
  }
  if (e.target.classList[1] === "fa-trash-can") {
    deleteproduct(e.target.parentElement.dataset.id);
  }
}

function deleteproduct(id) {
  const deleteIndex = inCard.findIndex((el) => {
    return el.id === parseInt(id);
  });
  // console.log(deleteIndex);
  inCard.splice(deleteIndex, 1);
  showInCard();
  const btnBuy = document.querySelectorAll(".buy");
  // console.log(btnBuy);
  btnBuy.forEach((el) => {
    if (el.parentElement.parentElement.dataset.id === id) {
      el.innerText = "افزودن به سبد خرید";
      console.log("yes");
      el.removeAttribute("style");
    }
  });
  if (inCard.length === 0) {
    document
      .querySelector(".basket .fa-cart-shopping span")
      .removeAttribute("style");
  }
  basketCount();
}
function basketCount(){
  const count = inCard.reduce((total, num) => total + num.count,0);
  document.querySelector(".basket .fa-cart-shopping span").innerHTML =count;
}