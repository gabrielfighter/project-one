function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

function validarEmail(email) {
    return email.includes("@");
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    ehMaiorDeIdade,
    validarEmail
};