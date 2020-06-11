// FOOTER SOCIAL LINKS
var links = ['behance.png','dribble.png','facebook.png','flickr.png','g_plus.png','pinterest.png','skype.png','stumble_upon.png','twitter.png','you_tube.png'];
$(document).ready(() => {
    var social = $('#footer-social');
    links.forEach(link => {
        social.append('<a href="#"><img src="assets/social_icons/'+link+'" alt=""></a>');
    });
})


// CONTACT FORM
$(document).ready(() => {
    var contactForm = $('#contact-form');
    contactForm.submit((e) => {
        e.preventDefault();

        var email = contactForm.find('input[name="email"]').val();
        var name = contactForm.find('input[name="name"]').val();
        alert('Thank you '+ name + ' for your message. We will respond to you via: '+ email);
        contactForm.trigger('reset');
    })
});