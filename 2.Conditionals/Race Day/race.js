let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 18;

if(age >=18 && registeredEarly){
    raceNumber += 1000;
}

if(age > 18 && registeredEarly){
    console.log(`Je start om 9:30 uur met racenummer: ${raceNumber}.`);
} else if(age > 18 && !registeredEarly){
    console.log(`Je start om 11:00 uur met racenummer: ${raceNumber}.`);
} else if(age < 18){
    console.log(`Je start om 12:30 uur met racenummer: ${raceNumber}.`);
} else{
    console.log('Ga naar de inschrijfbalie.')
}