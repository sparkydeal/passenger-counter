// document.getElementById("count-el").innerText = 6;
let c = (...args) => console.log(...args)
let countEl = document.getElementById("count-el");
let results = document.getElementById("results");
let resultsStr = 0;
let firstTimeDisplayed = true;
let count = 0;


function save() {
    
    if (firstTimeDisplayed) {
        resultsStr =  count;
        firstTimeDisplayed = false
        results.textContent = resultsStr;
    }
    else {
        resultsStr = ' - ' + count;
        results.textContent += resultsStr;

    }
    
    countReset();
    
    // if (count > 1) {
    //     resultsStr += ', ';
    // }
    

    c(resultsStr);
    

} 

let increment = () => countEl.textContent = ++count;
let countReset = () => count = 0;
function resetPage() {
    count = 0;
    results.textContent = '0';
    countEl.textContent = '0';
    firstTimeDisplayed = true;
}

    
    

