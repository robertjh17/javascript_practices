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

const pAequorFactory = (int, arr) => {
  return ({
    specimenNum: int,
    dna: arr,
    mutate(){
      let randomDna = Math.floor(Math.random() * this.dna.length);
      let oldDna = this.dna[randomDna];

      do{
        this.dna[randomDna] = returnRandBase();
      } while(oldDna === this.dna[randomDna]);
      return this.dna;
    },
    compareDNA(obj){
        numberCommonality = 0;
        for (let i = 0; i < obj['dna'].length; i++) {
          if (obj.dna[i] === this.dna[i]) {
            numberCommonality++;
          }
        }
      let percentCommon = ((numberCommonality / 15) * 100).toFixed(2);
        console.log(`Specimen #${this.specimenNum} and Specimen #${obj.specimenNum} have ${percentCommon}% DNA in common.`)
      },
    willLikelySurvive() {
      cAndGCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cAndGCounter++;
        }
      }
      return cAndGCounter >= 9;
    }
  })
}
const survivors = [];
let pNumber;
let newDna;
while (survivors.length < 30) {
  pNumber = survivors.length + 1;
  newDna = pAequorFactory(pNumber, mockUpStrand());
  if (newDna.willLikelySurvive() === true) {
    survivors.push(newDna);
  }
}
console.log(survivors);








