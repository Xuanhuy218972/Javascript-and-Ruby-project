document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userTable = document.getElementById("userTable");
    let tableData = [];

    RunApp();

    function RunApp() {
        loadTableData();
        userForm.addEventListener("submit", handleFormSubmit);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const name = nameInput.value.trim();

        if (!name) {
            alert("Please input name!");
            return;
        }

        addDataToTable(name);
        nameInput.value = "";
    }

    function addDataToTable(name) {
        const newRow = createTableRow(name);
        userTable.appendChild(newRow);
        saveTableData(name);
    }

    function createTableRow(name) {
        const newRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = name;

        const actionCell = document.createElement("td");
        const deleteButton = createDeleteButton(newRow, name);

        actionCell.appendChild(deleteButton);
        newRow.appendChild(nameCell);
        newRow.appendChild(actionCell);

        return newRow;
    }

    function createDeleteButton(row, name) {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.addEventListener("click", function () {
            userTable.removeChild(row);
            removeDataFromTable(name);
        });
        return deleteButton;
    }

    function saveTableData(name) {
        tableData.push(name);
        localStorage.setItem("userTableData", JSON.stringify(tableData));
    }

    function loadTableData() {
        const savedData = localStorage.getItem("userTableData");
        if (savedData) {
            tableData = JSON.parse(savedData);
            tableData.forEach(name => {
                const newRow = createTableRow(name);
                userTable.appendChild(newRow);
            });
        }
    }

    function removeDataFromTable(name) {
        tableData = tableData.filter(item => item !== name);
        localStorage.setItem("userTableData", JSON.stringify(tableData));
    }
});
