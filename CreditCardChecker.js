//////////////////////////////////////////////////////////////////////////////
// validateCred()
//////////////////////////////////////////////////////////////////////////////

function validateCred(arr) {

    let arrSum = 0;

    for(let i = arr.length-1; i >= 0; i--) {
       if([i]%2 == 0){

           if(arr[i] * 2 > 9) {
                arrSum += ((arr[i] * 2 ) - 9);
            } else {
                arrSum += arr[i] * 2;
                }
                } else {
                arrSum += arr[i]
        } 
    }
        if(arrSum % 10 === 0) {
            return 'valid'
        } else {
            return 'invalid'
        }

};

//////////////////////////////////////////////////////////////////////////////
// findInvalidCards()
//////////////////////////////////////////////////////////////////////////////

function findInvalidCards(arr) {

    let invArr = [];
    for(let i = 0; i < arr.length; i++) {
            if(validateCred(arr) === 'invalid'){
            invArr.push(arr);
        }
    }

    return invArr;
    
}

console.log(findInvalidCards(batch))

//////////////////////////////////////////////////////////////////////////////
// idInvalidCardCompanies()
//////////////////////////////////////////////////////////////////////////////

function idInvalidCardCompanies(arr) {

    let creditCardComp = [];

    for(let i = 0; i < arr.length; i++) {
        
            if(arr[i][0] === 3) {            
                creditCardComp.push('Amex')
            } else if(arr[i][0] === 4) {
                creditCardComp.push('Visa')
            } else if(arr[i][0] === 5) {
                creditCardComp.push('Mastercard')
            }else if(arr[i][0] === 6) {
                creditCardComp.push('Discover')
            } else {
                creditCardComp.push('Company not found')
            }

        }

    let uniqArr = [...new Set(creditCardComp)]
    return uniqArr;

}
