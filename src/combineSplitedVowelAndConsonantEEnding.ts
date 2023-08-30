import isVowelConsonantEEndingPattern from './isVowelConsonantEEndingPattern';

export default function combineSplitedVowelAndConsonantEEnding({
  word,
  filteredResult,
}: {
  word: string;
  filteredResult: string[];
}): string[] {
  if (
    isVowelConsonantEEndingPattern(word) &&
    isSplitedBetweenVowelAndConsonantEEnding(filteredResult)
  ) {
    filteredResult[filteredResult.length - 2] += filteredResult[filteredResult.length - 1];
    filteredResult.pop();
    return filteredResult;
  }
  return filteredResult;
}
function isSplitedBetweenVowelAndConsonantEEnding(filteredResult: string[]) {
  const syllabified = filteredResult.join('-');

  if (syllabified.length < 3) return false;

  return syllabified[syllabified.length - 3] === '-';
}
