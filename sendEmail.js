function sendEmail() {
    var templateParams = {
        name: document.querySelector('[name="name"]').value,
        email: document.querySelector('[name="email"]').value,
        subject: document.querySelector('[name="subject"]').value,
        message: document.querySelector('[name="message"]').value
    };

    emailjs.send('service_vivqcds', 'template_i16oml5', templateParams)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
}
