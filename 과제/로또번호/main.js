window.onload = () => {
  const genBtn = document.getElementById("generateButton");
  const output = document.getElementById("numbers");
  const prenum = document.getElementById("prenum");

  let prevnumbers = [];
  // ********************* genBtn*************
  genBtn.addEventListener("click", function () {
    let numbers = generateLottoNumbers();
    // console.log(numbers);
    output.textContent = numbers.join(", ");
    // console.log(prevnumbers)
    prenum.textContent = prevnumbers.join(", ");
    prevnumbers = [...numbers];
    // console.log(prevnumbers)
  });

  // **********************generateLottoNumbers() *********************
  function generateLottoNumbers() {
    let arrContainer = [];
    output.classList.remove("animation");
    prenum.classList.remove("animation");
    // for (i = 0; i < 6; i++) {
    //   const ranNum = Math.floor(Math.random() * 45) + 1;

    //   arrContainer.includes(ranNum) || arrContainer.push(ranNum);
    // }
    while (arrContainer.length < 6) {
      const ranNum = Math.floor(Math.random() * 45) + 1;

      arrContainer.includes(ranNum) || arrContainer.push(ranNum);
    }

    setTimeout(() => {
      output.classList.add("animation");
      prenum.classList.add("animation");
    }, 10);
    return arrContainer.sort((a, b) => a - b);
  }
};
