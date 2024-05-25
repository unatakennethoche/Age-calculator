const dayInput=document.getElementById("day");
const monthInput=document.getElementById("month");
const yearInput=document.getElementById("year");
const calculateBtn=document.getElementById("calculate-btn")

const validateInputs=(e)=>{
  e.preventDefault()
  
const dayInputValue=dayInput.value.trim();
const monthInputValue=monthInput.value.trim();
const yearInputValue=yearInput.value.trim();

if(dayInputValue===""){

}
}

calculateBtn.addEventListener("click",validateInputs)