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
        form.style = "padding-bottom:5px"
        form.innerHTML = `
        <div class="form-group">
            <input type="text" name="contact" value="" class="form-control" id="exampleInputName2" placeholder="Search By First Name">
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
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

    form.addEventListener("input", function(event) {
        event.preventDefault();
       
       // Declare variables
        var input, ul, a, i, txtValue;
        let array = [];
        input = event.target.value.toUpperCase();
        ul = document.getElementById("contact_list");
        a = ul.querySelectorAll("a");

        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }

            array.push(a[i])
        }
        const display = (currentValue) => currentValue.style.display === "none";
        const alert = document.getElementById("no_contact_alert");
        if (array.every(display)) {
            alert.style.display = ""
        } else {
            alert.style.display = "none"
        }
    })
    

// ............................................................Sort Functionality

    mainDiv.addEventListener("click", function(event) {
        if (event.target.id === "First-Name") {
            let firstNameSort = contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            const list = document.getElementById("contact_list");
            list.remove()
            createList()
            addlistItem(firstNameSort)
        } else if (event.target.id === "Last-Name") {
            let firstNameSort = contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1) ;
            const list = document.getElementById("contact_list");
            list.remove()
            createList()
            addlistItem(firstNameSort)
        }
    })


// ............................................................Create List
    
    function createList() {
        const list = document.createElement("list");
        list.className = "list-group";
        list.id = "contact_list"
        list.style = "overflow:auto;";
        mainDiv.append(list);

        const contactList = document.getElementById("contact_list");
        const noContactAlert = document.createElement("div");
        noContactAlert.className = "alert alert-info";
        noContactAlert.id = "no_contact_alert"
        noContactAlert.role = "alert"
        noContactAlert.style = "width:60%; display:none; margin-top:10px";
        noContactAlert.innerHTML = `
            No Contacts
        `
        contactList.appendChild(noContactAlert);

    }

    createList()


// ............................................................Create List Item

    function addlistItem(info) {
        const list = document.getElementById("contact_list");
        info.forEach((contact) => { 
            const linkedItem = document.createElement("a");
            
            linkedItem.className = "list-group-item";
            linkedItem.id = "contact_list_item";
            linkedItem.innerHTML = contact.firstName + " " + contact.lastName;
            linkedItem.style = "margin-top:5px; margin-bottom:10px"

            list.appendChild(linkedItem);
        })
    }

    addlistItem(contacts)


});

