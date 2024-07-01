let container;
let clearContentOnLoad = true;

let regex = {
    content: /export default function[\s\S]*?\{([\s\S]*)/,
    html: /return\s*\(\s*<div>([\s\S]*?)<\/div> \);/g,
    css: /style=\{\{([^}]*)\}\}/g,
    click: /onClick={(\([\s\S]*?)\}/g
}

async function PushJSCodeInHead(code) {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = code;
    document.head.appendChild(script);
}

async function JSXContentExtractor(data) {

    //Extracted & validate content from JSX file
    const contantMatch = data.match(regex.content);
    if (!contantMatch) return console.error("Unable to find content on requested file");

    //Trim content & remove extra lines & spaces
    let content = contantMatch[1].trim();
    content = content.replace(/[\r\n]+/g, '');
    content = content.replace(/\s{2,}/g, ' ');
    content = content.slice(0, -1);

    //Extract  & validate HTML Code from content
    const htmlMatch = [...content.matchAll(regex.html)];
    if (htmlMatch.length < 1) return console.error(`Invalid HTML content provided`);

    //Extract & rename className to work on client
    let htmlContent = htmlMatch[0][1];
    htmlContent = htmlContent.replaceAll('className', 'class');

    //Removing HTML code from main content
    content = content.replace(htmlMatch[0][0], '');

    //Format style codes if available in HTML content
    const styleMatch = [...htmlContent.match(regex.css)];
    if (styleMatch.length > 0) {

        const halper = document.createElement('div');

        styleMatch.forEach((item) => {

            let styleCodes = item.substr(7).slice(0, -1);
            halper.style = '';

            if (styleCodes.length > 0) {
                
                styleCodes = eval(`(${styleCodes})`);

                Object.keys(styleCodes).forEach(prop => {
                    halper.style[prop] = styleCodes[prop];
                });

            }

            htmlContent = htmlContent.replace(item, `style="${halper.getAttribute('style')}"`);
        });
    }

    //Format onClick attribute
    const onClickMatch = [...htmlContent.match(regex.click)];
    if (onClickMatch) {

        onClickMatch.forEach((item) => {

            let replacement = '';
            if (item.substr(10, 1) === 'e') {
                //We have to simply add a onclick listener and add (event) at the end;
                replacement = item.substr(16).slice(0, -1);
                replacement += '(event)';
            } else {
                //simple on click event
                replacement = item.substr(15).slice(0, -1);
            }

            htmlContent = htmlContent.replace(item, `onclick="${replacement}"`);

        });
    }

    //Compose a template elm & push html codes
    let template = document.createElement('template');
    template.innerHTML = htmlContent;

    //Here the content is now pure JS code as we have removed all HTML from it
    PushJSCodeInHead(content);

    //Finally push HTML on given container
    if(clearContentOnLoad) container.innerHTML='';
    container.appendChild(template.content.cloneNode(true));

}

function FeatchFileContent(path) {
    fetch(`${path}`, {
        method: 'GET'
    }).then(response => {
        if (!response.ok) return console.error(`Failed to load content from ${path}`);
        return response.text();
    }).then(data => {
        JSXContentExtractor(data);
    }).catch(error => {
        console.error(`Fatal Error: ${error}`);
    })
}

class JSX_Client {

    load({
        filePath = "",
        targetElement = "",
        clearAllContentBeforePush = true
    }) {

        if (typeof filePath !== 'string' || filePath.trim().length === 0 || !filePath.endsWith('.jsx')) {
            console.error(`JSX filePath is not defined, or is not a string, or does not end with '.jsx'\nfilePath: ${filePath}`);
            return;
        }

        if (typeof targetElement !== 'string' || targetElement.trim().length === 0) {
            console.error("Target element to load JSX content is not defined or is not a string");
            return;
        }

        if (typeof clearAllContentBeforePush !== 'boolean') {
            console.error("clearAllContentBeforePush should be a boolean value");
            return;
        }

        container = document.querySelector(targetElement);
        if (!container) {
            console.error(`targetElement/container ${targetElement} is not present in the DOM`);
            return;
        }

        clearContentOnLoad = clearAllContentBeforePush;
        FeatchFileContent(filePath);
    }

}

export default new JSX_Client();