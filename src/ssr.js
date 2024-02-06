import { Page } from './app/page.js';

export const generateHTML = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Todo List</title>
    </head>
    <body>
      <div id="root">
        ${Page()}
      </div>
      <script src="./src/script.js"></script>
    </body>
  </html>
`