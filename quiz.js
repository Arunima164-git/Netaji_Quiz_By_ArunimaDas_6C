// Create the questions

let questions = [

  {
    id:1,
    question:"Which INA Movement member joined Subhash Chandra Bose to establish the All India Forward Bloc?",
    options:[
      "Baikuntha Shukla",
      "Sheel Bhadra Yajee",
      "Ramnarayan Prasad",
      "P Narayan"
    ],
    answer:"Sheel Bhadra Yajee"
  },

  {
    id:2,
    question:"In which year, Azad Hind Radio service was started under Subhash Chandra Bose in Germany?",
    options:[
      "1943",
      "1932",
      "1942",
      "1933"
    ],
    answer:"1942"
  },

  {
    id:3,
    question:"Whom did Subhash Chandra Bose defeat in 1939 to win the election for President of Congress?",
    options:[
      "Mahatma Gandhi",
      "Pandit Nehru",
      "P Narayan",
      "Pattabhi Sitaramaih"
    ],
    answer:"Pattabhi Sitaramaih"
  },

  {
    id:4,
    question: "Whom did Subhash Chandra Bose meet in Germany?",
    options:[
      "Joseph Stalin",
      "Adolf Hitler",
      "Wiston Churchill",
      "Benito Mussolini"
    ],
    answer:"Adolf Hitler"
  },

  {
    id:5,
    question: "Which of the islands were freed by the Indian National Army?",
    options:[
      "Lakshadweep",
      "Andaman & Nicobar Islands",
      "Phesant Island",
      "Easter Islands"
    ],
    answer:"Andaman & Nicobar Islands"
  },

  {
    id:6,
    question: "The INA was organized by Netaji Subhash Chandra Bose at which place?",
    options:[
      "Tokyo",
      "Ottawa",
      "Singapore",
      "Egypt"
    ],
    answer:"Singapore"
  },

  {
  id:7,
  question: "Which NDRF’s Battalion has won the first-ever Subhash Chandra Bose Aapda Prabandhan Puraskar?",
  options:[
    "8th",
    "11th",
    "125th",
    "1st"
  ],
  answer:"8th"
},

{
id:8,
question: "The Netaji Subhash Chandra Bose museum has inaugurated in which of the following cities?",
options:[
  "Port Blair",
  "Kollam",
  "New Delhi",
  "Thivananthapuram"
],
answer:"New Delhi"
},

{
id:9,
question: "In which country did Subhash Chandra Bose organized the “Tiger Legion”?",
options:[
  "Canada",
  "Japan",
  "Germany",
  "India"
],
answer:"Germany"
},

{
id:10,
question: "Where did Netaji Subhash Chandra Bose established provisional Government of Free India ?",
options:[
  "Tanzania",
  "Zimbabwe",
  "Singapore",
  "United States of America (USA)"
],
answer:""
},
]

//Create local storage

let value = JSON.stringify(questions)
localStorage.setItem("question",value)

let question_count = 0
let points = 0

window.onload = function(){
  show(question_count)
}

//Create show function

function next(){
  if(question_count == questions.length-1){
    location.href = "end.html"
  }
  let user_answer = document.querySelector("li.option.active").innerHTML
  if(user_answer == questions[question_count].answer){
    points++
    sessionStorage.setItem("points",points)
  }
  else{
    points += 0
    sessionStorage.setItem("points",points)
  }
  question_count++
  show(question_count)
}

function show(question_count){
  let question = document.getElementById('questions')
  let [first, second, third, fourth] = questions[question_count].options

  question.innerHTML = `
  <h2>${questions[question_count].question}<h2>
  <ul class="option-group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
  </ul>
  `
  toggleActive()

}

//Create next function



function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) 
        {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}  