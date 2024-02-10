const numbersBox = document.getElementsByClassName("box-number");
const answers = document.getElementById("answers");


let numberAnswers = "";

const randomNumber = ()=>{
    let nums = []
    for(let i=0; i<4; i++){
        nums.push(Math.floor(Math.random() * 9));
    }
    return nums
}
const setANumber = () => { 
  for (let i = 0; i < numbersBox.length; i++) {
      numbersBox[i].addEventListener("click", () => {
          if (numberAnswers.length < 4) {
              numberAnswers += numbersBox[i].innerHTML;
              answers.innerHTML = numberAnswers;
            }
        });
    }
    
};

const handleRefresh = ()=>{
    const refresh = document.getElementById("refresh");
    refresh.addEventListener("click", ()=>{
        answers.innerHTML = ""
        numberAnswers = ""
    })
}

const handleSubmit = ()=>{
    const submit = document.getElementById("submit");
   
    submit.addEventListener("click", ()=>{
        const results = randomNumber().join("");
        console.log(typeof(results));
        if(numberAnswers.length !== 4){

            return
        }

        if(numberAnswers === results){
            alert("asikk bener nih")
            handleRefresh()
        }else{
            alert(`jawana kamu salah 🤪, jawaban yang bener adalah: ${results}`)
            handleRefresh()
        }
    })
}


setANumber();
handleRefresh();
handleSubmit();
