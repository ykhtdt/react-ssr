import { Button } from './components/button.js';
import { ItemList } from './components/item-list.js';

export const Page = (items) => `
  <div>
    <h1 id="title">React SSR</h1>
    ${Button({ id: 'change', text: '색상 변경'})}
    ${Button({ id: 'add', text: '추가하기'})}
    ${ItemList(items)}
  </div>
`;
