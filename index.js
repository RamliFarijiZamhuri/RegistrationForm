let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let password = document.getElementById("new-password")
let profile = document.getElementById("profile-picture")
let age = document.getElementById("age")
let referrer = document.getElementById("referrer")



function save() {
    if (firstName == "" || lastName == "") {
        alert("your account not complited")
    } else {
        alert("your account is complited")
    }
}