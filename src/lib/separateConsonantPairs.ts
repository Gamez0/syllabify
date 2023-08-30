import { isVowel } from './isVowel';

export default function separateConsonantPairs(root: string): string[] {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

  for (let i = 1; i < root.length; i++) {
    if (consonants.includes(root[i]) && i < root.length - 1 && consonants.includes(root[i + 1])) {
      if (!isSpecialConsonantPair(root[i] + root[i + 1])) {
        if (vowelAtbothSide({ word: root, index: i, length: root.length })) {
          return [root.substring(0, i + 1), root.slice(i + 1)];
        }
      }
    }
  }
  return [root, ''];
}

function isSpecialConsonantPair(inputString: string) {
  const specialConsonantPairs = ['th', 'sh', 'ph', 'ch', 'wh', 'by'];

  for (const pair of specialConsonantPairs) {
    if (inputString.includes(pair)) {
      return true;
    }
  }

  return false;
}

function vowelAtbothSide({ word, index, length }: { word: string; index: number; length: number }) {
  const nextIndex = index + 1;

  if (nextIndex >= length) return false;
  word.substring(0, index);

  const prevWord = word.substring(0, index + 1);
  const nextWord = word.slice(index + 1);

  const prevWordHasVowel = hasVowel(prevWord);
  const nextWordHasVowel = hasVowel(nextWord);

  return prevWordHasVowel && nextWordHasVowel;
}

function hasVowel(word: string): boolean {
  for (const char of word) {
    if (isVowel(char)) {
      return true;
    }
  }
  return false;
}
