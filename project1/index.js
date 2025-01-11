document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userTable = document.getElementById("userTable"); 

    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const name = nameInput.value.trim();
  
        if (name === "") {
            alert("Please enter a name!");
            return;
        }
   
        const newRow = document.createElement("tr");
        const nameCell = document.createElement("td"); 
        nameCell.textContent = name; 
        newRow.appendChild(nameCell); 

        const actionCell = document.createElement("td"); 
        const deleteButton = document.createElement("button"); 
        deleteButton.textContent = "Delete"; 
        deleteButton.addEventListener("click", 
            function () {
            userTable.removeChild(newRow); 
        });

        actionCell.appendChild(deleteButton);
        newRow.appendChild(actionCell); 

        userTable.appendChild(newRow);

        nameInput.value = "";
    });
});
