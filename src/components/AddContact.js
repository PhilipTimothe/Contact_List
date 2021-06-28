class AddContact {

    constructor(){

    }

    static addContactForm() {
        const mainDiv = document.querySelector(".main_div")
        const formDiv = document.createElement("div");
        formDiv.className = "add_contact_div";
        formDiv.id = "add_contact_div"
        formDiv.style = "display: inline-block; width:100%;"
        formDiv.innerHTML = `
            <form class="row g-3" style="width:450px;">
                <div class="col-6">
                    <button class="btn btn-default" id="add_contact_cancel_bttn" style="float: left; color: blue;">Cancel</button>
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-default" id="add_contact_add_bttn" style="float: right; color: blue;">Done</button>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">First Name</label>
                    <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Last Name</label>
                    <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Phone Number</label>
                    <input type="password" class="form-control" id="inputPhoneNumber4">
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
            </form>
        `;
        mainDiv.append(formDiv);
    }
}