emailjs.init("");
const btn = document.getElementById("button");
const Form = document.getElementById("form");

Form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.innerHTML = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_hb789ys";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.innerHTML = "Sent!";
      setTimeout(function () {
        btn.innerHTML = "Send Message";
      }, 1000);
      Form.reset();
      return false;
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
