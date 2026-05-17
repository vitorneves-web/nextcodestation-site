  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const groups = document.querySelectorAll(".input-group");

    groups.forEach(group => {
      const field = group.querySelector("input, select");

      if (!field.value) {
        group.classList.add("error");
      } else {
        group.classList.remove("error");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const formBox = document.querySelector(".form-box");

    if (formBox) {
        // Quando o usuário clica no formulário, adiciona a classe que segura o efeito
        formBox.addEventListener("click", function(e) {
            e.stopPropagation(); // Evita que o clique feche imediatamente pelo evento do document
            formBox.classList.add("active");
        });

        // Quando o usuário clica em qualquer outro lugar da tela, remove o efeito
        document.addEventListener("click", function() {
            formBox.classList.remove("active");
        });
    }
});