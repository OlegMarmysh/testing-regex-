var startValueText = document.getElementById('start-value');
var btnDecrypt = document.getElementById('btn-decrypt');
var answerValueText = document.getElementById('answer');


btnDecrypt.addEventListener('click', edwardDecrypt);


function edwardDecrypt(message) {
    var valueFormat = /[а-яА-ЯA-Z]{1,}/g;
    message = startValueText.value;
    if(valueFormat.test(message)){
        alert('a message can only consist of lowercase English letters');
    }else{
        answerValueText.innerHTML = (message.replace(/([a-z])\1/g, ''));
    }
    
}