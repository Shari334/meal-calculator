//define variables
const promptContainer = document.getElementById('prompt-container');
const form = document.getElementById('form');
const inputField = document.getElementById('input');
const inputFieldTip = document.getElementById('input-tip');
const inputFieldEat = document.getElementById('input-eat');
let calContainer = document.getElementById('calculation-container');
const submitBtn = document.getElementById('submit');
let text = 'Please fill out this field';
let errorMessage = document.getElementsByClassName('error-message');
const paragraphText = document.getElementById('text-paragraph');
const paragraphText1 = document.getElementById('text-paragraph1');
const paragraphText2 = document.getElementById('text-paragraph2');

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const dinner = {
        total: inputField.value,
        tip: inputFieldTip.value,
        eaters: inputFieldEat.value,
};
let tipTotal = parseFloat(inputField.value) * parseFloat(inputFieldTip.value);
let grandTotal = parseFloat(inputField.value)*parseFloat(inputFieldTip.value) + parseFloat(inputField.value);
let costPortion = parseFloat(inputField.value)* parseFloat(inputFieldTip.value) + parseFloat(inputField.value) / dinner.eaters;
let p = document.createElement('p');

tipTotal = tipTotal.toFixed(2);
grandTotal = grandTotal.toFixed(2);
costPortion = costPortion.toFixed(2);
p.innerText = `The cost of the meal was $${dinner.total}. With a ${dinner.tip}% tip, the cost of the tip is $${tipTotal}. The total cost of the meal is $${grandTotal}. Your portion of the cost is $${costPortion}.
                Hope you enjoyed your meal!😋`;                

calContainer.appendChild(p);

function formValidation() {
    let inputFieldValue = inputField.value;
    let inputFieldTipValue = inputFieldTip.value;
    let inputFieldEatValue = inputFieldEat.value;
    if (inputFieldValue === '' || inputFieldTipValue === '' || inputFieldEatValue === '') {
        p.innerText = '';
        paragraphText.innerText = text;
        paragraphText1.innerText = text;
        paragraphText2.innerText = text;
        return false;
    }
    if (inputFieldEatValue.length > 0) {
        form.reset();
    }
}   if (calContainer.childElementCount === 2) {
        calContainer.removeChild(calContainer.childNodes[0]);
}
formValidation();
});
