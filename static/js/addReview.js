function changepay(){
var elem = document.getElementById('pay');
var radios = document.getElementsByName('paytypes');
var annualOptions = ['$35,000 - $50,000', '$50,000 - $65,000', '$65,000 - $80,000', '$80,000+'];
var hourlyOptions = ['$11.25 - $14.99', '$15.00 - $19.99', '$20.00 - $24.99 ', '$25.00 - $29.00', '$30.00 - $34.99', '$35.00+'];
var options = "";

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


document.getElementById('annual').addEventListener("click", changepay);
document.getElementById('hourly').addEventListener("click", changepay);

