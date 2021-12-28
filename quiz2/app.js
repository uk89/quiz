var quesArr = [
    {
      num: 1,
      question: "What does HTML stand for?",
      options: {
        a: "Hyper Text Markup Language",
        b: "Network Protocol",
        c: "How to Make Lasagna",
        d: "Scripting Language",
      },
      correctAns: "Hyper Text Markup Language",
    },
    {
      num: 2,
      question: "HTML uses?",
      options: {
        a: "User defined tags",
        b: "Fixed tags defined by the language",
        c: "Pre-specified tags",
        d: "Tags only for linking",
      },
      correctAns: "Fixed tags defined by the language",
    },
    {
      num: 3,
      question: "	 Fundamental HTML Block is known as ___________.",
      options: {
        a: "HTML Body",
        b: "HTML Attribute",
        c: "HTML Tag",
        d: "HTML Element",
      },
      correctAns: "HTML Tag",
    },
    {
      num: 4,
      question: " Which of the following is used to create Web Pages ?",
      options: {
        a: "C++",
        b: "Java",
        c: "html",
        d: "None of the above"
      },
      correctAns: "html",
    },
    {
        num: 5,
        question: "What should be the first tag in any HTML document?",
        options: {
          a: "head",
          b: "html",
          c: "title",
          d: "None of the above",
        },
        correctAns: "<html>",
      },
      {
        num: 6,
        question: "How can you make a bulleted list with numbers?.",
        options: {
          a: "picture",
          b: "ol",
          c: "ul",
          d: "list",
        },
        correctAns: "<ol>",
      },
      {
        num: 7,
        question: " What tag is used to display a picture in a HTML page?",
        options: {
          a: "picture",
          b: "image",
          c: "src",
          d: "None of the above",
        },
        correctAns: "src",
      },
      {
        num: 8,
        question: "HTML web pages can be read and rendered by",
        options: {
          a: "Compiler",
          b: "Server",
          c: "Web Browser",
          d: "None of the above",
        },
        correctAns: "Web Browser",
      },
      {
        num: 9,
        question: "Which of the following is not a browser ?",
        options: {
          a: "Microsofts Bing",
          b: "_Netscape Navigator",
          c: "FMozilla Firefox",
          d: "None of the above",
        },
        correctAns: "Microsofts Bing",
      },
    {
      num: 10,
      question: "HTML tags are surrounded by which type of brackets..",
      options: {
        a: "Curly",
        b: "Round",
        c: "Angle",
        d: "Squart",
      },
      correctAns: "Angle",
    },
  ];



var name1=prompt("Enter Your Full Name")
var Name = document.getElementById("name")
var resultName=document.getElementById("resultName")
resultName.innerHTML=name1
Name.innerHTML=name1


var uiQuestion = document.getElementById("question")


var Quizoption = document.getElementsByClassName("Quizoption")

var nextBtn = document.getElementById("nextBtn")

var mtotalQues = document.getElementById("totalQues")
var mcorrectAns = document.getElementById("correctAns")
var mwrongQues = document.getElementById("wrongQues")
var resultBox = document.getElementById("resultBox")
var mainBox = document.getElementsByClassName("mainBox")[0]

for(var i = 0 ; i < Quizoption.length ; i++){
    Quizoption[i].setAttribute("onclick" , "checkAnswer(this)")
}



var counter = 0
var Scorecounter = 0
var wrongCounter = 0

////onload function///
function startQuiz(){
    //set ques 
    
    uiQuestion.innerHTML = quesArr[counter].question

    ///set options
    Quizoption[0].innerHTML = quesArr[counter].options.a
    Quizoption[1].innerHTML = quesArr[counter].options.b
    Quizoption[2].innerHTML = quesArr[counter].options.c
    Quizoption[3].innerHTML = quesArr[counter].options.d

    nextBtn.style.display = "none"

}



function nextQues(){
    
  if( counter < quesArr.length -1){
    counter++
    startQuiz()

  }else{
    console.log("finish....");
    resultBox.style.display = "block"
    mainBox.style.display = "none"
    mtotalQues.innerHTML = quesArr.length
    mcorrectAns.innerHTML = Scorecounter
    mwrongQues.innerHTML = wrongCounter


  }
    // console.log(quesArr.length)
      
    for(var i = 0 ; i<Quizoption.length ; i++){
      Quizoption[i].style.pointerEvents = "visible"
      Quizoption[i].style.backgroundColor = "transparent"

  }
}


function checkAnswer(li){
    
    if(li.innerHTML === quesArr[counter].correctAns){
        console.log("true ans")
        Scorecounter++
        console.log("Scorecounter" , Scorecounter);
        li.style.backgroundColor = "green"
      }else{
        wrongCounter++
      console.log("false");
      li.style.backgroundColor = "red"
      
    }
      
    for(var i = 0 ; i<Quizoption.length ; i++){
        Quizoption[i].style.pointerEvents = "none"
    }
    nextBtn.style.display = "block"

}



var min = document.getElementById("min")
var sec = document.getElementById("sec")


var minjs = 5
var secjs = 0
min.innerHTML = minjs

var interval = setInterval(function(){
    secjs++
    sec.innerHTML = secjs
      if(secjs == 60){
      minjs--
      min.innerHTML = minjs
      secjs=0
      sec.innerHTML=secjs
    }
    if(minjs < 0){
        resultBox.style.display = "block"
        mainBox.style.display = "none"
        mtotalQues.innerHTML = quesArr.length
        mcorrectAns.innerHTML = Scorecounter
        mwrongQues.innerHTML = wrongCounter
    }



} , 1000)