import { transform } from '@babel/core'
import babelArrayLastValuePlugin from '../src/index'

describe('test babel-plugin-last-index', () => {
  beforeEach(() => {
    String.prototype.trimAll = function () {
      return this.replace(/\s/g, "")
    }
  })
  it('test for exact conversion', () => {
    const _code = `
      const array = [5,7,9];
      const item = array[-1];
    `
    const { code } = transform(_code, {
      plugins: [babelArrayLastValuePlugin]
    })

    expect(code.replace(/\s/g, "")).toEqual(`const array = [5,7,9];const item = array[array.length - 1];`.trimAll())
  })
  it('test for correct value', () => {
    const _code = `
      const array = [1,2,3];
      const item = array[-2];
    `
    const { code } = transform(_code, {
      plugins: [babelArrayLastValuePlugin]
    })

    const getItem = new Function(`${code};return item;`);
    const item = getItem();
    expect(item).toBe(2)
  })
  it('negative test', () => {
    const _code = `
      const array = [1,2,3];
      const item = array[-5];
    `
    const { code } = transform(_code, {
      plugins: [babelArrayLastValuePlugin]
    })

    const getItem = new Function(`${code};return item;`);
    const item = getItem();
    expect(item).toBeUndefined()
  })
})