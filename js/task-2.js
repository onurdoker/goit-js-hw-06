class Storage {
  #items = [];

  constructor(params) {
    this.#items = this.#items.concat(params);
  };

  getItems() {
    return this.#items;
  };

  addItem(newItem) {
    this.#items.push(newItem);
  };

  removeItem(removeItem) {
    this.#items = this.#items.filter((item) => item !== removeItem);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems());
storage.addItem('Droid');
console.log(storage.getItems());
storage.removeItem('Prolonger');
console.log(storage.getItems());