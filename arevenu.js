const Userinput = document.querySelectorAll('.userinput');


//TODO: For Add Expenditure page

document.addEventListener("DOMContentLoaded", function () {
    const boutValider2 = document.getElementById('boutvalider2');
    const titleInput = document.getElementById('title');
    const amountInput = document.getElementById('amount');

    boutValider2.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire

        // Retrieves values from input fields
        const title = titleInput.value.trim();
        const amount = amountInput.value.trim();

        // Check if the input value are void
        if (title === '' || amount === '') {
            alert('Veuillez remplir tous les champs !');
            return;
        }

        // Retrieves the  existing expenditure or create a void table
        let expenses = JSON.parse(localStorage.getItem('charges')) || [];

        // Add a new load
        expenses.push({ title, amount });

        // Save the expenditure update in the localStorage
        localStorage.setItem('charges', JSON.stringify(expenses));

        // Empty field after the user submit the form
        titleInput.value = '';
        amountInput.value = '';

        // ALert to confirm the addition
        alert('Charge ajoutée !');

        // Redirects to the page index.html to view charges
        window.location.href = 'index.html';
    });
});
