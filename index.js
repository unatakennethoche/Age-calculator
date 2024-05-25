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
list.classList.add("error-label")
})
  }

const validateInputs=(e)=>{
  e.preventDefault()
  
  
if(dayInputValue===""){
errorSpan[0].textContent="This field is required"
invalidStyle()
}
}



calculateBtn.addEventListener("click",validateInputs)