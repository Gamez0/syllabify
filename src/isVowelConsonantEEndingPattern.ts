import { isConsonant } from './isConsonant';
import { isVowel } from './isVowel';

export default function isVowelConsonantEEndingPattern(word: string): boolean {
  if (word.length < 3) return false;

  const lastChar = word[word.length - 1];
  const secondToLastChar = word[word.length - 2];
  const thirdToLastChar = word[word.length - 3];

  if (lastChar !== 'e') return false;

  return isVowel(thirdToLastChar) && isConsonant(secondToLastChar);
}
