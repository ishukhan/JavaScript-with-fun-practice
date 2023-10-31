## dynamicaly itrate the button and menuitems

```javaScript
// display buttons function
const displayButtons = () => {
  const catergories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categorysBtn = catergories
    .map((category) => {
      return `
    <button class="filter_btn" type="button" data-id="${category}">
          ${category}
        </button>
    `;
    })
    .join("");
  btnContainer.innerHTML = categorysBtn;
  const filterBtn = document.querySelectorAll(".filter_btn");
  filterBtnItem(filterBtn);
};

// filter btn function functionality
const filterBtnItem = (btnItem) => {
  btnItem.forEach((btn) => {
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
};
```
