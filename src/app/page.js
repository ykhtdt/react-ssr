import { Button } from './components/button.js'

export const Page = () => `
  <div>
    <h1 id="title">React SSR</h1>
    <p id="paragraph"></p>
    ${Button({ id: 'change', text: '색상 변경'})}
    ${Button({ id: 'write', text: '글쓰기'})}
  </div>
`
