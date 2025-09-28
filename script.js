function sendEmail(event){
    event.preventDefault(); 

    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };

    emailjs.send("service_io3ho9l", "template_zpn1z2b", parms)
        .then(
            function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Email sent!");
            },
            function(error) {
                console.error("FAILED...", error);
                alert("Failed to send email.");
            }
        );
}

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navUl = document.querySelector('nav ul');

  burger.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
});
