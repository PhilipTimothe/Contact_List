// Below code listens for the page to be loaded......
// document.addEventListener("DOMContentLoaded", function() { });

document.addEventListener("DOMContentLoaded", () => {

    let contacts = [
        {
            firstName: "Jill",
            lastName: "Smith",
            email: "JillSmith@gmail.com"
        },
        {
            firstName: "Alice",
            lastName: "Tory",
            email: "AliceTory@gmail.com"
        },
    ]

    const mainDiv = document.querySelector(".main_div")

// ............................................................Create Search and Sort Functionality

    function createSearchAndSort() {
        const form = document.createElement("form");
        form.className = "form-inline";
        form.innerHTML = `
        <div class="form-group">
            <button type="submit" class="btn search">
                <input type="text" class="form-control" id="exampleInputName2" placeholder="Search">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            </button>
        </div>

        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort By <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li><a href="#" class="text-center">A - Z</a></li>
                <li><a href="#" class="text-center">Z - A</a></li>
            </ul>
        </div> 
        `;

        mainDiv.append(form);

    }

    createSearchAndSort()

// ............................................................Create Table
    
    function createTable() {
        const table = document.createElement("table");
        table.className = "table table-hover";
        table.style = "width:60%;";

        

        const tableBody = document.createElement("tbody");
        tableBody.style = "text-align: center;";
        tableBody.id = "contacts_body"
        tableBody.innerHTML = `
            <tr>
                <th class="text-center">Firstname</th>
                <th class="text-center">Lastname</th> 
                <th class="text-center">Email</th>
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

// ............................................................Create Row Functionality

    function addRow(info) {
        const tableBody = document.getElementById("contacts_body")
        info.forEach((contact) => { 
            const row = document.createElement("tr")
            for (key in contact) {
                let td = document.createElement("td")
                td.classList.add(key)
                td.innerHTML = contact[key]
                row.append(td)
            }
            tableBody.append(row)
        })
    }

    addRow(contacts)

    // mainDiv.addEventListener("click", function() {
    //     const target = event.target
    //     if (target === event.currentTarget) {
    //         // do something here...
    //     }
    // })


});

