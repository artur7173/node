// 1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում ,
// եթե թիվը փոքր է 5-ից reject է անում , հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։
const randm =require('randm')
function myFunction () {
    return new Promise(function (resolve, reject) {
        let data = randm.int.between(0, 10);
        if (data <= 5) {
            reject(data);
        } else {
            resolve(data);
        }
    });
}
myFunction ().then(function (data){
    console.log(' resolve data ' + data);
}).catch(function (data){
    console.log(' reject data ' + data);
})