const textareaEl = document.getElementById("textarea");

const totalcounterEl = document.getElementById('total-counter');

const remainingcounterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('input', ()=>{
    updateCounter();
})
updateCounter();
function updateCounter(){
    const currentLength = textareaEl.value.length;
    const maxLength = textareaEl.getAttribute("maxLength");
    
    totalcounterEl.innerText = currentLength;
    remainingcounterEl.innerText = maxLength - currentLength;
}