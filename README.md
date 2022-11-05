# Environment

| Item                  | Description           |
|-----------------------|-----------------------|
| Node.js Version       | 14.17.0               |
| Browser               | Chrome 106.0.5249.119 |
| Operating System      | macOS 12.3.1          |


| Computer Architecture | Description                  |
|-----------------------|------------------------------|
| Model Identifier      | MacBook Pro 14.1             |
| Processor Name        | Intel Core i5                |
| GPU                   | Intel Iris Plus Graphics 640 |

# Testing
In the root directory, run command `npm start`. In the browser, access `localhost:80`. 
Try different browsers and adjust the size of the browser window to see whether the content is displayed in a proper way.
As the width of the table column is styled based on viewpoint width `vw` and apply `word-wrap`, it will work for most of the users.


# React Features
1. I defined a class of React Component called aPost, which is a table row including two table cells, one for the time of the post, another for the text of the post.
2. When hitting next and previous buttons, the client-side codes fetch data from the server and render the aPost components by React.