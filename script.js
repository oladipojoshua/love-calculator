const checkCompact = () => {
  let myName = yourName.value;
  let loveName = loverName.value;

  if (myName == "" && loveName == ""){
    showErr.innerHTML = `<p  style="
    color:white;
    width: 80%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: red;">Alaye fill in your names joor.</p>`
  }
  else{
    document.getElementById('yourName').value = ""
    loverName.value = ""
    showErr.innerHTML = ""
    display.innerHTML = ""
    let randomize = Math.random()*100;
    let overAll = Math.round(randomize)
    display.innerHTML = `<p style="
    width: 80%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;"> Love score for ${myName} and ${loveName} : ${overAll}%</p>`

    if (overAll < 50){
      displayCompat.innerHTML = `<p  style="
      width: 80%;
      margin: 10px 0;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: #fff;">ehn ehn ah kikiski<br>paddy mhi back off. </p>`
    }else if (overAll > 50){
      displayCompat.innerHTML = `<p  style="
      width: 80%;
      margin: 10px 0;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: #fff;">Congratulations Move on guys😍❤️ </p>`
    }
  }

}


