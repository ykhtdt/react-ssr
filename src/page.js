import { Button } from './components/button.js';
import { ItemList } from './components/item-list.js';

export const Page = (items) => `
  <h1 id="title">React SSR</h1>
  ${Button({ id: 'add', text: '추가하기'})}
  ${ItemList(items)}
`;
