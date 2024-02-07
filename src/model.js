export const model = {
  items: ["기본 아이템"],

  init(initialModel) {
    this.items = initialModel.items;
  },

  addItem(item) {
    this.items.push(item);
  },
}