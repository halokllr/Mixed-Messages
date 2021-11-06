
const messagesOne = ['If you believe it ', 'If only ', 'Really though, '];
const messagesTwo = ['sometimes it ', 'rarely it ', 'definitely it '];
const messagesThree = ['happens like that', 'goes that way', 'do be like that']


let finalString = [];

let messageButton = document.getElementById('messageButton');
let message = document.getElementById('message');

const getMessageOne = () => {
    msgLength = messagesOne.length;
    returnedMsg = Math.floor(Math.random() * 3);
    finalString.push(messagesOne[returnedMsg]);
};

const getMessageTwo = () => {
    msgLength = messagesTwo.length;
    returnedMsg = Math.floor(Math.random() * 3);
    finalString.push(messagesTwo[returnedMsg]);
};

const getMessageThree = () => {
    msgLength = messagesThree.length;
    returnedMsg = Math.floor(Math.random() * 3);
    finalString.push(messagesThree[returnedMsg]);
};

const setFinalString = () => {
    finalString = [];
    getMessageOne();
    getMessageTwo();
    getMessageThree();
    return (finalString.join(" ") + ".");
};

const returnMessage = () => {
    let string = setFinalString();
    console.log(string)
    message.innerHTML = ''
    message.innerHTML = string;
}


messageButton.addEventListener('click', returnMessage);
