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
    }
  }
}

// const test = pAequorFactory(0, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
// console.log(test.mutate())






