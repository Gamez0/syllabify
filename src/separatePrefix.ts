export default function separatePrefix(word: string): string[] {
  if (word.length < 4) return ['', word];
  const prefixes = ['pre', 're', 'un', 'dis', 'in', 'im', 'en', 'ex', 'over', 'under', 'out'];
  let prefix = '';
  let root = word;
  for (const p of prefixes) {
    if (word.startsWith(p)) {
      prefix = p;
      root = word.slice(p.length);
      break;
    }
  }
  return [prefix, root];
}
