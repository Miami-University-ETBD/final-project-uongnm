// Script for side navigation
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
  }
  
  // Close side navigation
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  
  // Used to toggle the menu on smaller screens when clicking on the menu button
  function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  $( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    $("#name").focus();
    $("#contact_form").validate({         //<form> tag’s id
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phoneUS: true
        },
        message: {
          required: true,
          minlength: 10
        },
      },
    messages: {
        email:{
          required: "Hey, it looks like you still need to fill out this field",
          email: "Please enter a valid email like email@domain.com"
          }
        }
    }); // end validate
  } );

  // jQuery script 
  $(document).ready(function() {
    $('.accordion .question').click(function() {
      $(this).next().toggle('slow');
  })
  });