// ............................................................Create Table
    
    // function createTable() {
    //     const table = document.createElement("table");
    //     table.className = "table table-hover";
    //     table.id = "contact_table"
    //     table.style = "overflow:auto;";

        

    //     const tableBody = document.createElement("tbody");
    //     tableBody.style = "text-align: center;";
    //     tableBody.id = "contacts_body"
    //     tableBody.innerHTML = `
    //         <tr>
    //             <th class="text-center">Firstname</th>
    //             <th class="text-center">Lastname</th> 
    //             <th class="text-center">Email</th>
    //         </tr>
    //     `;

    //     // const addButton = document.createElement('button');
    //     // addButton.className = "btn btn-default";
    //     // addButton.type = "submit";
    //     // addButton.innerHTML = "Add Contact";

    //     table.append(tableBody);
    //     mainDiv.append(table);
    //     // mainDiv.append(addButton);
    // }

    // createTable()

    // ............................................................Create Row Functionality

    // function addRow(info) {
    //     const tableBody = document.getElementById("contacts_body")
    //     info.forEach((contact) => { 
    //         const row = document.createElement("tr")
    //         for (key in contact) {
    //             let td = document.createElement("td")
    //             td.classList.add(key)
    //             td.innerHTML = contact[key]
    //             row.appendChild(td)
    //         }
    //         tableBody.appendChild(row)
    //     })
    // }

    // addRow(contacts)

    // ............................................................Sort Functionality

    // mainDiv.addEventListener("click", function(event) {
    //     // console.log(event.target)
    //     if (event.target.id === "First-Name") {
    //         let firstNameSort = contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
    //         const table = document.getElementById("contact_table")
    //         table.remove()
    //         createTable()
    //         addRow(firstNameSort)
    //     } else if (event.target.id === "Last-Name") {
    //         let firstNameSort = contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1) ;
    //         const table = document.getElementById("contact_table")
    //         table.remove()
    //         createTable()
    //         addRow(firstNameSort)
    //     }
    // })

    // ............................................................Search Functionality 

    const form = document.querySelector(".form-inline")

    form.addEventListener("input", function(event) {
        event.preventDefault();
        // console.log([`${event.target.value.toLowerCase()}`])

        // // let searchedName = contacts.filter(contact => contact.firstName.toLowerCase() === event.target.value.toLowerCase());
        // // build on edgecase with a condition that filters for both last and first name and values equally each other
        // let searchedName = contacts.filter(contact => 
        //     contact.firstName.toLowerCase().includes(`${event.target.value.toLowerCase()}`) || 
        //     contact.lastName.toLowerCase().includes(`${event.target.value.toLowerCase()}`)
        //     );
        // // console.log(searchedName)
        // if (event.target.value === "") {
        //     const table = document.getElementById("contact_table")
        //     const contactAlert = document.getElementById("no_contact_alert");
        //     if (table) table.remove()
        //     if (contactAlert) contactAlert.remove()

        //     createTable()
        //     addRow(contacts)
        // } else if (searchedName[0]) {
        //     const table = document.getElementById("contact_table")
        //     const contactAlert = document.getElementById("no_contact_alert");
        //     if (table) table.remove()
        //     if (contactAlert) contactAlert.remove()
            
        //     createTable()
        //     addRow(searchedName)
        // } else if (!event.target.value === "" && !searchedName[0]) {
        //     const table = document.getElementById("contact_table")
        //     if (table) table.remove()

        //     const noContactAlert = document.createElement("div");
        //     noContactAlert.className = "alert alert-info";
        //     noContactAlert.id = "no_contact_alert"
        //     noContactAlert.role = "alert"
        //     noContactAlert.style = "width:60%;";
        //     noContactAlert.innerHTML = `
        //         No Contacts
        //     `
            
        //     const contactAlert = document.getElementById("no_contact_alert");
        //     if (contactAlert) contactAlert.remove()
        //     mainDiv.append(noContactAlert);
        //     // createTable()
        // }
    })
    
