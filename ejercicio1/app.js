document.addEventListener('DOMContentLoaded', function() {

    const changeCardInput = document.getElementById('changeCard');
    const header = document.querySelector('.card header');
    const footer = document.querySelector('.card footer');
    
    changeCardInput.addEventListener('input', function() {
        const selectedColor = changeCardInput.value;
        header.style.backgroundColor = selectedColor;
        footer.style.backgroundColor = selectedColor;
        });
    });
