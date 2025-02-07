// function finish(){
//     let piit=document.getElementById('pit').value;

//     if(piit === "Cat"){
    
//         console.log('beeter next time')
//         window.location.href = "result.html";
//     }
//     if (piit === "Owl"){
    
//         console.log('greet job')
//         window.location.href = "result.html";
//     }
//     if (piit === "Sheep"){
    
//         console.log('beeter next time')
//         window.location.href = "result.html";
//     }
//     if(piit === "Snake"){
    
//         console.log('beeter next time')
//         window.location.href = "result.html";
//     }
// }

function finish() {
    let selectedPet = document.querySelector('input[name="pet"]:checked');
    if (selectedPet) {
        let petValue = selectedPet.value;
        let resultMessage = '';
        if (petValue === "Cat" || petValue === "Sheep" || petValue === "Snake") {
            resultMessage = 'Better luck next time!';
            console.log(resultMessage);
        } else if (petValue === "Owl") {
            resultMessage = 'Great job!';
            console.log(resultMessage);
        }
        localStorage.setItem('quizResult', resultMessage);
        window.location.href = "result.html";
    } else {
        alert('Please select an option!');
    }
}

