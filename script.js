
function calcu(){
    var weight = document.getElementById('weight').value
    var height = document.getElementById('height').value
    var age = document.getElementById('age').value


    man = {
        height: height.value,
        weight: weight.value,
        age: age.value
    }
    
    if(man.height=='' || man.weight=='' || man.age==''){
        alert("Please fill all fields")
    }
    else{
        
    localStorage.setItem(man.height,JSON.stringify(man))

    height=height/100
  
    var bmi = ((weight)/(height**2)).toFixed(2)
    
    var cate = ''
    var comm = ''
    var arrowPosition = 0;
    
    
    if(bmi<= 18.4){
        
        cate = 'Underweight'
        comm= 'Gain Some weight'
        arrowPosition = 12.5;
        
    }
    else if(bmi>18.4 && bmi<=24.9){
        cate = 'Normal'
        comm= 'Great keep going'
        arrowPosition = 37.5; 
    }
    else if(bmi>24.9 && bmi<=40){
        cate = 'Overweight'
        comm= 'Try to loose some weight'
        arrowPosition = 62.5; 
    }
    else{
        cate = 'Obese'
        comm= 'Consult a doctor'
        arrowPosition = 87.5;
    }
    localStorage.setItem('bmiResult', bmi)
    localStorage.setItem('cate', cate)
    localStorage.setItem('comm', comm)

    document.getElementById('arrow').style.left = `${arrowPosition}%`;
    document.getElementById('result').innerText = `Your BMI is: ${localStorage.getItem('bmiResult')}`;
    document.getElementById('cate').innerText = `Category: ${localStorage.getItem('cate')}`;
    document.getElementById('comm').innerText = `Comments: ${localStorage.getItem('comm')}`;


}
}

function incr() {
    let age = parseInt(document.getElementById('age').value);

    // Increment the age
    age++;

    // Store the new age in localStorage
    localStorage.setItem('age', age);

    // Update the input field with the new age
    document.getElementById('age').value = age;
}

// Optional: Set the initial value of the input field from localStorage



function decr(){
    let age = parseInt(document.getElementById('age').value)
    age--
    localStorage.setItem('age',age)
    document.getElementById('age').value=age
}

window.onload = function() {
    let storedAge = localStorage.getItem('age');
    // if (storedAge !== null) {
        document.getElementById('age').value = storedAge;
    // }
}

function reset(){
    localStorage.clear()
    
    }