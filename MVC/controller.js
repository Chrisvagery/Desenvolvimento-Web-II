
class ContactController {

  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();

    this.view.bindAddContact(this.handleAddContact.bind(this));
    this.view.bindRemoveContact(this.handleRemoveContact.bind(this));
  }

  init() {
    this.model.loadContacts();
    this.view.renderContacts(this.model.contacts);
  }

  handleAddContact(name, phone, email) {
    this.model.adicionarContato(name, phone, email);
    this.view.renderContacts(this.model.contacts);
  }

  handleRemoveContact(index) {
    this.model.removeContato(index);
    this.view.renderContacts(this.model.contacts);
  }
}

const model = new ContactModel();
const view = new ContactView();
const controller = new ContactController(model, view);
