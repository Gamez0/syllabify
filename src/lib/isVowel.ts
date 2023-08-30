export function isVowel(char: string): boolean {
  const vowels = 'aeiouyAEIOU';
  return vowels.includes(char);
}
