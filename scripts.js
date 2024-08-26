// scripts.js
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
