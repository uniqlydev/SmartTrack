document.addEventListener('DOMContentLoaded', function() {
    const addFoodBtn = document.querySelector('.add-food');
    const popupForm = document.getElementById('popupForm');
    const close = document.getElementById('close');
    const submit = document.getElementById('submit');

    addFoodBtn.addEventListener('click', function() {
        popupForm.style.display = 'block';
    });

    close.addEventListener('click', function() {
        popupForm.style.display = 'none';
    });

    submit.addEventListener('click', function() {
        // Get the values from the form
        const food = document.getElementById('food').value;
        const category = document.getElementById('category').value;
        const calories = document.getElementById('calories').value;
        const date = new Date()

        // Format date as YYYY-MM-DD
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

        // fetch request to /api/add
        fetch('/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: food,
                category: category,
                calories: calories,
                date: formattedDate
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Food added successfully');
                location.reload();
            }else {
                alert('Error adding food');
                location.reload();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });


    });



});