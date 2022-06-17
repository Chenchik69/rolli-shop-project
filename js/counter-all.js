// Отслеживает любые клики на ВСЕМ окне!

window.addEventListener('click', function() {

    // Объявляем переменную для счетчика
    let counter;

    // Проверяем клик строго по кнопке ПЛЮС либо МИНУС
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обертку/родителя счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим div с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }

    // Проверяем является ли элемент по которому был совершен клик ктопкой ПЛЮС
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент по которому был совершен клик ктопкой МИНУС
    if (event.target.dataset.action === 'minus') {
        if( parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
    // Проверка на товар который находится в корзине и удаление его из корзины
        } else if (event.target.closest('.cart-wrapper') && this.parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove();

            // Отображения статуса корзины Пустая/Полная
            toggleCartStatus();
            // Пересчет общей стоимости заказа
            calcCartPriceAndDelivery();
        }
    }

    // Проверяем на клик + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Пересчет общей стоимости заказа
        calcCartPriceAndDelivery();
    }
    
});