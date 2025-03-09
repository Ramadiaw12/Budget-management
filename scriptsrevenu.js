
document.addEventListener("DOMContentLoaded", function () {
    const tbody2 = document.querySelector("#tbody2");

    if (!tbody2) {
        console.error("Le tableau des revenus est introuvable !");
        return;
    }

    // Pick up charges from localStorage
    let revenus = expenses.filter(expense => expense.type === "revenu");
    let expenses = JSON.parse(localStorage.getItem('charges')) || [];

    const lastRow = tbody2.lastElementChild;


    // Views all the expenditure in the table
    revenus.forEach((expense, index) =>  {
        const row = document.createElement("tr");
        row.classList.add("input");

        row.innerHTML = `
            <td class="border border-gray-300 py-2 pl-4">${expense.title}</td>
            <td class="border border-gray-300 py-2 pl-4">${expense.amount}</td>
            <td class="border border-gray-300 py-2 pl-4">
                <button class="delete-revenue bg-red-500 text-white p-1 rounded-md border-2 border-solid" data-index="${index}">
                    Supprimer
                </button>
            </td>
        `;
        tbody2.insertBefore(row, lastRow);    
    })

    

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-revenue")) {
            const realindex = event.target.getAttribute("data-index");
            let expenses = JSON.parse(localStorage.getItem('charges')) || [];

            if (confirm("Voulez-vous supprimer ce revenu ?")) {
                expenses.splice(realindex, 1);
                localStorage.setItem('charges', JSON.stringify(expenses));
                location.reload();
            }
        }
    });
});
