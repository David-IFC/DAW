const form = document.getElementById("registro");

form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault(); // evitar envío
    }
});

const inputs = form.querySelectorAll("input[required]");

inputs.forEach(input => {
    input.addEventListener("invalid", e => {
        e.preventDefault(); // evitar mensaje predeterminado
        if (sessionStorage.getItem('idioma') == "es") {
            input.setCustomValidity("Por favor completa este campo");

        } else if (sessionStorage.getItem('idioma') == "en") {
            input.setCustomValidity("Please complete this field");
        }

    });

    input.addEventListener("input", e => {
        input.setCustomValidity("");
    });
});