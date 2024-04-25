let $ = document

let isLogin = false
let loginForm = $.querySelector("#login")
let titleElem = $.querySelector("title")
let password = $.getElementsByClassName("password")
let eyeIcon = $.querySelector("i.fa-eye")


window.addEventListener("load", () => {
    if (isLogin === true) {
        
        loginForm.innerHTML = ""
        loginForm.innerHTML = `<p> : نام کاربری را وارد کنید </p>
        <input type="text">
        <br>
        <p> : پسورد خود را وارد کنید </p>
        <input class="password" type="password">
        <i class="fa fa-eye"></i>
        <br><br>
        <input value="ورود" type="submit">`
        titleElem.innerHTML = " login Form | فرم لاگین "

    } else {
        loginForm.innerHTML = ""
        loginForm.innerHTML = `
        <p> نام کاربری : </p>
        <input type="text">
        <p> شماره تلفن همراه : </p>
        <input type="tel">
        <p> رمز عبور : </p>
        <input class="password" type="password">
        <i class="fa fa-eye"></i>
        <p> تکرار رمز عبور : </p>
        <input class="password" type="password">
        <br><br>
        <button class="submit" value="ثبت نام" type="submit"> ثبت نام | sign up </button>
      `
      titleElem.innerHTML = " sign up form | فرم ثبت نام"
    }
    console.log(password)
    eyeIcon.addEventListener("click", () => {
        console.log("hi")
        if (eyeIcon.className === "fa-eye") {
            eyeIcon.className = "fa fa-eye-slash"
            password.setAttribute("type", "text")
        }
    })
})