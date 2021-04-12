// Below code listens for the page to be loaded......
// document.addEventListener("DOMContentLoaded", function() { });

document.addEventListener("DOMContentLoaded", () => {


    const mainDiv = document.querySelector(".main_div")
    
    function createTable() {
        const table = document.createElement("table");
        table.className = "table table-hover";
        table.style = "width:60%;";

        const tableBody = document.createElement("tbody");
        tableBody.style = "text-align: center;";
        tableBody.innerHTML = `
            <tr>
                <th class="text-center">Firstname</th>
                <th class="text-center">Lastname</th> 
                <th class="text-center">Email</th>
            </tr>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>JillSmith@gmail.com</td>
            </tr>
        `;

        const addButton = document.createElement('button');
        addButton.className = "btn btn-default";
        addButton.type = "submit";
        addButton.innerHTML = "Add Contact";

        table.append(tableBody);
        mainDiv.append(table);
        mainDiv.append(addButton);
    }

    createTable()

    // mainDiv.addEventListener("click", function() {
    //     const target = event.target
    //     if (target === event.currentTarget) {
    //         // do something here...
    //     }
    // })


});

