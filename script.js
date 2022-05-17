let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function replay() {
    location.reload();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let myItems = [`Вы загадали число ${answerNumber}?\n\u{1F913}`, `Я уверен что это ${answerNumber}!\n\u{1F608}`, `Это число ${answerNumber}?\n\u{1F643}`];
            let item = myItems[Math.floor(Math.random() * myItems.length)];
            answerField.innerText = item;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        }else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let myItems = [`Вы загадали число ${answerNumber}?\n\u{1F913}`, `Я уверен что это ${answerNumber}!\n\u{1F608}`, `Это число ${answerNumber}?\n\u{1F643}`];
            let item = myItems[Math.floor(Math.random() * myItems.length)];
            answerField.innerText = item;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let myItems = [`Good Job!\n\u{1F984}`, `Кто молодец? Я молодец!\n\u{1F61C}`, `High ten!\n\u{1F64C}`];
        let item = myItems[Math.floor(Math.random() * myItems.length)];
        answerField.innerText = item;
        gameRun = false;
    }
})

