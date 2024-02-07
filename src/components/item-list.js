export const ItemList = (items) => `
  <ul>
    ${items.map(item => `<li>${item}</li>`).join("")}
  </ul>
`;