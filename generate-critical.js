const critical = require('critical');
const fs = require('fs');


const inputHtml = fs.readFileSync('./input.html', 'utf8');

return critical.generate({
    inline: false,
    extract: false,
    html: inputHtml,
    css: ['./input1.css', './input2.css'],
    // Viewport width
    width: 1300,
    // Viewport height
    height: 1200,
}).then((criticalCss) => {
    fs.writeFile('./output.html', inputHtml.replace('<!-- placeholder for critical css -->', `<style>${criticalCss}</style>`));
});