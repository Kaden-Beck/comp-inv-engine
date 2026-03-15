import { describe, it, expect } from 'vitest';
import { parseFlags } from '../../src/lib/cliHelpers/parseFlags.js';

describe('parseFlags', () => {
  describe('positional arguments', () => {
    it('collects bare words as positional args', () => {
      const result = parseFlags(['add', 'Intel']);
      expect(result.positional).toEqual(['add', 'Intel']);
      expect(result.flags).toEqual({});
    });

    it('returns empty arrays for empty input', () => {
      const result = parseFlags([]);
      expect(result.positional).toEqual([]);
      expect(result.flags).toEqual({});
    });
  });

  describe('long flags (--flag)', () => {
    it('captures --flag value pairs', () => {
      const result = parseFlags(['--name', 'Intel']);
      expect(result.flags).toEqual({ name: 'Intel' });
      expect(result.positional).toEqual([]);
    });

    it('treats --flag followed by another flag as boolean', () => {
      const result = parseFlags(['--verbose', '--name', 'Intel']);
      expect(result.flags).toEqual({ verbose: true, name: 'Intel' });
    });

    it('treats --flag at end of args as boolean', () => {
      const result = parseFlags(['--verbose']);
      expect(result.flags).toEqual({ verbose: true });
    });

    it('handles multiple --flag value pairs', () => {
      const result = parseFlags(['--name', 'NVIDIA', '--desc', 'GPU maker']);
      expect(result.flags).toEqual({ name: 'NVIDIA', desc: 'GPU maker' });
    });
  });

  describe('short flags (-f)', () => {
    it('captures -f value pairs', () => {
      const result = parseFlags(['-n', 'Intel']);
      expect(result.flags).toEqual({ n: 'Intel' });
      expect(result.positional).toEqual([]);
    });

    it('treats -f followed by another flag as boolean', () => {
      const result = parseFlags(['-v', '-n', 'Intel']);
      expect(result.flags).toEqual({ v: true, n: 'Intel' });
    });

    it('treats -f at end of args as boolean', () => {
      const result = parseFlags(['-v']);
      expect(result.flags).toEqual({ v: true });
    });
  });

  describe('mixed positional and flags', () => {
    it('separates positional args from flags', () => {
      const result = parseFlags(['add', '--name', 'AMD', 'extra']);
      expect(result.positional).toEqual(['add', 'extra']);
      expect(result.flags).toEqual({ name: 'AMD' });
    });

    it('handles flags interspersed with positional args', () => {
      const result = parseFlags(['-n', 'Intel', 'list', '--limit', '10']);
      expect(result.positional).toEqual(['list']);
      expect(result.flags).toEqual({ n: 'Intel', limit: '10' });
    });
  });
});
