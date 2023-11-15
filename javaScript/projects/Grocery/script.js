// ************** SELECT ITEMS **************
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery_form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit_btn");
const container = document.querySelector(".grocery_container");
const list = document.querySelector(".grocery_list");
const clearBtn = document.querySelector(".clear_btn");

// EDIT OPTIONS
let editElement;
let editFlag = false;
let editID = "";

// ***************** EVENT LISTNER ****************
// submit form
form.addEventListener("submit", addItem);
// cleat itmes
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener("DOMContentLoaded", setUpItems);
// ************** FUNCTION ****************
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  // vvi :- in js every value is truthy or falsy value
  //   value !== "" && editFlag === false
  if (value && !editFlag) {
    createListItem(id, value);
    // display alert
    displayAlert("item add to the list", "success");
    // show container
    container.classList.add("show_container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value update", "success");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert_${action}`);

  //   remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert_${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery_item");
  // console.log(items);
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show_container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show_container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  // remove form local storage
  removeFromLocalStotage(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set eidt item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "Edit";
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Submit";
}

// *************** LOCAL STORAGE *******************
function addToLocalStorage(id, value) {
  const grocery = { id: id, value: value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  // console.log("add to local storage");
}

function removeFromLocalStotage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
//localStorage Api
// setItem
// getItem
// removeItem
// save as string
// localStorage.setItem("orange", JSON.stringify(["item", "item2"]));

//******************** SETUP ITEM *****************
function setUpItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show_container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery_item");
  // add id
  const attr = document.createAttribute("data_id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = ` <p class="title">${value}</p>
            <div class="btn_container">
              <button type="button" class="edit_btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete_btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  // access delete and edit btn heare beacuse we add dynamicaly
  // append child
  const deleteBtn = element.querySelector(".delete_btn");
  const editBtn = element.querySelector(".edit_btn");
  // addEventListener
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
}
