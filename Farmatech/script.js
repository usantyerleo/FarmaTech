document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito

    if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto após os 3 primeiros números
    }

    if (value.length > 7) {
        value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto após os 6 primeiros números
    }

    if (value.length > 11) {
        value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o traço após os 9 primeiros números
    }

    e.target.value = value;
});
