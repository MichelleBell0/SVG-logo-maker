const inquirer = require('inquirer');
const fs = require('fs');
const createSVGLogo = require('./createSVGLogo');

function cli() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'logoText',
                message: 'Enter your logo text (3 character): ',
                validate: function(input) {
                    if (input.length <= 3) {
                        return true;
                    } else {
                        return 'Please enter up to 3 characters or less.';
                    }
                }
            },
            {
                type: 'text',
                name: 'logoTextColor',
                message: 'Enter a text color (keyword OR hexadecimal number): '
            },
            {
                type: 'list',
                name: 'logoShape',
                message: 'Choose a logo shape',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'text',
                name: 'logoShapeColor',
                message: 'Enter a logo color (keyword OR hexadecimal number): '
            }
        ])
        .then(({logoText, logoTextColor, logoShape, logoShapeColor}) => {
            const logoContent = createSVGLogo(logoText, logoTextColor, logoShape, logoShapeColor);
            fs.writeFile('logo.svg', logoContent, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to SVG file: ', err);
                    return;
                }
                console.log('Generated logo.svg!');
            });
        })
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong.');
        });
}

module.exports = cli;