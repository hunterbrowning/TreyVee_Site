var emailSuccees = false;

function validateForm() {
  console.log("validateForm fired");
  var x = document.forms["emailForm"]["emailField"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    emailSuccees = false;
      // $('#status-circle').css('backgroundImage', "url(/img/Error_btn@2x.png)");
      $('#status-circle').toggleClass('status-circle-error');
      // $('#status-circle').animate({opacity: 1}, 1);
      $('#email-status').css('color', "#FF5A7A");
      $('#email-status').html("PLEASE ENTER A VALID EMAIL ADDRESS");
      $('#email-field').toggleClass('field-error');
      return false;
  } else {
    emailSuccees = true;
    // $('#status-circle').css('backgroundImage', "url(/img/Success_btn@2x.png)");
    $('#status-circle').toggleClass('status-circle-success');
    // $('#status-circle').animate({opacity: 1}, 1);
    $('#email-status').css('color', "#34D290");
    $('#email-status').html("THANK YOU FOR CONNECTING WITH US!");
    $('#email-field').toggleClass('field-success');
    emailFinished();
    return false;
  }
}

function emailFocus(){
   $('#status-circle').animate({opacity: 1}, 200);
}
function emailFinished(){
  console.log("emailFinished fired");
  setTimeout(function(){
    $('#email-field').blur();
    document.getElementById("email-form").reset();
  }, 2000);
}

function unfocus(){
  console.log("unfocus fired");
   // $('#status-circle').animate({opacity: 0}, 100, function(){
   //    console.log("nonsese fired");
   //    // $('#status-circle').removeClass();
   // });
  $('#status-circle').css({opacity: 0});
  $('#status-circle').removeClass();
  $('#email-field').removeClass();
  $('#email-status').html("");
}

$('#status-circle').click(function(){
  console.log("status-circle clicked");
  $('#email-field').focus();
  validateForm();
  // if (emailSuccees){
  //   $('#status-circle').css('backgroundImage', "url(/img/Success_btn@2x.png)");
  // } else {
  //   $('#status-circle').css('backgroundImage', "url(/img/Error_btn@2x.png)");
  // }
});