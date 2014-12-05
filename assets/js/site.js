var emailSuccess = false;

function validateForm() {
    var x = document.forms["emailForm"]["emailField"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        // alert("Not a valid e-mail address");
        $('#status-circle').css('backgroundImage', "url(/img/Error_btn@2x.png)");
        $('#email-status').css('color', "#FF5A7A");
        $('#email-status').html("PLEASE ENTER A VALID EMAIL ADDRESS");
        $('#email-field').css('borderColor', "#FF5A7A");
        emailSuccess = false;
        return false;
    } else {
      $('#status-circle').css('backgroundImage', "url(/img/Success_btn@2x.png)");
      $('#email-status').css('color', "#34D290");
      $('#email-status').html("THANK YOU FOR CONNECTING WITH US!");
      $('#email-field').css('borderColor', "#34D290");
      emailSuccess = true;
      return false;
    }
}

function emailFocus(){
   $('#status-circle').animate({opacity: 1}, 200);
   $('#email-field').css('borderColor', "#56B0FF");
}

function emailOff(){
   if (emailSuccess){
      setTimeout(function(){unfocus()}, 2000);
      emailSuccess = false;
   } else {
      unfocus();
   }
}
function unfocus(){
   console.log("unfocus fired");
   $('#status-circle').animate({opacity: 0}, 100, function(){
      $('#status-circle').css('backgroundImage', "url(/img/Submit_btn@2x.png)");
   });
   $('#email-field').css('borderColor', "#D5D9E1");
   $('#email-status').html("");
}