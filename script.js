// Открытие/закрытие модалки
function openModal(type) {
    document.getElementById('modal-' + type).style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeModal(type) {
    document.getElementById('modal-' + type).style.display = "none";
    document.body.style.overflow = "";
}

// FAQ раскрытие
function toggleFaq(btn) {
    const ans = btn.parentElement.querySelector('.faq-answer');
    const plus = btn.querySelector('span');
    if (ans.style.display === 'block') {
        ans.style.display = 'none';
        plus.textContent = '+';
    } else {
        ans.style.display = 'block';
        plus.textContent = '–';
    }
}

// Обработка формы
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form-criminal');
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
            form.querySelector('.success').style.display = 'block';
            setTimeout(() => {
                closeModal('criminal');
                form.reset();
                form.querySelector('.success').style.display = 'none';
                form.querySelectorAll('input, textarea, button').forEach(el => el.disabled = false);
            }, 1800);
        }
    }
    // Закрытие по клику вне окна
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('mousedown', e => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
});
