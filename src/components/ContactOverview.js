class ContactOverview {

    constructor(){

    }

// ............................................................Contact Overview 
        
    static findContact(contacts) {
        const mainDiv = document.querySelector(".main_div")
        // Implement ...
        for (let contact of contacts) {
            if (event.target.innerHTML === contact.firstName + " " + contact.lastName) {
                console.log(contact)
                
                // Declare a constant for a form element creation
                const contactCard = document.createElement("div");
                // Attach contactCard node detail data
                contactCard.className = "card";
                contactCard.style = ""
                contactCard.innerHTML =`
                    <div style="display: inline-block; width:100%;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"
                            style="float:left; padding-left:10px; padding-top:5px;">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </div>
                    <br />
                    <br />

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2
                             2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div>

                    <div class="card-body" style="margin-top:5px; margin-bottom:10px; border-bottom: 1px solid; border-color: #d3d3d3">
                        <h3 class="card-title">${contact.firstName + " " + contact.lastName}</h3>
                    </div>
                    <div class="card-body" style="margin-top:5px; margin-bottom:10px; border-bottom: 1px solid; border-color: #d3d3d3">
                        <p>Phone Number</p>
                        <h5>${contact.phoneNumber}</h5>
                    </div>
                    <div class="card-body" style="margin-top:5px; margin-bottom:10px; border-bottom: 1px solid; border-color: #d3d3d3">
                        <p>Email</p>
                        <h5>${contact.email}</h5>
                    </div>
                    <div class="card-body" style="margin-top:5px; margin-bottom:10px; border-bottom: 1px solid; border-color: #d3d3d3">
                        <p>Address</p>
                        <h5>${contact.address}</h5>
                    </div>
                    `
                mainDiv.append(contactCard);
            }
        }
    };



}