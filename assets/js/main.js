/*=============== Background Header =============== */
function scrollHeader(){
    const header = document.getElementById('header');
    //when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
    if(this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== Mixitup Filter =============== */

/*=============== Testimonials Swiper =============== */

/*=============== Contact Form =============== */
function SendMail () {
    var params = {
        from_name : document.getElementById("#contact-name").value,
        email_id : document.getElementById("#contact-email").value,
        message : document.getElementById("#message").value
    }
    emailjs.send("service_xqiy6gy", "template_dua0ysq", params).then(function(res) {
        alert("Success!" + res.status);
    })
}

