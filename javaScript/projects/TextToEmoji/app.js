// ########## SELECT ALL ITEM GLOBAL ##################

const input = document.getElementById("textMsg");
const pass = document.querySelector("#password");
const result = document.querySelector("#result");

const emojiMsg = document.querySelector("#emojiMsg");
const finalPass = document.querySelector("#finalPassword");

const encryptBtn = document.querySelector("#encrypt_btn");
const decryptBtn = document.querySelector("#decrypt_btn");

let dataArr = [];
let dataNum = 1;

function btnClick() {
  const dec = document.querySelector("#dec_btn");
  const enc = document.querySelector("#enc_btn");
  const decryption = document.querySelector("#decryption");
  const encryption = document.querySelector("#encryption");
  const arrow = document.querySelector("#main > h1 > span > img");
  dec.addEventListener("click", () => {
    decryption.style.display = "block";
    encryption.style.display = "none";
    dec.classList.add("activeBtn");
    enc.classList.remove("activeBtn");
    dec.classList.add("activeBtn");
    enc.classList.remove("activeBtn");
    arrow.style.rotate = "180deg";
    // decryptBtn.style.display = "block";
  });
  enc.addEventListener("click", () => {
    encryption.style.display = "block";
    decryption.style.display = "none";
    enc.classList.add("activeBtn");
    dec.classList.remove("activeBtn");
    arrow.style.rotate = "none";
    // encryptBtn.style.display = "block";
  });
}

btnClick();

function encryption() {
  let clutter = "";

  encryptBtn.addEventListener("click", () => {
    const userInput = input.value;
    const userPassword = pass.value;
    if (userInput && userPassword) {
      // split the input
      let str = userInput.split("");
      //   converting it in an emojis
      str.forEach((element) => {
        clutter += `&#128${element.charCodeAt()} `;
      });
      result.style.display = "block";
      result.innerHTML = clutter;
      displayMessage("successfull Encryption", "success");
      getDefaultBehaviour();

      //   add to localStorage
      addToLocalStorage(userInput, userPassword, clutter);
    } else {
      displayMessage("Please Enter text and password", "danger");
    }
  });
}
encryption();

function decryption() {
  clutter2 = "";
  decryptBtn.addEventListener("click", () => {
    const emojiInput = emojiMsg.value;
    const finalPassword = finalPass.value;
    if (emojiInput && finalPassword) {
      const user = JSON.parse(localStorage.getItem(`data1`));
      //   console.log(user);

      let str2 = emojiInput.split(" ");
      str2.forEach((key) => {
        clutter2 += `&#${key.codePointAt(0)} `;
      });
      console.log(clutter2);
      let found;
      for (const i of user) {
        if (i.clutter === clutter2) {
          found = i;
        }
        // console.log("found " + i);
      }
      if (found.clutter === clutter2) {
        result.style.display = "block";
        result.innerHTML = found.input;
        displayMessage("Succesfull Decryption", "success");
        getDefaultBehaviour();
      }
    } else {
      displayMessage("Please Enter text and password", "danger");
    }
  });
}
decryption();

function displayMessage(text, context) {
  const alert = document.querySelector(".alert");
  alert.innerHTML = text;
  alert.classList.add(`alert-${context}`);
  setTimeout(() => {
    alert.innerHTML = "";
    alert.classList.remove(`alert-${context}`);
  }, 1000);
}

function getDefaultBehaviour() {
  input.value = "";
  pass.value = "";
}

// add to local Storage
function addToLocalStorage(userInput, userPassword, clutter) {
  if (JSON.parse(localStorage.getItem("data1"))) {
    dataArr = JSON.parse(localStorage.getItem("data1"));
    // dataNum += 1;
    dataArr.push({ input: userInput, pass: userPassword, clutter: clutter });
  } else {
    dataArr = [{ input: userInput, pass: userPassword, clutter: clutter }];
  }
  localStorage.setItem("data1", JSON.stringify(dataArr));
}
