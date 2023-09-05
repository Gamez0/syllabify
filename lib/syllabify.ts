import combineSplitedVowelAndConsonantEEnding from './combineSplitedVowelAndConsonantEEnding';
import getContraction from './getContraction';
import getProblematic from './getProblematic';
import separateConsonantPairs from './separateConsonantPairs';
import separateConsonantSurroundedByVowels from './separateConsonantSurroundedByVowels';
import separatePrefix from './separatePrefix';
import separateSuffix from './separateSuffix';
import separateWordEndWith from './separateWordEndWith';

export default function syllabify(word: string): string[] {
  let result = syllabifySingleWord(word);
  let index = 0;
  while (index < result.length) {
    result = result.map(word => (word.length > 3 ? syllabifySingleWord(word) : word)).flat();
    index++;
  }
  return result;
}

function syllabifySingleWord(word: string): string[] {
  if (getProblematic(word)) return getProblematic(word);

  if (hasSingleQuotationMark(word)) return getContraction(word);

  if (word.length < 4) return [word];

  const [wordWithoutCkle, ckleSuffix] = separateWordEndWith({ suffix: 'ckle', word });
  const [wordWithoutSuffix, suffix] = separateSuffix(wordWithoutCkle);
  const [prefix, root] = separatePrefix(wordWithoutSuffix);
  const [pair, afterPair] = separateConsonantPairs(root);

  const pairSeparatedConsonantSurroundedByVowels = separateConsonantSurroundedByVowels(pair);
  const afterPairSeparatedConsonantSurroundedByVowels =
    separateConsonantSurroundedByVowels(afterPair);
  let filteredResult = [
    prefix,
    ...pairSeparatedConsonantSurroundedByVowels,
    ...afterPairSeparatedConsonantSurroundedByVowels,
    ckleSuffix,
    suffix,
  ].filter(part => part !== '');
  filteredResult = combineSplitedVowelAndConsonantEEnding({ word, filteredResult });
  return filteredResult;
}

function hasSingleQuotationMark(words: string): boolean {
  return words.includes("'");
}
