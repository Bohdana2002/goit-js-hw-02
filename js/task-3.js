function checkForSpam(message) {
    const forbiddenWordOne = 'spam';
    const forbiddenWordTwo = 'sale';
    message = message.toLowerCase();
    return message.includes(forbiddenWordOne) || message.includes(forbiddenWordTwo);
}

console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?"));