var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = [
    
];

for(var i = 0; i < products.length; i++) {
 var subArray = products[i].split(':');
 var nam = subArray[0];
 var price = Number(subArray[1]);
 total += price;
 itemText = nam + ' — $' + price;

 var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);