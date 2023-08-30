export default function separatePrefixSuffix(word: string): [string, string, string] {
  const prefixes = ['pre', 're', 'un', 'dis', 'in', 'im', 'en', 'ex', 'over', 'under', 'out'];
  const suffixes = ['ing', 'ed', 'er', 'ly', 'less', 'ment', 'able', 'ible', 'ive', 'ous', 'ness'];

  let prefix = '';
  let suffix = '';
  let root = word;

  for (const p of prefixes) {
    if (word.startsWith(p)) {
      prefix = p;
      root = word.slice(p.length);
      break;
    }
  }

  for (const s of suffixes) {
    if (word.endsWith(s)) {
      suffix = s;
      root = word.slice(0, word.length - s.length);
      break;
    }
  }

  return [prefix, root, suffix];
}
