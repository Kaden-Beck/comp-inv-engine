import type { Interface } from 'readline';

export function prompt(rl: Interface, question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}
