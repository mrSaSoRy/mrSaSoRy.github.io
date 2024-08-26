document.getElementById("consultation").addEventListener("click", function() {
    document.getElementById("consultation-form").style.display = "block";
});

document.getElementById("submit-consultation").addEventListener("click", function() {
    let theme = document.getElementById("theme").value;
    let datetime = document.getElementById("datetime").value;

    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.sendData(${theme};${datetime});
    } else {
        console.error("Telegram Web App не доступен.");
    }
});
