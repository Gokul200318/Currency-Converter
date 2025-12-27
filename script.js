let select = document.querySelectorAll('.currency')
// console.log(select)
let btn = document.getElementById('btn')
let input = document.getElementById('input')
fetch("https://api.frankfurter.app/currencies")
.then (res=>res.json())
.then (res=>displayDropDown(res))

function displayDropDown(res){
    //console.log(object.entries(res [2]))
   let curr = Object.entries(res)
   for (let i=0;i<curr.length;i++){
    let opt = ` <option value="${curr[i][0]}">${curr[i][0]}</option>  `
    // console.log(opt)
    select[0].innerHTML += opt
    select[1].innerHTML += opt

   }
}

btn.addEventListener('click',()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value

    let alertcontainer=document.getElementById("alert-container")
    alertcontainer.innerHTML=""
    if(curr1===curr2){
        
        let alertMessage=document.createElement('h3')
        alertMessage.innerHTML="Choose different currencies"
        // console.log(alertMessage)
        alertMessage.className='alert-message'
        alertcontainer.appendChild(alertMessage)
        
    }
    else
        convert(curr1,curr2,inputVal)

})

function convert(curr1, curr2, inputVal) {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${curr1}&symbols=${curr2}`)
      .then((resp) => resp.json())
      .then((data) => {
        const convertedAmount = (inputVal * data.rates[curr2]).toFixed(2);
        document.getElementById('result').value = convertedAmount
      });
    }
  

