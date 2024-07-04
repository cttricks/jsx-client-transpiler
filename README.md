# JSX Client Transpiler

![Static Badge](https://img.shields.io/badge/JSX-Transpiler-client)
![Static Badge](https://img.shields.io/badge/HTML-CSS-user?color=%2340E0D0)
![Static Badge](https://img.shields.io/badge/Javascript-SPA-user?color=%230096FF)

A simple tool to run JSX directly in the browser! This means we can now use it on any static sites, SPAs, or server-side languages like PHP and Node.js. 

> This project started as a fun learning journey, and I’m excited to open it up to the community. Your feedback and comments are highly appreciated. If you’re interested in collaborating, feel free to fork the repo, make changes, test, and create a pull request. Let’s innovate and learn together! 💡🔧

## Quick Setup
Getting started with this JSX transpiler is simple! Follow these steps to see it in action.

### Clone the Repository
Open your terminal and run the following command to clone the repo to your local machine:

```bash
git clone https://github.com/cttricks/jsx-client-transpiler
```

### Open the Project
Navigate to the cloned directory and open the project in Visual Studio Code (VS Code):

```bash
cd jsx-client-transpiler
code .
```

### Start a Live Server
- Ensure you have the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) installed in VS Code.
- Open any HTML file in the project.
- Right-click on the file and select "Open with Live Server" from the context menu.


Your default browser should automatically open a new tab showing the project running. You can now see the JSX transpiler in action! Feel free to explore the code, make changes, and see the results instantly. Your feedback and contributions are highly appreciated!

## How it works?
The process behind this transpiler is straightforward and easy to understand. Here’s a simple breakdown:
- **Extracting Code**: The transpiler extracts all the JavaScript and HTML code from the JSX file.
- **Injecting JavaScript**: It then places the JavaScript code into the header of the DOM.
- **Rendering HTML**: Finally, it loads the HTML content into the specified element on the page.

I highly encourage you to give it a try to see how it works in action.

## Dependencies and Styling
This project leverages [Bootstrap CSS](https://getbootstrap.com/docs/4.4/getting-started/introduction/) for styling and [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to demonstrate JSX elements in action within the browser. Here's a brief overview of these dependencies:

- **Bootstrap CSS**: I’ve used Bootstrap for its powerful and responsive CSS framework, which simplifies styling and ensures a clean, modern look for the application.
- **JSONPlaceholder**: To showcase the functionality of JSX elements, I’ve integrated JSONPlaceholder, a free online REST API, to fetch and display dynamic content in the browser.
By combining Bootstrap CSS and JSONPlaceholder, the project not only demonstrates how to run JSX directly in the browser but also provides a visually appealing and interactive experience.

## Disclaimer
This project is for fun and learning purposes only. It is not intended for use in any production-level applications. Please use it as a learning tool and for experimentation. Your feedback and contributions are welcome to help improve and explore the project further.

## License
This project is licensed under the MIT License. See the LICENSE file for details.