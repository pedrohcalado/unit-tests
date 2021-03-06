/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray((productDetails('first', 'second'))), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('first', 'second').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(productDetails('first', 'second').every((element) => typeof (element) == 'object' ), true);
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails('first', 'second')[0] != productDetails('first', 'second')[1], true)
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('first', 'second').every((element) => element.details.productId.includes('123')), true);
  });
});
