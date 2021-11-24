let a = +prompt('Количество рабочих часов в день');
let b = +prompt('Количество рабочих дней в недели');
let c = +prompt('Рейт за час');


function calcSalary (a, b, c) {
    let x = c * a;
    let y = x * b;
    alert('$' + y);
}

calcSalary (a, b, c);

