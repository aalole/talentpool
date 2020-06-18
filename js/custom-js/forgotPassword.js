const validateFormFields = () => {
  const validValuesObj = {
    text: {
      expected: () => /^[A-z]{2,20}$/,
      failureResponse:
        "must be two letters at least and must not contain digits",
    },
    number: {
      expected: () => /^[0-9]{6}$/,
      failureResponse: "OTP must be six digits",
    },
    email: {
      expected: () => /([A-z0-9.-_]+)@([A-z]+)\.([A-z]){2,5}$/,
      failureResponse: "is invalid",
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
      console.log(this.previousElementSibling)
      this.previousSibling.textContent = "";
      formSubmitBtn.removeAttribute("disabled");
    } else {
      this.previousSibling.textContent = `${this.placeholder} ${valTypeStore.failureResponse}`;
      formSubmitBtn.setAttribute("disabled", "disabled");
    }
  }

  // const fieldsToBeValidated = document.querySelectorAll('.create-account label input');
  const fieldsToBeValidated = document.querySelectorAll("input");
  console.log(fieldsToBeValidated);
  fieldsToBeValidated.forEach((element) => {
    const elementToDisplayError = document.querySelector(".email-error");
    elementToDisplayError.classList.add("error");
    element.addEventListener("keyup", validate, false);
  });
};
const presentPageBody = document.querySelector("body");
if (
  presentPageBody.classList.contains("pass_page") ||
  presentPageBody.classList.contains("otp_page")
) {
  validateFormFields();
}

// validateFormFields();

// const presentPageBody = document.querySelector('body')

//   const otpBtn = document.querySelector("#otpBtn");
//   console.log(otpBtn)
//   const resetPassBtn = document.querySelector("#resendPassBtn");

//   const verifyOtp = document.getElementById("verifyOtp");
//   const loginBtn = document.getElementById("login");

//   const loadOtpPage = () =>{
//     return window.location.assign("password-otp.html")
//   }
//   const loadPassResetPage = () =>{
//     return window.location.assign("password-reset.html")
//   }
//   const loadSuccessPage = () =>{
//     return window.location.assign("password-recovered.html")
//   }

//   if(presentPageBody.classList.contains('pass_page')){
//     otpBtn.addEventListener("click", loadOtpPage, false);
//   }else if(presentPageBody.classList.contains('otp_page')){
//     resetPassBtn.addEventListener("click", loadPassResetPage, false)
//   }
