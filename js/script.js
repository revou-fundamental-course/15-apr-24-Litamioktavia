function onClickFunction() {
     var input = document.getElementById('celcius-input');
    
     var value = input.value;

    // Validation using regex
    var digitOnlyPattern = /^\d+$/;

    if(!digitOnlyPattern.test(value)) {
        var element = document.getElementById('warning-input');
        element.textContent = "Please enter digit only";
    } else {
        var element = document.getElementById('result-number');
        element.textContent = ((value * 1.8 + 32).toFixed(2))
        var element = document.getElementById('formula');
        element.textContent = (`(${value}°C x 1.8) + 32`)
    }
}
function onLoadFunction() {
    var convertBtn = document.getElementById('convert-btn');
    
    convertBtn.onclick = onClickFunction;
}

window.addEventListener('load', onLoadFunction);