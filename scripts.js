const bouttonPLus = document.querySelectorAll(".button");
const Input = document.querySelectorAll('.input');
const bouttonAjout = document.querySelectorAll('.buttonajout');






// TODO: Create user delete button 
bouttonPLus.forEach(button => {
    button.addEventListener('click', function(){
        const confirmation = confirm("Est-ce que vous voulez supprimer ?");
            if (confirmation) {
                alert("Élément supprimé !");
                // TODO: Delete all case if the user want it
                const caseInput = button.closest('.input')
                caseInput.remove()
            }
        
    })
});






document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.querySelector("#tbody");

    if (!tbody) {
        console.error("Le tableau des dépenses est introuvable !");
        return;
    }

    // Pick up charges from localStorage
    let expenses = JSON.parse(localStorage.getItem('charges')) || [];
    const lastRow = tbody.lastElementChild;

    // Views all the expenditure in the table
    expenses.forEach((expense, index) => {
        const row = document.createElement("tr");
        row.classList.add("input");

        row.innerHTML = `
            <td class="border border-gray-300 py-2 pl-4">${expense.title}</td>
            <td class="border border-gray-300 py-2 pl-4">${expense.amount}</td>
            <td class="border border-gray-300 py-2 pl-4">
                <button class="button bg-red-500 text-white p-1 rounded-md border-2 border-solid" data-index="${index}">
                    Supprimer
                </button>
            </td>
        `;

        tbody.insertBefore(row, lastRow);    });

    // Add the deletion features
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            let expenses = JSON.parse(localStorage.getItem('charges')) || [];

            // Delete the element  at the given index
            const confirmation = confirm("Est-ce que vous voulez supprimer ?");
            if (confirmation) {
                alert("Élément supprimé !");
                // TODO: Delete all case if the user want it
                const caseInput = button.closest('.input')
                caseInput.remove()
            }
            expenses.splice(index, 1);
            localStorage.setItem('charges', JSON.stringify(expenses));

            // To cool the page for update the view 
            location.reload();
        });
    });
});





