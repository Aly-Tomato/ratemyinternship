function changepay(){
var elem = document.getElementById('pay');
var radios = document.getElementsByName('paytypes');
var annualOptions = ['$35,000 - $50,000', '$50,000 - $65,000', '$65,000 - $80,000', '$80,000+'];
var hourlyOptions = ['$11.25 - $14.99', '$15.00 - $19.99', '$20.00 - $24.99 ', '$25.00 - $29.00', '$30.00 - $34.99', '$35.00+'];
var options = "";
// Depending on what is selected, it will show annual salary brackets, or hourly options
if(radios[0].checked){
   annualOptions.forEach(option => {
      options += "<option>"+ option + "</option>";
   });
}
else{
   hourlyOptions.forEach(option => {
      options += "<option>"+ option + "</option>";
   });
}
elem.innerHTML = options;
}

// event listener to make dynamically change whatever the user clicks to ensure 
// the entered data is a salary or an hourly rate
document.getElementById('annual').addEventListener("click", changepay);
document.getElementById('hourly').addEventListener("click", changepay);

