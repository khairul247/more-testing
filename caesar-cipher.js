const caesarCipher = (sentence, shift = 0) => {

    const alphabetMapping = 'abcdefghijklmnopqrstuvwxyz'
        .split("")
        .reduce((acc,letter, index)=>{
            acc[letter] = index;
            return acc;
        },{});
    
    const reverseMap = Object.fromEntries(Object.entries(alphabetMapping).map(([char, num]) => [num, char]));
    
    let capitalIndexes = [];
    const mappedToNumber = sentence.split("").map((char,index) => {
        if (!/^[a-zA-Z]$/.test(char)) {
            return char;
        } else if (/^[A-Z]$/.test(char)) {
            capitalIndexes.push(index);
            return (alphabetMapping[char.toLowerCase()]+shift)%26;
        } else {
            return (alphabetMapping[char]+shift)%26;
        }});
    
    console.log(mappedToNumber);
    
    const encrypted = mappedToNumber.map((num,i)=>{
        if (typeof num !== 'number'){
            return num;
        } else if (capitalIndexes.includes(i)){
            return reverseMap[num].toUpperCase();
        } else {
            return reverseMap[num];
        }
    }).join("");

    return encrypted;
  
}

module.exports = caesarCipher;

