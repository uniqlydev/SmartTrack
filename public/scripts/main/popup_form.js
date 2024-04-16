document.addEventListener('DOMContentLoaded', function() {
    const addFoodBtn = document.querySelector('.add-food');
    const popupForm = document.getElementById('popupForm');

    addFoodBtn.addEventListener('click', function() {
        popupForm.style.display = 'block';
    });

    function closeForm() {
        popupForm.style.display = 'none';
    }

});