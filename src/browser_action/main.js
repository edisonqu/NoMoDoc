let submitButton = document.getElementById("submit")
submitButton.addEventListener("click",onSubmit,true)
// document.getElementById("#submit").addEventListener("click", onSubmit());

function onSubmit(event){
    event.preventDefault()
    let question = document.getElementById('inputted').value
    const output = document.getElementById('output')
    var theDiv = document.getElementById("output");
    var content = document.createTextNode(question);
    theDiv.appendChild(content)
}

