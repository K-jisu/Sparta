window.onload = () => {
  const startBtn = document.getElementById("start");
  const submitBtn = document.getElementById("submit");
  const numDp = document.getElementById("numberDisplay");
  const inputText = document.getElementById("form");
  const output = document.getElementById("output");

  let rdmNum;
  let gamestart = false;

  startBtn.addEventListener("click", () => {
    gamestart = true;
    rdmNum = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    numDp.innerText = rdmNum;
    numDp.style.opacity = "100%";
    output.innerText = ""
    startBtn.disabled = true;
    
    setTimeout(() => {
      numDp.style.opacity = "0%";
    }, 3000);
  });
  
  submitBtn.addEventListener("click", () => {
    if (+inputText.value === rdmNum) {
      output.innerText = "정답입니다!";
      gamestart = false;
      startBtn.disabled = false;
      
    } else {
      output.innerText = `오답입니다! 정답은 : ${rdmNum} 입니다!`;
      gamestart = false;
      startBtn.disabled = false;
    }
    // +inputText.value === rdmNum
    //   ? (output.innerText = "정답입니다!")
    //   : (output.innerText = `오답입니다! 정답은 : ${rdmNum} 입니다!`);
    inputText.value = "";
  });
};
