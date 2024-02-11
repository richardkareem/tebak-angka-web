const numbersBox = document.getElementsByClassName("box-number");
const answers = document.getElementById("answers");

let numberAnswers = "";
let history = [];

const randomNumber = () => {
  let nums = [];
  for (let i = 0; i < 4; i++) {
    nums.push(Math.floor(Math.random() * 9));
  }
  return nums;
};
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

const handleRefresh = () => {
  const refresh = document.getElementById("refresh");
  refresh.addEventListener("click", () => {
    answers.innerHTML = "";
    numberAnswers = "";
  });
};

const handleSaveNumber = (value) => {
  localStorage.setItem("listNumbers", value);
};

const handleGetLocalStorage = () => {
  const ls = localStorage.getItem("listNumbers");
  return ls;
};

const handleSaveIntoList = (results) => {
  const ul = document.getElementsByTagName("ul");
  const res = ul[0].innerHTML;
  ul[0].innerHTML =
    res +
    `<li>${results}</li>`
};
const handleListWhenRefreshed = () => {
    const list = document.getElementById("list");
    list.innerHTML = "<ul></ul>";
    const ul = document.getElementsByTagName("ul");
    const ls = handleGetLocalStorage();

    if (!ls) {
      return;
    }
    const newHistory = ls.split(",");

    for (let i = 0; i < newHistory.length; i++) {
      ul[0].innerHTML += `<li>${newHistory[i]}</li>`;
    }
  };

const handleSubmit = () => {
  const submit = document.getElementById("submit");

  submit.addEventListener("click", () => {
    const results = randomNumber().join("");
    let arrayLs = [];

    const ls = handleGetLocalStorage();
    if(!ls){
        
    }else{
       arrayLs =  handleGetLocalStorage().split(",")
    }
    
    if (numberAnswers.length !== 4) {
      return alert("Harap Isi 4 Digits");
    }
   
    if(arrayLs.length === 10){
        alert("Udah Gabisa Bos Q")
        return
    }else{
        if (numberAnswers === results) {
      
            alert("asikk bener nih");
            numberAnswers = "";
            answers.innerHTML = "";
            history.push(results);
            handleSaveNumber(history);
            handleSaveIntoList(results);
          } else {
            alert(`jawana kamu salah 🤪, jawaban yang bener adalah: ${results}`);
            numberAnswers = "";
            answers.innerHTML = "";
            history.push(results);
            handleSaveNumber(history);
            handleSaveIntoList(results);
        }
    }
    
  
    
  });
};

const handleGetNumbersBtn = () => {
  const btnGet = document.getElementById("get-btn");

  btnGet.addEventListener("click", () => {
    const ls = handleGetLocalStorage().split(",");
    const resultsDay = document.getElementById("results-day")
    const textResultsDay = resultsDay.innerText;
  
  
    if(ls.length === 10){
        if(textResultsDay !== "Adalah:" ){
            alert("Balik Lagi Besok 🫣")
        }else{
            const  handleRandomPrize = ()=>{
                const random = Math.floor(Math.random() * ls.length)
                return ls[random]
              }
            resultsDay.innerHTML += handleRandomPrize();
        }
    }else{
        alert(`harus 10x Dlu bosku kurang ${10 - ls.length}`)
    }
    
  });
};

handleGetNumbersBtn();
setANumber();
handleRefresh();
handleSubmit();
handleListWhenRefreshed();
