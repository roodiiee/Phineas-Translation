var textInput = document.querySelector("#textInput")
var btnTranslate = document.querySelector("#btn-Translate")
var outputDiv = document.querySelector("#outputDiv")

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function translate(){
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then((json) =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText
    })
}
btnTranslate.addEventListener("click", translate)