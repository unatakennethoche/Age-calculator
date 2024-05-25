const dayInput=document.getElementById("day");
const monthInput=document.getElementById("month");
const yearInput=document.getElementById("year");
const calculateBtn=document.getElementById("calculate-btn")
const dayInputValue=dayInput.value.trim();
const monthInputValue=monthInput.value.trim();
const yearInputValue=yearInput.value.trim();
const errorSpan=document.querySelectorAll(".error-message")
const invalidStyle=()=>{
const label=document.querySelectorAll(".label")
label.forEach((list)=>{
list.style.color="hsl(0, 100%, 67%)"
})
  }

const date=new Date();
const year=date.getFullYear();


let isValid=true
 const validateDay=(dayInputValue)=>{
  if(dayInputValue===""){
    isValid=false
    errorSpan[0].textContent="This field is required"
    invalidStyle()
    }
     else if(parseInt(dayInputValue) >
     31||parseInt(dayInputValue)<=0){
      isValid=false
      errorSpan[0].textContent="must be a valid day";
      invalidStyle()  
    }
 }


 const  validateMonth=(monthInputValue)=>{
  if(monthInputValue===""){
    isValid=false
    errorSpan[1].textContent="This field is required"
    invalidStyle()
    }
     else if(parseInt(monthInputValue) > 12||parseInt(monthInputValue)<=0){
      isValid=false
      errorSpan[1].textContent="must be a valid day";
      invalidStyle()  
    }
}


const  validateYear=(yearInputValue)=>{
  if(yearInputValue===""){
    isValid=false
    errorSpan[2].textContent="This field is required"
    invalidStyle()
    }
     else if(parseInt(yearInputValue) > year||parseInt(yearInputValue)<=0){
      isValid=false
      errorSpan[2].textContent="must be a valid day";
      invalidStyle()  
    }
}

const calculateAge=(day,month,year)=>{
  const birthDate=new Date(year,month-1,day);
  const today=new Date();
  let age=today.getFullYear()-birthDate.getFullYear();
  let months=today.getMonth()-birthDate.getMonth()
  let days=today.getDate()-birthDate.getDate()
  document.getElementById("results-years").textContent=age
  
  document.getElementById("results-months").textContent=months
  document.getElementById("results-days").textContent=days
}



const validateInputs=(e)=>{
  e.preventDefault()
  const dayInputValue = dayInput.value.trim();
  const monthInputValue=monthInput.value.trim();
  const yearInputValue=yearInput.value.trim();
  validateDay(dayInputValue)
  validateMonth(monthInputValue)
  validateYear(yearInputValue)
if(isValid){
  calculateAge(parseInt(dayInputValue),parseInt(monthInputValue),parseInt(yearInputValue));
  dayInput.value = '';
  monthInput.value = '';
  yearInput.value = '';
} else{document.getElementById("results-years").textContent="--"
  
document.getElementById("results-months").textContent="--"
document.getElementById("results-days").textContent="--"}
}

calculateBtn.addEventListener("click",validateInputs)