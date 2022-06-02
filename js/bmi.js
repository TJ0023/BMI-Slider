function weightConverter(valNum) {
    document.getElementById("outputKilograms").innerHTML=((valNum * 2.2046).toFixed(2));
  }

  function heightConverter(valNum) {
    document.getElementById("outputMeters").innerHTML=((valNum / 100).toFixed(2));
  }

function calculate(){
      let bmi;
      let result = document.getElementById("result");
      let height = parseInt(document.getElementById("height").value);
      let weight = parseInt(document.getElementById("weight").value);
      document.getElementById("weight-val").textContent = weight + " kg";
      document.getElementById("height-val").textContent = height + " cm";
   
      bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
      result.textContent = bmi;
  

      if(bmi < 18.5){
          category = "Underweight 😒";
          result.style.color = "#ffc44d";
      }
    
      else if( bmi >= 18.5 && bmi <= 24.9 ){
          category = "Normal Weight 😍";
          result.style.color = "#0be881";
      }
    
      else if( bmi >= 25 && bmi <= 29.9 ){
          category = "Overweight 😮";
          result.style.color = "#ff884d";
      }
    
      else{
          category = "Obese 😱";
          result.style.color = "#ff5e57";
      }

      document.getElementById("category").textContent = category;
  }

  function calculate2(){
    let bmi2;
    let result = document.getElementById("result2");
    let height2 = parseInt(document.getElementById("heightInch").value);
    let weight2 = parseInt(document.getElementById("weightLbs").value);

    document.getElementById("weightLbs-val").textContent = weight2 + " lbs";
    document.getElementById("heightInch-val").textContent = height2 + " inches";

    
    bmi2 = ( (weight2 / (height2 *height2))*703) .toFixed(1);
    result.textContent = bmi2;

    if(bmi2 < 18.5){
      category = "Underweight 😒";
      result.style.color = "#ffc44d";
  }

  else if( bmi2 >= 18.5 && bmi2 <= 24.9 ){
      category = "Normal Weight 😍";
      result.style.color = "#0be881";
  }

  else if( bmi2 >= 25 && bmi2 <= 29.9 ){
      category = "Overweight 😮";
      result.style.color = "#ff884d";
  }

  else{
      category = "Obese 😱";
      result.style.color = "#ff5e57";
  }
  document.getElementById("category2").textContent = category;
  }