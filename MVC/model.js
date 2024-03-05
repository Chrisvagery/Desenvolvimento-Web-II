
class ContactModel {

  constructor() {
    this.contacts = [];
  }

  adicionarContato(name, phone, email) {
    this.contacts.push({ name, phone, email });
    this.saveContato();
  }

  removeContato(index) {
    this.contacts.splice(index, 1);
    this.saveContato();
  }

  saveContato() {
    localStorage.setItem("contacts", JSON.stringify(this.contacts));
  }

  loadContacts() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    this.contacts = contacts;
  }
}
