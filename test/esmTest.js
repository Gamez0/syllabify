'use strict';
import { expect } from 'chai';
import { syllabify } from '../dist/index.mjs';

describe('esm syllabify test', () => {
  it("should return ['mon','day']", () => {
    const result = syllabify('monday');
    expect(result[0]).to.equal('mon');
    expect(result[1]).to.equal('day');
  });
});
