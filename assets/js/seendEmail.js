function senddatatoEmail() {
    emailjs.init("sIvWiBFTCnZKNFwVP"); // Replace with your Public Key from EmailJS

    // Form submission handler
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send email
        emailjs.sendForm("service_9o9y0bg", "template_9olrk3g", this)
            .then(function(response) {
                // Show success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Your message has been successfully sent. Thank you for contacting us!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });

                document.getElementById("contact-form").reset(); // Reset the form
            }, function(error) {
                // Show error alert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Retry'
                });
            });
    });
}

// Initialize the form handler
senddatatoEmail();
