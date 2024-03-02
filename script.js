class Contact {
  constructor(name, number, id) {
    this.id = id;
    this.name = name;
    this.number = number;
  }
}

class UI {
  static displayContact() {
    let list = Store.readContact();
    $("#contact-list").html("");

    list.forEach((contact) => {
      UI.addContactToTable(contact);
    });
  }

  static addContactToTable(contact) {
    let table_rows = $("#contact-list");
    table_rows.append(`
            <tr>
                <td>${contact.id}</td>
                <td>${contact.name}</td>
                <td>${contact.number}</td>
                <td><a  class="btn btn-danger delete">X</td>
            </tr>
        
        `);
  }

  static deleteRow(btn) {
    btn.parentElement.parentElement.remove();
  }
}
class Store {
  static addContact(name, number) {
    let id;
    if (localStorage.getItem("list")) {
      id = JSON.parse(localStorage.getItem("list")).length + 1;
    } else {
      id = 1;
    }
    let contact = new Contact(name, number, id);
    let arr = Store.readContact();
    arr.push(contact);

    localStorage.setItem("list", JSON.stringify(arr));
    UI.displayContact();
  }

  static readContact() {
    let list = [];
    let storage = localStorage.getItem("list");
    if (storage !== null) {
      list = JSON.parse(storage);
    }
    return list;
  }

  static removeContact(id) {
    let arr = Store.readContact();
    arr.forEach((contact, index) => {
      if (contact.id == id) {
        arr.splice(index, 1);
      }
    });
    localStorage.setItem("list", JSON.stringify(arr));
  }
}
$(".form-control").click(function (e) {
  e.preventDefault();
  let name = $("#contact-name").val();
  let number = $("#contact-number").val();
  Store.addContact(name, number);
});
$(document).ready(() => UI.displayContact());

$("#contact-list").click(function (e) {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    Store.removeContact(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    UI.deleteRow(e.target);
  }
});
