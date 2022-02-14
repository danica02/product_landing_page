// Forms for dynamic page

(function () {
    var queryString = window.location.search;
    var parameters = new URLSearchParams(queryString);

    var userEmail = parameters.get("email");

    var cxEmail = document.querySelector("[data-email]");

    cxEmail.textContent = userEmail;
    })();
