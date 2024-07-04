import JSXClient from './jsx-client/transpiler.js';

document.addEventListener('DOMContentLoaded', () => {

    JSXClient.load({
        filePath: "./pages/index.jsx",
        targetElement: "#root"
    });

    document.addEventListener('click', (event) => {
        
        //Handel anchor tag click to check if the link contains .jsx
        if(event.target.tagName === 'A' && event.target.getAttribute('href').substr(-4) === '.jsx'){
            event.preventDefault();
            const click = event.target;

            JSXClient.load({
                filePath: click.getAttribute('href'),
                targetElement: click.getAttribute('target')
            });
        }

    });


});

