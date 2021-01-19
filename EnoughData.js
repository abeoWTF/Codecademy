/* encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.

But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side.
 For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
 */


class ShiftCipher {
    constructor(numberShift){
        this.numberShift = numberShift;
    }

    encrypt(string) {
        const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let strArray =  string.split("");        
        var letters = /^[A-Za-z]+$/;
        let newArray = [];
        strArray.forEach(element => {
            if(element !== " " && (alphabet.indexOf(element) + this.numberShift < alphabet.length) && element.match(letters)){
                let letterN = alphabet.indexOf(element);               
                newArray.push(alphabet[letterN+this.numberShift])
            } else if(element !== " " && alphabet.indexOf(element) + this.numberShift >= alphabet.length && element.match(letters)){
                let difference = alphabet.indexOf(element) + this.numberShift - alphabet.length;
                newArray.push(alphabet[difference])
            } else if(element === ' '){
                newArray.push(' ');              

            } else if(!element.match(letters)) {
                newArray.push(element)

            }

        });
        return newArray.join('').toUpperCase();
    
    }

    decrypt(string) {
        const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let strArray =  string.toLowerCase().split("");        
        var letters = /^[A-Za-z]+$/;
        let newArrayTwo = [];
        strArray.forEach(element => {
            if(element !== " " && (alphabet.indexOf(element) > this.numberShift) && element.match(letters)){
                let letterN = alphabet.indexOf(element);       
                newArrayTwo.push(alphabet[letterN-this.numberShift])
            } else if(element !== " " &&  (alphabet.indexOf(element) < this.numberShift) && element.match(letters)){
                 newArrayTwo.push(alphabet[alphabet.length - (this.numberShift - alphabet.indexOf(element))])                
            } else if(element === ' '){
                newArrayTwo.push(' ');              

            } else if(!element.match(letters)) {
                newArrayTwo.push(element)

            } else {
                newArrayTwo.push(alphabet[alphabet.indexOf(element) - this.numberShift])
            }

        });
        return newArrayTwo.join('').toLowerCase();
    
    }
}

let newItem = new ShiftCipher(3);

//console.log(newItem.encrypt('asdz'));
console.log(newItem.decrypt('ABCDEFG'));

