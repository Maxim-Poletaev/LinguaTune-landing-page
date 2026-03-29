// Обработка двух форм
    function handleFormSubmit(event, emailValue) {
        event.preventDefault();
        if (emailValue && emailValue.includes('@')) {
            alert(`✨ Спасибо, ${emailValue}! Проверьте почту — мы отправили доступ к бесплатной песне.`);
            // В реальном проекте здесь отправка данных на бекенд / CRM / GetResponse и т.д.
            console.log(`[LinguaTune] Новый лид: ${emailValue}`);
            // Очистка формы
            event.target.reset();
        } else {
            alert('Пожалуйста, введите корректный email 😊');
        }
    }

    const form1 = document.getElementById('subscribeForm');
    const form2 = document.getElementById('subscribeForm2');

    if (form1) {
        form1.addEventListener('submit', function(e) {
            const email = document.getElementById('emailInput').value.trim();
            handleFormSubmit(e, email);
        });
    }
    if (form2) {
        form2.addEventListener('submit', function(e) {
            const email = document.getElementById('emailInput2').value.trim();
            handleFormSubmit(e, email);
        });
    }