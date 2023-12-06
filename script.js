function validateSignupForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (name === '' || email === '' || phone === '') {
        alert('Please fill in all fields in the signup form.');
        return false;
    }

    return true;
}

function validateContactForm() {
    var contactName = document.getElementById('contactName').value;
    var contactEmail = document.getElementById('contactEmail').value;
    var message = document.getElementById('message').value;

    if (contactName === '' || contactEmail === '' || message === '') {
        alert('Please fill in all fields in the contact form.');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.enlarge-image');
    const enlargedImageContainer = document.createElement('div');
    enlargedImageContainer.classList.add('enlarged-image-container');
    document.body.appendChild(enlargedImageContainer);

    images.forEach(image => {
        image.addEventListener('click', function () {
            const enlargedImage = document.createElement('img');
            enlargedImage.src = this.src;
            enlargedImage.alt = this.alt;
            enlargedImage.classList.add('enlarged-image');

            const closeButton = document.createElement('button');
            closeButton.innerText = 'Close';
            closeButton.classList.add('close-button');
            closeButton.addEventListener('click', function () {
                enlargedImageContainer.style.display = 'none';
            });

            enlargedImageContainer.innerHTML = '';
            enlargedImageContainer.appendChild(enlargedImage);
            enlargedImageContainer.appendChild(closeButton);
            enlargedImageContainer.style.display = 'flex';
        });
    });

    enlargedImageContainer.addEventListener('click', function (event) {
        
        if (!event.target.classList.contains('enlarged-image')) {
            this.style.display = 'none';
        }
    });
});


