const contractionSyllabifyList: Record<string, string[]> = {
  "isn't": ['is', "n't"],
  "haven't": ['have', "n't"],
  "wouldn't": ['would', "n't"],
  "shouldn't": ['should', "n't"],
};

export default function getContraction(word: string): string[] {
  return contractionSyllabifyList[word] ?? [word];
}
