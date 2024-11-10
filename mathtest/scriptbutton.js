function armazenarValor(){
    var userInput = document.getElementById("userInput").value;
    if (userInput == 2){
        document.getElementById("valorInserido").innerText = "Parabéns! Você acertou!";
    }
    else {
        document.getElementById("valorInserido").innerText = "Tente novamente!"
    }
}