import { isConsonant } from './isConsonant';
import { isVowel } from './isVowel';

export default function separateConsonantSurroundedByVowels(root: string): string[] {
  for (let i = 1; i < root.length; i++) {
    if (
      i < root.length - 1 &&
      isConsonant(root[i]) &&
      isSurroundedByVowel({ prevWord: root[i - 1], nextWord: root[i + 1] })
    ) {
      return [root.substring(0, i), root.slice(i)];
    }
  }
  return [root, ''];
}

function isSurroundedByVowel({
  prevWord,
  nextWord,
}: {
  prevWord: string;
  nextWord: string;
}): boolean {
  return isVowel(prevWord) && isVowel(nextWord);
}
