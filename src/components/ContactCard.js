class ContactCard {

    // Create a variable to capture the main div
    static mainDiv = document.querySelector("#main_div")

    constructor() {
        // this.contacts = contacts;
        this.createSearchAndSort();
        this.createList();
        // this.addListItem();
        this.contactSearch();
        this.attachSortListener();
    }


// ............................................................Contact Object Array   

    // Create an array of contacts objects
    static contacts = [
        {
            firstName: "Jill",
            lastName: "Smith",
            phoneNumber: "(454)402-1352",
            email: "JillSmith@gmail.com",
            address: "W 69th St, New York, NY 10133",
            contact_id: 1
        },
        {
            firstName: "Alice",
            lastName: "Tory",
            phoneNumber: "(709)294-4206",
            email: "AliceTory@gmail.com",
            address: "1828 Columbia Rd NW, Washington, DC 20009",
            contact_id: 2
        },
        {
            firstName: "Thomas",
            lastName: "Keeler",
            phoneNumber: "(684)892-1334",
            email: "ThomasKeeler@gmail.com",
            address: "2004 US-70S, Nashville, TN 37203",
            contact_id: 3
        },
        {
            firstName: "Bob",
            lastName: "Heller",
            phoneNumber: "(763)592-1204",
            email: "Hellisbob@gmail.com",
            address: "117 Pine St, Seattle, WA 98101",
            contact_id: 4
        },
        {
            firstName: "Laura",
            lastName: "Ashley",
            phoneNumber: "(673)242-0234",
            email: "Lauraashely@gmail.com",
            address: "5233 Kept St, Palm Beach, FL 62201",
            contact_id: 5
        },
    ];


// ............................................................Create Search and Sort Elements

    // Create a function that will embed a search box and a sort list
    createSearchAndSort() {
        // Declare a constant for a form element creation
        const form = document.createElement("div");
        // Attach form node detail data
        form.className = "container-fluid";
        form.style = "padding-bottom:5px"
        form.id = "card_form"
        form.innerHTML = `
            <div class="row">
                <div class="col-sm-12">
                    <svg xmlns="http://www.w3.org/2000/svg" id="add_contact_svg" width="48" height="48" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16" 
                    style="float:right; padding-right:10px; padding-top:5px;">
                        <path id="add_contact_path" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
            </div>
            <div class="row" style="display: inline-block; width:100%;">
                <div class="col-sm-12">
                    <h1 align="center" style="margin-top:5px; margin-bottom:10px">Contact List</h1>
                </div>
            </div>
            <div class="row justify-content-center"> 
                <div class="col-sm-6" style="padding:10px">
                    <i class="bi bi-search"></i>
                    <input type="text" name="contact" value="" class="form-control" id="search_input" placeholder="Search">
                </div>
                <div class="col-sm-6" style="padding:10px">
                    <button style="width:100%; border: 1px solid #ced4da;" type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort By <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#" id="First-Name" class="dropdown-item">First Name</a></li>
                        <li><a href="#" id="Last-Name" class="dropdown-item">Last Name</a></li>
                    </ul>
                </div> 
            </div>    
            `;

        // Append the form to the main div
        this.constructor.mainDiv.append(form);
        // this.createList();
    };


// ............................................................Create List
    
    // Create a function that will create a list node 
    createList() {
        // Declare list variable and create a list with it
        const listDiv = document.createElement("div");
        listDiv.id = "list_div"
        listDiv.className = "container-fluid"
        const listRow = document.createElement("div");
        listRow.className = "row"
        const listCol = document.createElement("div");
        listCol.className = "col-sm-12"

        const list = document.createElement("list");
        list.className = "list-group";
        list.id = "contact_list";
        list.style = "overflow:auto;";
        listCol.append(list)
        listRow.append(listCol)
        listDiv.append(listRow)
        this.constructor.mainDiv.append(listDiv);

        // Create an alert variable and create the alert node
        const contactList = document.getElementById("contact_list");
        const alertRow = document.createElement("div");
        alertRow.className = "row"
        const alertCol = document.createElement("div");
        alertCol.className = "col-sm-12"
        alertCol.innerHTML = `
            <div class="alert alert-info" id="no_contact_alert" role="alert" style="display:none">
                No Contacts
            </div>
        `;
        alertRow.append(alertCol);
        contactList.appendChild(alertRow);
        this.constructor.addListItem(this.constructor.contacts);

    };


// ............................................................Create List Item

    // Create a function that will create "a" nodes which will be appended to the ul element
    static addListItem(info) {
        // Declare a constant variable to grab an element
        const list = document.getElementById("contact_list");
        // Loop through contact array objects and create each ul object
        info.forEach((contact) => { 
            const linkedItem = document.createElement("a");
            
            linkedItem.className = "list-group-item";
            linkedItem.id = "contact_list_item";
            linkedItem.innerHTML = contact.firstName + " " + contact.lastName;
            linkedItem.style = "margin-top:5px; margin-bottom:10px"

            // Append new linked items to the ul node
            list.appendChild(linkedItem);
        });
    };


// ............................................................Search Functionality 

    contactSearch() {
        // Declare a constant variable that selects the search form
        const searchInput = document.getElementById("search_input")

        // Create a event listener that listens for an input and has a callback function
        searchInput.addEventListener("input", function(event) {
            event.preventDefault();
        
        // Declare variables
            var input, ul, a, i, txtValue;
            let array = [];
            let display, alert;
            input = event.target.value.toUpperCase();
            ul = document.getElementById("contact_list");
            a = ul.querySelectorAll("a");

            // Loop through objects and create and edgecase that either displays objects based on input or doesn't
            for (i = 0; i < a.length; i++) {
                txtValue = a[i].textContent || a[i].innerText;
                if (txtValue.toUpperCase().indexOf(input) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }

                array.push(a[i])
            }

            // Assign variables display and alert so it can be incorporated into an edgecase
            display = (currentValue) => currentValue.style.display === "none";
            alert = document.getElementById("no_contact_alert");
            // Create and edgecase to either display alert or not based on contacts in ul body
            if (array.every(display)) {
                alert.style.display = ""
            } else {
                alert.style.display = "none"
            }
        });
    };
    

// ............................................................Sort Functionality

    attachSortListener() {
        // Create and click event listener with a callback function
        this.constructor.mainDiv.addEventListener("click", this.processOnClick);
    };
        
    processOnClick = (event) => {
        const form = document.getElementById("card_form");
        const listDiv = document.getElementById("list_div")
        // Implement an edgecase that sorts contact objects by first name or by last name
        if (event.target.id === "First-Name") {
            // let firstNameSort = this.constructor.contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            this.constructor.contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            listDiv.remove();
            this.createList();
            // this.addListItem(firstNameSort)
        } else if (event.target.id === "Last-Name") {
            // let firstNameSort = this.constructor.contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
            this.constructor.contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
            listDiv.remove();
            this.createList();
            // this.addListItem(firstNameSort)
        } else if (event.target.id === "contact_list_item") {
            form.style.display = "none"
            listDiv.style.display = "none"
            ContactOverview.findContact(this.constructor.contacts)
        } else if (event.target.id === "return_arrow" || event.target.id === "return_arrow_svg") {
            const card = document.getElementById("contact_card");
            card.remove();
            form.style.display = ""
            listDiv.style.display = ""
        } else if (event.target.id === "add_contact_svg" || event.target.id === "add_contact_path") {
            form.style.display = "none"
            listDiv.style.display = "none"
            new AddContact();
        } else if (event.target.id === "add_contact_cancel_bttn") {
            const addContactDiv = document.getElementById("add_contact_div")
            addContactDiv.remove();
            form.style.display = ""
            listDiv.style.display = ""
        } 
    };


}