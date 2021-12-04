const digitFormat = (digit,n) => {
    let zero = "";
    for(let i = 0; i < n - 1; i++){
        zero += "0";
    }
    return (zero + digit).slice(-n);
}

//la date qui correspond au dernier jour du mois précédant
const getEndOfPreviousMonth = (date) => {
    return new Date(date.getFullYear(),date.getMonth(),0);
}

//la date avec les heures et minutes mises à 0
const getDateHoursMinutesSetToZero = (date) => {
    return new Date(date.getFullYear(),date.getMonth(),date.getDate());
}

//la date au format DD/MM/YYYY hh:mm
const getDateFormatted = (date) => {
    return `${digitFormat(date.getDate(),2)}/${digitFormat(date.getMonth() +1,2)}/${digitFormat(date.getFullYear(),4)} ${digitFormat(date.getHours(),2)}:${ digitFormat(date.getMinutes(),2)}`;
}

// le nombre de la semaine dans l’année
const getWeek = (date) => {
    const firstDayOfTheYear = new Date(date.getFullYear(),0,1);
    const numberOfTheFirstDayOfTheYear = firstDayOfTheYear.getDay();
    let firstMondayOfTheYear;

    if((numberOfTheFirstDayOfTheYear == 0 ) || (numberOfTheFirstDayOfTheYear > 3)){
        firstMondayOfTheYear = new Date(firstDayOfTheYear.getTime() + 24 * (8 - numberOfTheFirstDayOfTheYear) * 3600 * 1000);
    }
    else{
        firstMondayOfTheYear = new Date(firstDayOfTheYear.getTime() - 24 * (numberOfTheFirstDayOfTheYear - 1) * 3600 * 1000);
    }
    return Math.floor((getDateHoursMinutesSetToZero(date).getTime() - firstMondayOfTheYear.getTime() )  / (7 * 24 * 3600 * 1000 ) + 1);
}

/* 
    Pour chaque date n dans une liste, on veut avoir ces résultats affichés en fonction des dates de la liste :

    la date qui correspond au dernier jour du mois précédant
    la date avec les heures et minutes mises à 0
    la date au format DD/MM/YYYY hh:mm
    le nombre de la semaine dans l’année
*/

const exercice2 = (dateList) => {
    dateList.forEach(n => {
        const endOfPreviousMonth = getEndOfPreviousMonth(n);
        const dateHoursMinutesSetToZero = getDateHoursMinutesSetToZero(n);
        const dateFormatted = getDateFormatted(n);
        const numberOfTheWeek = getWeek(n);


        console.log(endOfPreviousMonth);
        console.log(dateHoursMinutesSetToZero);
        console.log(dateFormatted);
        console.log(numberOfTheWeek);
    });
}

module.exports = {
    digitFormat,
    getEndOfPreviousMonth,
    getDateHoursMinutesSetToZero,
    getDateFormatted,
    getWeek,
    exercice2,
}