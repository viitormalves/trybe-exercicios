const { sum, myRemove, myFizzBuzz } = require("./sum");

describe("Testes função sum", () => {
  test("Teste para retornar a soma", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test("Teste mensagem de Error", () => {
    expect(() => sum(4, "5")).toThrow();
    expect(() => sum()).toThrow("parameters must be numbers");
  });
});

describe("Testes função myRemove", () => {
  test("Verifica chamada myRemove removendo o item correto", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toContain(1, 2, 4);
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe(1, 2, 3, 4);
    expect(myRemove([1, 2, 3, 4], 5)).toContain(1, 2, 3, 4);
  });
});

describe("Testes função myFizzBuzz", () => {
  test("Testando retorno esperado quando o número for divisivel por 3 e 5", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(9)).toBe("fizz");
    expect(myFizzBuzz(10)).toBe("buzz");
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz("15")).toBe(false);
  });
});
