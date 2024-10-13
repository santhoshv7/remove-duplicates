function processElements(){
    const elements = document.getElementById("array-input").value;

    const arrayElements = elements.split(',').map(Number);

    const uniqueElements = removeDuplicate(arrayElements);

    document.getElementById("unique-elements").textContent = uniqueElements.join(", ");


}

function removeDuplicate(Array){
    const uniqueElements = new Set(Array);

    return [...uniqueElements];
}

document.getElementById("start-button").addEventListener("click", processElements);