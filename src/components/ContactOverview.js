class ContactOverview {

    constructor(){
    }

// ............................................................Contact Overview 
        
    static findContact(contacts) {
        const mainDiv = document.querySelector("#main_div")
        // Implement ...
        for (let contact of contacts) {
            if (event.target.innerHTML === contact.firstName + " " + contact.lastName) {
                // Declare a constant for a form element creation
                const contactCard = document.createElement("div");
                contactCard.className = "container-fluid"
                const contactCardRow = document.createElement("div");
                contactCardRow.className = "row"
                const contactCardCol = document.createElement("div");
                // Attach contactCard node detail data
                contactCardCol.className = "col-12";
                contactCardCol.id = ""
                contactCardCol.innerHTML =`
                    <div class="card" id="contact_card">
                        <div style="display: inline-block; width:100%;" id="return_arrow">
                            <svg id="return_arrow_svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"
                                style="float:left; padding-left:10px; padding-top:5px;">
                                <path id="return_arrow" fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </div>

                        <div style="margin-top:5px; margin-bottom:10px;">
                            <img id="cover_photo" src="https://images.squarespace-cdn.com/content/v1/599d758e6f4ca395507985c5/1581296914398-0JMDW9080JOUT7LA0CO2/March+20-21.JPG?format=1500w" alt="" />
                        </div>
                        
                        <div id="contact_card_details">
                        <div class="card-body" style="padding: 0; margin-top:5px; margin-bottom:10px; border-bottom: 1px solid; border-color: #d3d3d3">
                            <h4 class="card-title">${contact.firstName + " " + contact.lastName}</h4>
                        </div>
                            <div class="card-body" style="padding: 0; margin-top:5px; margin-bottom:5px; border-bottom: 1px solid; border-color: #d3d3d3">
                                <p>Phone Number</p>
                                <h6>${contact.phoneNumber}</h6>
                            </div>
                            <div class="card-body" style="padding: 0; margin-top:5px; margin-bottom:5px; border-bottom: 1px solid; border-color: #d3d3d3">
                                <p>Email</p>
                                <h6>${contact.email}</h6>
                            </div>
                            <div class="card-body" style="padding: 0; margin-top:5px; margin-bottom:5px; border-bottom: 1px solid; border-color: #d3d3d3">
                                <p>Address</p>
                                <h6>${contact.address}</h6>
                            </div>
                        </div> 
                    </div>
                    `;
                contactCardRow.append(contactCardCol)
                contactCard.append(contactCardRow)
                mainDiv.append(contactCard);
            };
        };
    };

};