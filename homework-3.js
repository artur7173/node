// 3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի
// երկու մասի և միաժամանակ կգրի առաջին մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։
// Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:
const fs = require('fs/promises')

async function myFunction () {

    try {
        const data = await fs.readFile('input.txt')
        await Promise.all([
            fs.writeFile('output1.txt', data.toString().slice(0,(data.toString().length-1)/2)),
            fs.writeFile('output2.txt', data.toString().slice((data.toString().length-1)/2,data.toString().length-1))
        ])
    } catch (e) {
        console.log(e.message);
    }
}
myFunction ()
