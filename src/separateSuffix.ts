export default function separateSuffix(word: string): string[] {
  const suffixes = ['ing', 'ed', 'er', 'ly', 'less', 'ment', 'able', 'ible', 'ive', 'ous', 'ness'];

  let suffix = '';
  let root = word;
  for (const s of suffixes) {
    if (word.endsWith(s)) {
      suffix = s;
      root = word.slice(0, word.length - s.length);
      break;
    }
  }
  return [root, suffix];
}
