const  questions = [{
    'que' : 'Which of the following is a markup language ?',
    'a' : 'HTML',
    'b' : 'Css',
    'c' : 'Javascript',
    'd' : "php",
    'correct' : 'a'        
},
{
    'que' : 'Which of the following is a style language ?',
    'a' : 'HTML',
    'b' : 'Css',
    'c' : 'Javascript',
    'd' : "php",
    'correct' : 'b'        
},
   {
'que' : 'Which of the following is a programming  language ?',
    'a' : 'HTML',
    'b' : 'Css',
    'c' : 'Javascript',
    'd' : "php",
    'correct' : 'c'        
},
{
    'que' : 'Which of the following is a backend language ?',
    'a' : 'HTML',
    'b' : 'Css',
    'c' : 'Javascript',
    'd' : "php",
    'correct' : 'd'        
},
{
    'que' : 'Which of the following is a microsoft language ?',
    'a' : 'HTML',
    'b' : 'Css',
    'c' : 'Javascript',
    'd' : "none",
    'correct' : 'a'        
},


]

let index = 0; 
let total = questions.length;
let right = 0;
let wrong  =0;
const quesbox = document.getElementById("quesbox");
const optioninput = document.querySelectorAll(".options")
const loadquestion = () =>{
    if(total === index){
        return quizend();
    }
    reset();
    const data = questions[index];
    quesbox.innerText =`${index+1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;
}

document.querySelector("#submit").addEventListener(
    "click",
    function(){
        const data = questions[index];
        const ans = getans();
        if(ans === data.correct){
            right++;
        }
        else{
            wrong++;
        }
        index++;
        loadquestion();
    }
)

const getans = ()=>{
        let ans;
        optioninput.forEach(
            (input)=>{
            if(input.checked){
                ans = input.value;
            }
        }
        )
        return ans;
}
function reset(){
    optioninput.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

function quizend(){
    document.getElementById("box").innerHTML = `
    <div style="text-align:center" >
    <h3 style="font-size:1.4rem; padding:10px;">
    Thank you for the playing quiz
    </h3>
    <p>  Your score is ${right}/${total} </p>
    <span class="icon">

    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_wjGXUyYZSf.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </span>
    </div>`
}

loadquestion();