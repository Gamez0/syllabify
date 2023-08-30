'use strict';
const expect = require('chai').expect;
const syllabify = require('../dist/index.js');

describe('syllabify test', () => {
  it("should return ['mon','day']", () => {
    const result = syllabify('monday');
    expect(result[0]).to.equal('mon');
    expect(result[1]).to.equal('day');
  });
});
