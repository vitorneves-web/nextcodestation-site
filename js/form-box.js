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