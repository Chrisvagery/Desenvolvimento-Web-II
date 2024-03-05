class ContactView {
  constructor() {
    this.contactList = document.getElementById("contactList");
    this.addButton = document.getElementById("addButton");
    this.nameInput = document.getElementById("nameInput");
    this.phoneInput = document.getElementById("phoneInput");
    this.emailInput = document.getElementById("emailInput");
  }


  bindRemoveContact(handler) {
    this.contactList.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const index = parseInt(event.target.dataset.index);
        handler(index);
      }
    });
  }

  renderContacts(contacts) {
    this.contactList.innerHTML = "";
    contacts.forEach((contact, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${contact.name} - ${contact.phone} - ${contact.email}`;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";

      removeButton.dataset.index = index;
      listItem.appendChild(removeButton);
      this.contactList.appendChild(listItem);
    });
  }
  bindAddContact(handler) {
    this.addButton.addEventListener("click", () => {
      const name = this.nameInput.value.trim();
      const phone = this.phoneInput.value.trim();
      const email = this.emailInput.value.trim();

      
      if (name && this.validaEmail(email) && this.validaTelefone(phone)) {
        handler(name, phone, email);
        this.clearInputs();
      } else {
        alert("Prenche os campos corretamente!");
      }
    });
  }
  validaEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validaTelefone(phone) {
    const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return phoneRegex.test(phone);
  }

  clearInputs() {
    this.nameInput.value = "";
    this.phoneInput.value = "";
    this.emailInput.value = "";
  }
}
