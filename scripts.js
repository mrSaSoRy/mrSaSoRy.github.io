let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

document.getElementById('consultation').addEventListener('click', function() {
    toggleForm('consultation-form');
    tg.MainButton.setText("Оставить заявку на консультацию");
    item = "consultation";
    tg.MainButton.show();
});

document.getElementById('services').addEventListener('click', function() {
    toggleForm('services-list');
    tg.MainButton.setText("Оставить заявку на услугу");
    item = "services";
    tg.MainButton.show();
});

document.getElementById('order-status').addEventListener('click', function() {
    toggleForm('order-status-view');
    tg.MainButton.hide();
    item = "order-status";
    tg.sendData(item); // сразу отправляем данные, так как нет формы для заполнения
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


Telegram.WebApp.onEvent("mainButtonClicked", function() {
    let data = "";
    
    if (item === "consultation") {
        let theme = document.getElementById('theme').value;
        let datetime = document.getElementById('datetime').value;
        data = JSON.stringify({ type: item, theme: theme, datetime: datetime });
    } else if (item === "services") {
        let service = document.getElementById('service-select').value;
        let serviceDate = document.getElementById('service-date').value;
        let budget = document.getElementById('budget').value;
        data = JSON.stringify({ type: item, service: service, serviceDate: serviceDate, budget: budget });
    }

    tg.sendData(data);
});
