import { describe, it, expect } from 'vitest';
import { cleanInput } from '../../src/repl.js';

describe('cleanInput', () => {
  it('lowercases the first token (command)', () => {
    const result = cleanInput('PRODUCT list');
    expect(result[0]).toBe('product');
  });

  it('lowercases the second token (subcommand)', () => {
    const result = cleanInput('product LIST');
    expect(result[1]).toBe('list');
  });

  it('preserves original casing for subsequent tokens', () => {
    const result = cleanInput('product add --name IntelCore');
    expect(result[2]).toBe('--name');
    expect(result[3]).toBe('IntelCore');
  });

  it('trims leading and trailing whitespace', () => {
    const result = cleanInput('  product list  ');
    expect(result).toEqual(['product', 'list']);
  });

  it('collapses internal whitespace', () => {
    const result = cleanInput('product   list');
    expect(result).toEqual(['product', 'list']);
  });

  it('handles a single token', () => {
    const result = cleanInput('EXIT');
    expect(result).toEqual(['exit']);
  });

  it('splits whitespace-only input into a single empty-string token', () => {
    // '   '.trim() → '' → ''.split(/\s+/) → [''] in JS
    const result = cleanInput('   ');
    expect(result).toEqual(['']);
  });
});
