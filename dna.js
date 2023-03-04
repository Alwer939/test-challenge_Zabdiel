// // 2. Write a function that takes in a DNA string (for example 'CTAGGGTA') 
// and returns a new string with any non-canonical DNA 
// // base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. 
// Make the function case sensitive 
// // - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) 
// is a good value and should remain. If the DNA string is empty, 
// // just return an empty string.

const canonical = (dna) =>{
  const canonica = dna.split('');
  const result = [];
  if(canonica.some(elem => elem == 'C')){
    result.push('C')
  }
  if(canonica.some(elem => elem == 'T')){
    result.push('T')
  }
  if(canonica.some(elem => elem == 'A')){
    result.push('A')
  }
  if(canonica.some(elem => elem == 'G')){
    result.push('G')
  }
  return result.join('');
}

module.exports = canonical;
