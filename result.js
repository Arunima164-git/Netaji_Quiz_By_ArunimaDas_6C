var points = sessionStorage.getItem("points");

var head_result = document.getElementById("result-header");
var body_result = document.getElementById("result-body");


if(points >= 5) {
    head_result.innerText = "That’s nice! You’ve got "+points+" out of 10 right";
    body_result.innerText = "You worked hard and it paid off! Nice work figuring out these tough questions!";
}
else{
    head_result.innerText = "Oops! You’ve got only "+points+" out of 10 right";
    body_result.innerText = "It's okay. These quizzes help you when you lose. You lost now dosen't mean you should not try again!" 
}

function reset(){
    location.href = "index.html"; 
}