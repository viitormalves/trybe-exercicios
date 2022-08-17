const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
} = require("./sum");

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

describe("Testes função encode e decode", () => {
  it("Testando se encode e decode são funções", () => {
    expect(typeof encode).toBe("function");
    expect(typeof decode).toBe("function");
  });
  it('Converte as vogais "aeiou" nos números 12345', () => {
    expect(encode("aeiou")).toEqual("12345");
  });
  it("Converte os números 12345 nas vogais aeiou", () => {
    expect(decode("12345")).toEqual("aeiou");
  });
  it("Teste não converter as demais letras/números", () => {
    expect(encode("sdfgh")).toEqual("sdfgh");
    expect(decode("sdfgh")).toEqual("sdfgh");
  });
  it("Teste se o tamanho de string retornada é o mesmo", () => {
    expect(encode("teste").length).toEqual(5);
    expect(decode("teste").length).toEqual(5);
  });
});

describe("Testa a função techList", () => {
  it("Testa se a função techList é definida", () => {
    expect(techList).toBeDefined();
  });
  it("Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });
  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});
