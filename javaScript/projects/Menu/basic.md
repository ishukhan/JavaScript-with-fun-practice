## basic

```javaScript
const sectionCenter = document.querySelector(".section_center");
const filterBtn = document.querySelectorAll(".filter_btn");
// load content
window.addEventListener("DOMContentLoaded", () => {
displayMenuItem(menu);
});

// filter

filterBtn.forEach((btn) => {
btn.addEventListener("click", (e) => {
const category = e.currentTarget.dataset.id;
const menuCategory = menu.filter((menuItem) => {
if (menuItem.category === category) {
return menuItem;
}
});
if (category == "all") {
displayMenuItem(menu);
} else {
displayMenuItem(menuCategory);
}
});
});

const displayMenuItem = (MenuItem) => {
let displayMenu = MenuItem.map((item) => {
return `<article class="menu_item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item_info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item_text">
              ${item.desc}
            </p>
          </div>
        </article>`;
});
displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;
};

```

```

```
