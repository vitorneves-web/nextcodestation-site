const formularioPlanilha = document.querySelector('.formulario');

formularioPlanilha.addEventListener('submit', async (e) => {

  e.preventDefault();

  const data = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    empresa: document.getElementById('empresa').value,
    telefone: document.getElementById('telefone').value,
    segmento: document.getElementById('segmento').value
  };

  try {

    await fetch('https://script.google.com/macros/s/AKfycbxAOApSzpnkA8-M5Rrqup_b9KgVBMDNyJi4kEGjDnvU40A02x5tihnAWu9iqCtI-vdP/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    alert('Enviado com sucesso!');

    formularioPlanilha.reset();

  } catch (err) {

    console.error(err);

    alert('Erro ao enviar formulário');

  }

});