// const  os = require('os');
// const randm = require('randm');
// const fs = require('fs');
// 1.  Գրել ծրագիր որը աշխատացնելիս console-ում կարտածի ամբողջ օպերատիվ հիշողությունը

// (total amount of system memory):
// console.log(os.totalmem());

// 2. Գրել ծրագիր որ աշխատացնելիս console-ում կարտածի IPv4 IP հասցեն(os.networkInterfaces()):

// console.log(os.networkInterfaces());

// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող txt ֆայլ և այդ
// ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):

// fs.writeFile(randm.int.between(10000000, 100000000)+'.txt', os.cpus()[0].model, function (err){
//
// });

// 4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր
// բացատները կփոխարին - ներով: Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:


// let data= fs.readFileSync('input.txt', 'utf8');
//
// for ( let i = 0; i<data.length; i++ ){
//     data=data.replace(" ", "-");
// };
//
// fs.writeFile('write.txt',  data, function (err){
//
// });

// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը
// (Օրինակ homework1.js, homework2.js, homework3.js, homework4.js):
// Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի օպերացոն համակարգի անունից և այդ
// պահին ժամ րոպե վարկյանից(win32_14_14_58.txt)
// և այդ ֆայլում գրել նախորդ ֆայլերի պարունակությունը:

// let homework1= fs.readFileSync('homework1.js', 'utf8');
// let homework2= fs.readFileSync('homework2.js', 'utf8');
// let homework3= fs.readFileSync('homework3.js', 'utf8');
// let homework4= fs.readFileSync('homework4.js', 'utf8');
// let date = new Date();
//  let faylName =`${os.platform()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
// fs.writeFile(faylName+'.txt',homework1+homework2+homework3+homework4  , function (err){

// });