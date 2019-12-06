function formValidation() {
  ///declare variables to access form elements.
  ///don't use let alot  because some of the variables won't be accessed
  var uid = document.registration.userid; // registartion is the name of the form and instead of using getelement by id.
  //we use the userid direct which is the name of the element
  
  var passid = document.registration.passid
var uname = document.registration.name
var uadd = document.registration.uadd
  /// this is for a nested loop function to get through att the element we are going to pass
  if (useridVal(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12))
      
      {
      if (allLetter(uname))
        {
          if(alphanumeric(uadd)){

          }

        }

      }
  }
  /// handling the first element uid(7 to 12)
  function useridVal(uid, mx, my) {
    var uidLen = uid.value.length; //we are declaring a variable that will determine the length of the value/xters in the uid
    if (uidLen == 0 || uidLen >= my || uidLen < mx) {
      uid.focus();
      uid.style.border = "2px solid red";
      //return false; //the reurn false means if the condition is not meant, then on submit don't store the data
    }
    return true; // this will submit the work if the conditions are met
  }
  //regular expression
  //handling name validation
  function allLetter(uname){
      var letters = /^[A-Za-z]#$/;  //a regular expression has no space becoz space has a meaning
      if (uname.value.match(letters))
      {
          return true
      }
      else{
          alert('Username must have alphabet characters only')
          uname.focus()
          uname.style.border ="2px solid red"
          //return false;
      }
       return true;
    }

  ///handling password validation.
  function passid_validation(passid,mx,my)
  {
    var passidLen =passid.value.length
    if(passidLen == 0 || passidLen>=my || passidLen<mx)
    {
      passid.focus()
      passid.style.border ='2px solid red'
     //return false;
    }
    return true;
  }

  //handling address validation
  function alphanumeric(uadd)
  {
    var letters =/^[0-9a-zA-Z]+$ /
    if(uadd.value.match(letters))
    {
      return true
    }
    else
    {
      alert('user address must have alphanumeric only')
      uadd.focus()
      uadd.style.border = '2px solid red'
      return false

    }
  }
  //this to handle email validation
  
  /*function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
  } */

  
}

