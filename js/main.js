// Получаем модальное окно
const orderDialog = document.getElementById('order-dialog');
// Все кнопки "Заказать"
const orderButtons = document.querySelectorAll('.product-card__button');
// Кнопка закрытия
const closeDialogButton = document.getElementById('close-order-dialog');
// Скрытое поле товара
const selectedProductInput = document.getElementById('selected-product');

// Клики по кнопкам "Заказать"
orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        selectedProductInput.value = productName;
        orderDialog.showModal();
    });
});

// Закрытие по кнопке "Закрыть"
closeDialogButton.addEventListener('click', () => {
    orderDialog.close();
});

// Обработка формы
const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Сброс ошибок
    const formElements = Array.from(orderForm.elements);
    formElements.forEach((element) => {
        if (element.willValidate) {
            element.removeAttribute('aria-invalid');
        }
    });

    // Проверка валидности
    if (!orderForm.checkValidity()) {
        formElements.forEach((element) => {
            if (element.willValidate && !element.checkValidity()) {
                element.setAttribute('aria-invalid', 'true');
            }
        });
        orderForm.reportValidity();
        return;
    }

    // Успех
    successMessage.hidden = false;
    orderForm.reset();
    orderDialog.close();
});
// Кнопка "Наверх" с position: fixed
const scrollTopButton = document.getElementById('scroll-top-button');

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});