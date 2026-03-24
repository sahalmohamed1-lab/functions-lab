function calculateTax(amount) {
    const taxRate = 0.1;
    let taxValue = amount * taxRate;
    return taxValue;
}
function convertToUpperCase(text) {
    return text.toUpperCase();
}
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}
function isPalindrome(word) {
    if (word === word.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = (originalPrice * discountPercentage) / 100;
    let discountedPrice = originalPrice - discountAmount;
    return discountedPrice;

} 

calculateTax(100);
console.log(calculateTax(100));
convertToUpperCase("hello");
console.log(convertToUpperCase("hello"));
findMaximum(5, 10);
console.log(findMaximum(5, 10));
isPalindrome("orero");
console.log(isPalindrome("orero"));
isPalindrome("hello");
console.log(isPalindrome("hello"));
calculateDiscountedPrice(100, 20);
console.log(calculateDiscountedPrice(100, 20));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };