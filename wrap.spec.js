const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns entire string without modification if 0 length wrap was provided', () => {
    expect(wrap("Hello, world", 0)).to.equal("Hello, world");
  });

  it('Returns string with one line break, without splitting words', () => {
    expect(wrap("Hello, world", 6)).to.equal("Hello,\nworld");
    expect(wrap("Loremipsumdolor", 1)).to.equal("Loremipsumdolor");
  });

  it('Returns string with properly spaced line breaks', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
  });

  it('Does not return line break after the last line', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.not.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.\n")
  });


});

// Accepts two arguments, one string, one integer (that is positive)


// Test that output is a string

// Test that the output string contains all the characters of the input

// Test that the output string lines are the length we expect
// Using String.prototype.lastIndexOf

// Test so that we do not cut words (one long word, output shouldn't be different from input, despite the num param)


// expected = "Lorem ipsum dolor \nsit eu amet, elit na\n magna sem amet nulla vel purus ac ligula."
