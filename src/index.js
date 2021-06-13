// Below code listens for the page to be loaded......
// document.addEventListener("DOMContentLoaded", function() { });

document.addEventListener("DOMContentLoaded", () => {


// ............................................................Contact Object Array   

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
        {
            firstName: "Thomas",
            lastName: "Keeler",
            email: "ThomasKeeler@gmail.com"
        },
        {
            firstName: "Bob",
            lastName: "Heller",
            email: "Hellisbob@gmail.com"
        },
    ]

    const mainDiv = document.querySelector(".main_div")


// ............................................................Create Search and Sort Functionality

    function createSearchAndSort() {
        const form = document.createElement("form");
        form.className = "form-inline";
        form.innerHTML = `
        <div class="form-group">
            <input type="text" name="contact" value="" class="form-control" id="exampleInputName2" placeholder="Search">
            <button type="submit" id="btn search" class="btn search">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            </button>
        </div>

        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort By <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li><a href="#" id="First-Name" class="First-Name">First Name</a></li>
                <li><a href="#" id="Last-Name" class="Last-Name">Last Name</a></li>
            </ul>
        </div> 
        `;

        mainDiv.append(form);

    }

    createSearchAndSort()

// ............................................................Search Functionality 

    const form = document.querySelector(".form-inline")

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(event.target.contact.value)
    })
    

// ............................................................Sort Functionality

    mainDiv.addEventListener("click", function(event) {
        // console.log(event.target)
        if (event.target.id === "First-Name") {
            let firstNameSort = contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1) ;
            const table = document.getElementById("contact_table")
            table.remove()
            createTable()
            addRow(firstNameSort)
        } else if (event.target.id === "Last-Name") {
            let firstNameSort = contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1) ;
            const table = document.getElementById("contact_table")
            table.remove()
            createTable()
            addRow(firstNameSort)
        }
    })


// ............................................................Create Table
    
    function createTable() {
        const table = document.createElement("table");
        table.className = "table table-hover";
        table.id = "contact_table"
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

        // const addButton = document.createElement('button');
        // addButton.className = "btn btn-default";
        // addButton.type = "submit";
        // addButton.innerHTML = "Add Contact";

        table.append(tableBody);
        mainDiv.append(table);
        // mainDiv.append(addButton);
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


});

