const form=document.querySelector('form')
// const height= parseInt(document.querySelector('#height').value) : this use case will give empty value

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please give a valid height: ${weight}`
    }else{
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>` 
    }
})