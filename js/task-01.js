const itemEls = document.querySelectorAll('.item');
const ulEl = document.querySelectorAll('#categories');

console.log(`Number of categories: ${itemEls.length} `);

 itemEls.forEach(element => {    
    console.log(`Category: `, element.firstElementChild.textContent)
    console.log(`Elements:`, element.lastElementChild.children.length);
   
});
