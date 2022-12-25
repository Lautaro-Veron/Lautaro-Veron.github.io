/*=============== Active Link =============== */

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

