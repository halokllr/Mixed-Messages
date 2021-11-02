const messagesOne = ['Beginning of string 1', 'Beginning of string 2', 'Beginning of string 3'];
const messagesTwo = ['End of string 1', 'End of string 2', 'End of string 3'];
const messagesThree = ['End of string 1', 'End of string 2', 'End of string 3']

const messageFunctions = [messagesOne, m]
let finalString = [];

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
    getMessageOne();
    getMessageTwo();
    getMessageThree();
    return (finalString.join(" ") + ".");
};

console.log(setFinalString());