let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("datetime");

document.getElementById('consultation').addEventListener('click', function() {
    toggleForm('consultation-form');
});

document.getElementById('services').addEventListener('click', function() {
    toggleForm('services-list');
});

document.getElementById('order-status').addEventListener('click', function() {
    toggleForm('order-status-view');
});

document.getElementById('extra-options').addEventListener('click', function() {
    alert('Доп. Опции пока не реализованы');
});

function toggleForm(formId) {
    document.querySelectorAll('.form').forEach(function(form) {
        form.style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';
}


btn1.addEventListener("change", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Оставить заявку");
		item = "1";
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
