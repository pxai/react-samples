const template = ({body}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Server side Rendering</title>
    </head>
    <body>
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default template;
