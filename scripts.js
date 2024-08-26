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

// Собираем данные и отправляем их боту при нажатии на отправку формы
document.getElementById('consultation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const theme = document.getElementById('theme').value;
    const datetime = document.getElementById('datetime').value;
    const data = {
        theme: theme,
        datetime: datetime,
        chat_id: 231952028
    };
    
    fetch('http://109.126.5.210:5000/consultation', { // Замените YOUR_SERVER_URL на ваш сервер
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Консультация отправлена');
    });
});

function toggleForm(formId) {
    document.querySelectorAll('.form').forEach(function(form) {
        form.style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';
}
