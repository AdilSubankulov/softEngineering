function changeTextStyle(event) {
    const inputField = event.target;
    inputField.style.padding = '2%';
    inputField.style.fontfamily = 'Port Lligat Slab';
    inputField.style.color = '#494F57';
    inputField.style.fontWeight = '500';
}

document.getElementById("mainpage").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById("register").addEventListener("click", function() {
    window.location.href = "register.html";
});

document.getElementById("login").addEventListener("click", function() {
    window.location.href = "login.html";
});