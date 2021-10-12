const getSleepHours = day => {
    switch(day){
        case 'monday' :
            return 8;
        case 'tuesday' :
            return 9;
        case 'wednesday' :
            return 10;
        case 'thursday' :
            return 8;
        case 'friday' :
            return 10;
        case 'saturday' :
            return 5;
        case 'sunday' :
            return 7;
    }
}
const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') +    getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours(){
    const idealHours = 8;
    return idealHours * 7;
}

function calculateSleepDept(){
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const difference = actualSleepHours - idealSleepHours;
    if(actualSleepHours === idealSleepHours){
        console.log('Je hebt precies genoeg slaapuren!' + difference);
    } else if(actualSleepHours > idealSleepHours){
        console.log('Je slaapt meer dan nodig, met ' + difference + ' uur meer dan nodig.');
    } else{
        console.log('Je slaapt te weinig, neem wat rust. Je hebt ' + difference + ' uur aan slaap nodig.');
    }
}

console.log('Je slaapt ' + getActualSleepHours() + ' uur per week.');
console.log('Je ideale uren aan slaap in een week is ' + getIdealSleepHours() + ' uur per week.');
calculateSleepDept();