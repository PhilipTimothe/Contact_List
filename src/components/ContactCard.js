class ContactCard {

    // Create a variable to capture the main div
    static mainDiv = document.querySelector(".main_div")

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
            address: "",
            contact_id: 1
        },
        {
            firstName: "Alice",
            lastName: "Tory",
            phoneNumber: "(709)294-4206",
            email: "AliceTory@gmail.com",
            address: "",
            contact_id: 2
        },
        {
            firstName: "Thomas",
            lastName: "Keeler",
            phoneNumber: "(684)892-1334",
            email: "ThomasKeeler@gmail.com",
            address: "",
            contact_id: 3
        },
        {
            firstName: "Bob",
            lastName: "Heller",
            phoneNumber: "(763)592-1204",
            email: "Hellisbob@gmail.com",
            address: "",
            contact_id: 4
        },
    ];


// ............................................................Create Search and Sort Elements

    // Create a function that will embed a search box and a sort list
    createSearchAndSort() {
        // Declare a constant for a form element creation
        const form = document.createElement("form");
        // Attach form node detail data
        form.className = "form-inline";
        form.style = "padding-bottom:5px"
        form.innerHTML = `
        <span class="glyphicon glyphicon-plus";
            aria-hidden="true"; 
            style="float:right; padding-right:10px; padding-top:5px;";>
        </span><br>
        
        <h1 align="center" style="margin-top:5px; margin-bottom:10px">Contact List</h1>
        <div class="form-group has-feedback">
            <i class="glyphicon glyphicon-search form-control-feedback"></i>
            <input type="text" name="contact" value="" class="form-control" id="exampleInputName2" placeholder="Search">
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

        // Append the form to the main div
        this.constructor.mainDiv.append(form);
        // this.createList();
    };


// ............................................................Create List
    
    // Create a function that will create a list node 
    createList() {
        // Declare list variable and create a list with it
        const list = document.createElement("list");
        list.className = "list-group";
        list.id = "contact_list";
        list.style = "overflow:auto;";
        this.constructor.mainDiv.append(list);

        // Create an alert variable and create the alert node
        const contactList = document.getElementById("contact_list");
        const noContactAlert = document.createElement("div");
        noContactAlert.className = "alert alert-info";
        noContactAlert.id = "no_contact_alert";
        noContactAlert.role = "alert";
        noContactAlert.style = "width:60%; display:none; margin-top:10px";
        noContactAlert.innerHTML = `
            No Contacts
        `;
        contactList.appendChild(noContactAlert);
        this.addListItem(this.constructor.contacts);

    };


// ............................................................Create List Item

    // Create a function that will create "a" nodes which will be appended to the ul element
    addListItem(info) {
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
        const form = document.querySelector(".form-inline")

        // Create a event listener that listens for an input and has a callback function
        form.addEventListener("input", function(event) {
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
        // Implement an edgecase that sorts contact objects by first name or by last name
        if (event.target.id === "First-Name") {
            // let firstNameSort = this.constructor.contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            this.constructor.contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            const list = document.getElementById("contact_list");
            list.remove();
            this.createList();
            // this.addListItem(firstNameSort)
        } else if (event.target.id === "Last-Name") {
            // let firstNameSort = this.constructor.contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
            this.constructor.contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
            const list = document.getElementById("contact_list");
            list.remove();
            this.createList();
            // this.addListItem(firstNameSort)
        };
    };


// ............................................................Contact Overview 

    attachContactOverviewListener() {
        // Create and click event listener with a callback function
        const list = document.querySelector("#contact_list")
        list.addEventListener("click", this.processOnClick);
    }; 
        
    processOnClick = (event) => {
        // Implement ...
        if (event.target.id === "contact_list_item") {
            for (let contact of this.constructor.contacts) {
                if (event.target.innerHTML === contact.firstName + " " + contact.lastName) {
                    console.log(contact)
                }
            }
        }
    };



}