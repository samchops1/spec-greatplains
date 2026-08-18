(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.name.value || "").trim();
      var phone = (form.phone.value || "").trim();
      var message = (form.message.value || "").trim();
      var subject = "Lawn care request" + (name ? " from " + name : "");
      var body = [];
      if (name) body.push("Name: " + name);
      if (phone) body.push("Phone: " + phone);
      if (message) body.push("", message);
      var href =
        "mailto:paulhermeslawncare@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body.join("\n"));
      window.location.href = href;
    });
  }
})();
