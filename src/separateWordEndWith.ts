export default function separateWordEndWith({
  suffix,
  word,
}: {
  suffix: string;
  word: string;
}): string[] {
  if (doesWordEndWith({ suffix, word })) {
    if (suffix === 'ckle') return [word.substring(0, word.length - suffix.length + 2), 'le'];
    return [word.substring(0, word.length - suffix.length), suffix];
  }
  return [word, ''];
}

function doesWordEndWith({ suffix, word }: { suffix: string; word: string }): boolean {
  return word.endsWith(suffix);
}
