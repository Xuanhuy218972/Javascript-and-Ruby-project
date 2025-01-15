document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userTable = document.getElementById("userTable");

    loadTableData();
 
    userForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        addDataToTable();
    });

    function addDataToTable() {
        const nameInput = document.getElementById("name");
        const name = nameInput.value.trim();

        if (name === "") {
            alert("Please input name!");
            return;
        }

        const newRow = createTableRow(name);
        userTable.appendChild(newRow);

        saveTableData();

        nameInput.value = "";
    }

    function createTableRow(name) {
        const newRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = name;

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            userTable.removeChild(newRow);
            saveTableData();
        });

        actionCell.appendChild(deleteButton);
        newRow.appendChild(nameCell);
        newRow.appendChild(actionCell);

        return newRow;
    }

    function saveTableData() {
        const tableData = [];
        const rows = userTable.querySelectorAll("tr");

        rows.forEach((row) => {
            const name = row.querySelector("td").textContent;
            tableData.push(name);
        });

        localStorage.setItem("userTableData", JSON.stringify(tableData));
    }

    function loadTableData() {
        const savedData = localStorage.getItem("userTableData");

        if (savedData) {
            const tableData = JSON.parse(savedData);

            tableData.forEach((name) => {
                const newRow = createTableRow(name);
                userTable.appendChild(newRow);
            });
        }
    }
});
