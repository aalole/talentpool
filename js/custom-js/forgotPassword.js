const validateFormFields = () => {
  const validValuesObj = {
    text: {
      expected: () => /^[0-9]{1}$/,
      failureResponse:
        "OTP must be a digit",
    },
    number: {
      expected: () => /^[0-9]{1}$/,
      failureResponse: "OTP must be a digit",
    },
    email: {
      expected: () => /([A-z0-9.-_]+)@([A-z]+)\.([A-z]){2,5}$/,
      failureResponse: "is invalid. Must include @....com",
    },
    password: {
      expected: () => /[a-zA-Z0-9\w!@#$%^&*()_+|]{8,20}$/,
      failureResponse: "must be eight characters at least",
    },
    confirmPassword: {
      expected: () =>
        new RegExp(`^${document.querySelector("#password").value}$`),
      failureResponse: "must be equal to password",
    },
  };
  const formSubmitBtn = document.querySelector(".btn");

  function validate() {
    const valTypeStore = validValuesObj[this.dataset.valType || this.type];
    if (valTypeStore.expected().test(this.value)) {
      this.parentElement.children[1].textContent = "";
      formSubmitBtn.removeAttribute("disabled");
    } else {
      this.parentElement.children[1].textContent = `${this.placeholder} ${valTypeStore.failureResponse}`;
      formSubmitBtn.setAttribute("disabled", "disabled");
    }
  }

  // const fieldsToBeValidated = document.querySelectorAll('.create-account label input');
  const fieldsToBeValidated = document.querySelectorAll("input");
  console.log(fieldsToBeValidated);
  fieldsToBeValidated.forEach((element) => {
    const elementToDisplayError = document.querySelector(".error");
    elementToDisplayError.style.color = "red";

    element.addEventListener("keyup", validate, false);
  });
};

// load pages functions
const otpBtn = document.querySelector("#otpBtn");
const verifyOtpBtn = document.getElementById("verifyOtp")
const resetPassBtn = document.querySelector("#resendPassBtn");
const loginBtn = document.getElementById("loginBtn")
  const loadOtpPage = () =>{
    return window.location.assign("password-otp.html")
  }
  const loadPassResetPage = () =>{
    return window.location.assign("password-reset.html")
  }
  const loadSuccessPage = () =>{
    return window.location.assign("password-recovered.html")
  }
  const loadLoginPage = () => {
    return window.location.assign("home.html")
  }
  
const presentPageBody = document.querySelector("body");
if (
  presentPageBody.classList.contains("pass_page") ||
  presentPageBody.classList.contains("otp_page") || 
  presentPageBody.classList.contains("pass_reset-page")
) {
  validateFormFields(); 
}
if(presentPageBody.classList.contains("pass_page")){
  otpBtn.addEventListener("click", loadOtpPage, false)
}
if(presentPageBody.classList.contains("otp_page")){
  verifyOtpBtn.addEventListener("click",loadPassResetPage, false)
}
if(presentPageBody.classList.contains("pass_reset-page")){
  resendPassBtn.addEventListener("click",loadSuccessPage, false)
}
if(presentPageBody.classList.contains("success")){
  loginBtn.addEventListener("click",loadLoginPage, false)
}


