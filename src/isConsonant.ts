export function isConsonant(char: string): boolean {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  return consonants.includes(char);
}
