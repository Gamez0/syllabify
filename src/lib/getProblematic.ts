const problematicList: Record<string, string[]> = {
  ivy: ['i', 'vy'],
  eyes: ['eyes'],
  lonely: ['lone', 'ly'],
  dance: ['dance'],
  yesterday: ['yes', 'ter', 'day'],
  without: ['with', 'out'],
  nerve: ['nerve'],
  give: ['give'],
  memories: ['me', 'mo', 'ries'],
  beautiful: ['beau', 'ti', 'ful'],
  serenade: ['ser', 'e', 'nade'],
  delicate: ['del', 'i', 'cate'],
  adventure: ['ad', 'ven', 'ture'],
  serenity: ['se', 'ren', 'i', 'ty'],
  illuminate: ['il', 'lu', 'mi', 'nate'],
  nostalgia: ['nos', 'tal', 'gia'],
  ethereal: ['e', 'the', 're', 'al'],
};

export default function getProblematic(word: string): string[] {
  return problematicList[word];
}
