// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  // TODO: Check specimenNum uniqueness
  return {
    specimenNum,
    dna,
    mutate() {
      const index = Math.floor(Math.random() * 15);
      const selectedBase = this.dna[index];
      let randSelectedBase;

      // select random base until it is different than current base
      do {
        randSelectedBase = returnRandBase();
      } while (randSelectedBase === selectedBase);
      this.dna[index] = randSelectedBase;
      
      return this.dna;
    },
    compareDNA(p) {
      let count = 0;
      for (let i = 0; i < 15; i++)  {
        if (p.dna[i] === this.dna[i]) {
          count++;
        }
      }
      const percentage = (count / 15) * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${p.specimenNum} have ${percentage}% DNA in common.`)
    }
  }
}

//// for testing .mutate()
// const test = pAequorFactory(0, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
// console.log(test.mutate())
//////

//// for testing .compareDNA()
// const test1 = pAequorFactory(0, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
// const test2 = pAequorFactory(1, ['A', 'T', 'C', 'G', 'T', 'A', 'G', 'C', 'T', 'T', 'C', 'G', 'A', 'T', 'C']);
// test1.compareDNA(test2);
//// Output: specimen #0 and specimen #1 have 66.66666666666666% DNA in common.
////// 






