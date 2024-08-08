document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    
    const firstName = document.getElementById('firstName').value;
    if (firstName.length < 5) {
        valid = false;
        alert('Enter at least 5 characters.');
    }
    
    const lastName = document.getElementById('lastName').value;
    if (lastName.length < 5) {
        valid = false;
        alert('Enter at least 5 characters.');
    }
    
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        valid = false;
        alert('Email should contain the domain name (with @).');
    }
    
    const date = document.getElementById('date').value;
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/;
    if (!datePattern.test(date)) {
        valid = false;
        alert('Date must have the appropriate format (dd/mm/yy).');
    }
    
    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        valid = false;
        alert('Phone must contain 10 digits.');
    }
    
    const message = document.getElementById('message').value;
    if (message.length < 50) {
        valid = false;
        alert('Message must be at least 50 characters.');
    }
    
    if (!valid) {
        event.preventDefault();
    }
});