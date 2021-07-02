class AddContact {

    static stateArray = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN',
            'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
            'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    constructor(){
        this.addContactForm();
        this.getValidate();
    }

    addContactForm() {
        const mainDiv = document.querySelector(".main_div")
        const formDiv = document.createElement("div");
        formDiv.className = "add_contact_div";
        formDiv.id = "add_contact_div"
        formDiv.style = "display: inline-block; width:100%;"
        formDiv.innerHTML = `
            <form class="row g-3 needs-validation" id="add_contact_form" novalidate style="width:450px;">
                <div class="col-6">
                    <p id="add_contact_cancel_bttn" style="float: left; color: blue; padding: .375rem .75rem; margin-bottom: 0px; cursor: pointer;">Cancel</p>
                </div>
                <div class="col-6">
                    <button type="submit" class="btn btn-default" id="add_contact_add_bttn" style="float: right; color: blue;">Done</button>
                </div>

                <div class="col-md-6">
                    <label for="inputFirstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" name="firstname" id="inputFirstName" required>
                    <div class="invalid-feedback">
                        Please provide a first name.
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputLastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" name="lastname" id="inputLastName" required>
                    <div class="invalid-feedback">
                        Please provide a last name.
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="inputEmail" required>
                    <div class="invalid-feedback">
                        Please provide a valid email.
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" name="phonenumber" id="inputPhoneNumber" required>
                    <div class="invalid-feedback">
                        Please provide a valid phone number.
                    </div>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" name="address" id="inputAddress" placeholder="1234 Main St" required>
                    <div class="invalid-feedback">
                        Please provide a valid address.
                    </div>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" name="address2" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="col-md-4">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" name="city" id="inputCity" required>
                    <div class="invalid-feedback">
                        Please provide a valid City.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">State</label>
                    <select class="form-select" name="state" id="inputState" required>
                        <option selected disabled value="">Choose...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please choose a city.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="inputCity" class="form-label">Zip</label>
                    <input type="text" class="form-control" name="zip" id="inputZip" required>
                    <div class="invalid-feedback">
                        Please provide a valid Zip.
                    </div>
                </div>
            </form>
        `;
        mainDiv.append(formDiv);
        const stateSelect = document.getElementById("inputState");
        this.constructor.stateArray.forEach((state) => { 
            const optionItem = document.createElement("OPTION");
            optionItem.innerHTML = state
            stateSelect.appendChild(optionItem)
        })
    }

    getValidate() {

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // console.log(forms)

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach((form) => {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                } else {
                    event.preventDefault()
                    const { firstname, lastname, email, phonenumber, address, address2, city, state, zip} = event.target;
                    const data = {
                        firstname: firstname.value,
                        lastname: lastname.value,
                        email: email.value,
                        phonenumber: phonenumber.value,
                        address: address.value + ' ' + address2.value + ', ' + city.value + ', ' + state.value + ' ' + zip.value,
                        // restaurant_id: this.restaurantId,
                    };
                    ContactCard.contacts.push(data)
                    console.log(ContactCard.contacts)

                }

                form.classList.add('was-validated')
            }, false)
        })

    }
}