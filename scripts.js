// form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
    e.preventDefault();

    // Get form values
const firstname = this.elements[0].value;
const lastname = this.elements[1].value;
const emailaddress = this.elements[2].value;
const phone = this.elements[3].value;
const countrycode = this.elements[4].value;
const plan = this.elements[5].value;

// in real scenario, you would send this data to a server
console.log("Lead Captured: ", {firstname,lastname,emailaddress,phone,countrycode,plan});

// show configuration
alert("Thank you for your interest! We will conact you shortly with our plan details")

// Reset form
this.reset()
})