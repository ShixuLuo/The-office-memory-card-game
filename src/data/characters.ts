const characters: Map<string, string> = new Map([
  ['Pam', 'pam.jpg'],
  ['Jim', 'jim.jpg'],
  ['Michael', 'michael.jpg'],
  ['Dwight', 'dwight.jpg'],
  ['Jan', 'jan.jpg'],
  ['Karen', 'karen.jpg'],
  ['Kevin', 'kevin.jpg'],
  ['Toby', 'toby.jpg'],
  ['Ryan', 'ryan.jpg'],
  ['Kelly', 'kelly.jpg'],
  ['Creed', 'creed.jpg'],
]);

export function getCharacter(): string[] {
  let res: string[] = [];

  characters.forEach((_, k) => {res.push(k)});
  return res;
}

export default characters;
