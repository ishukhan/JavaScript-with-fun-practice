* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #eaeaea;
}

.section_center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  gap: 20px;
  margin: auto;
  margin-top: 100px;
  border-radius: 10px;
  background: #cbcaca;
  box-shadow: 0px 0px 2px 0px;
}

.grocery_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 50%;
  margin-top: 50px;
}

.alert {
  /* display: none; */
  /* background: #ff000091; */
  letter-spacing: 3px;
  padding: 2px 50px;
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
  text-transform: capitalize;
  font-weight: 500;
  border-radius: 5px;
}
.alert_danger {
  transition: all 0.2s ease-in-out;
  color: #721c24;
  background: #f8d7da;
}
.alert_success {
  transition: all 0.2s ease-in-out;
  color: #155724;
  background: #d4edda;
}
h3 {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: system-ui;
}

.form_control {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.form_control input {
  border-radius: 5px;
  height: 25px;
  border: none;
  width: 85%;
  padding: 0 4px;
  outline: none;
}
.form_control button {
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 6px 12px;
  border: none;
  background: #00b9ff;
}

.grocery_container {
  width: 50%;
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  visibility: hidden;
}
.show_container {
  visibility: visible;
}
.grocery_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 85%;
}
.grocery_item {
  /* background: #fff; */
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.grocery_item:hover {
  transition: all 0.2s ease-in-out;
  color: #155724;
  background: #d4edda;
}
.title {
  text-transform: capitalize;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
}
.btn_container {
  display: flex;
  gap: 10px;
}

.edit_btn {
  background: none;
  font-size: 13px;
  border: none;
  /* font-size: 15px; */
  color: blue;
  cursor: pointer;
}
.delete_btn {
  background: none;
  font-size: 13px;
  border: none;
  /* font-size: 15px; */
  color: red;
  cursor: pointer;
}

.clear_btn {
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 3px;
  font-family: fantasy;
  text-decoration: underline;
  color: #a26b05;
  text-transform: capitalize;
}
