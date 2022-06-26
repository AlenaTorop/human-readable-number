module.exports = function toReadable (number) {
  let units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let result;

let newNum = number.toString();
let arr = newNum.split('');

let num = Number(newNum.slice(-2));

  if(number === 0) {
    return 'zero';
} else if(number < 10) {
      return units[number];
    }  

 /*for length =2*/
  else if(number >= 10 && number <= 19) {
    return teen[newNum[1]];

} 

else if (newNum.length === 2 && number > 19 && number % 10 === 0) {
            return tens[number/10];
}
 else if(newNum.length === 2 && number > 19 && number % 10 !== 0) {
      return `${tens[arr[0]]} ${units[arr[1]]}`;
    }
/*for length =3*/
    else if(newNum.length === 3 && number % 100 === 0) {
     result = `${units[arr[0]]} hundred`;
            return result;
 
    } else if (newNum.length === 3 && num >= 10 && num <= 19) {
     result = `${units[arr[0]]} hundred ${teen[newNum[2]]}`
            return result.replace(/\s+/g, ' ').trim();
     
    }  else if(newNum.length === 3 && num > 19 && num % 10 === 0) {
      result = `${units[arr[0]]} hundred ${tens[newNum[1]]}`;
          return result.replace(/\s+/g, ' ').trim();

      }
      else if(newNum.length === 3 && num > 19 && num % 10 !== 0) {
        result = `${units[arr[0]]} hundred ${tens[arr[1]]} ${units[arr[2]]}`;
        return result.replace(/\s+/g, ' ').trim();;
      }
      else if(newNum.length === 3 && num < 10) {
        result = `${units[arr[0]]} hundred ${units[newNum[2]]}`;
            return result.replace(/\s+/g, ' ').trim();
  
    }  
}
    
    
