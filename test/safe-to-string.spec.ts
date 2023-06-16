import { safeToString } from "../src";

describe('safeToString', () => {
  const scenarios = [
    { input: 'Teste', output: 'Teste' },
    { input: '', output: '' },
    { input: {}, output: '{}' },
    { input: [], output: '' },
    { input: null, output: 'null' },
    { input: undefined, output: 'undefined' },
    { input: 1, output: '1' },
    { input: ['1', '2'], output: '1,2' },
    { input: ['1', 2], output: '1,2' },
    { input: { id: 'teste' }, output: '{"id":"teste"}' },
    { input: { id: 1 }, output: '{"id":1}' },
    { input: new Error(`erro`), output: 'Error: erro' },
    {
      input: (): string => {
        return `test`;
      },
      output: 'function () {\n                return "test";\n            }',
    },
  ];

  for (const { input, output } of scenarios) {
    it(`A ${JSON.stringify(input)} should return '${output}'`, () => {
      expect(safeToString(input)).toEqual(output);
    });
  }
});
