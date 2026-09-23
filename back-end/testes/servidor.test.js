
const {
    somar,
    subtrair,
    multiplicar,
    ehMaiorDeIdade,
    validarEmail
} = require("../server");

test("deve somar dois números", () => {
    expect(somar(2, 3)).toBe(5);
});

test("deve subtrair dois números", () => {
    expect(subtrair(5, 2)).toBe(3);
});

test("deve multiplicar dois números", () => {
    expect(multiplicar(4, 3)).toBe(12);
});

test("deve identificar uma pessoa maior de idade", () => {
    expect(ehMaiorDeIdade(18)).toBe(true);
});

test("deve validar um email que possui @", () => {
    expect(validarEmail("teste@email.com")).toBe(true);
});

