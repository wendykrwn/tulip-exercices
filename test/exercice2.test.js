const {
    getEndOfPreviousMonth,
    getDateHoursMinutesSetToZero,
    getDateFormatted,
    getWeek,
    exercice2
}  = require('../src/exercice2');

describe("Teste la date qui correspond au dernier jour du mois précédant", () => {
    test('retourne le dernier mois précédant ayant 30 jours',() => {
        const date = new Date(2021,6,17);
        expect(getEndOfPreviousMonth(date)).toStrictEqual(new Date(2021,5,30));
      }
    );
    test('retourne le dernier mois précédant ayant 31 jours',() => {
        const date = new Date(2049,5,17);
        expect(getEndOfPreviousMonth(date)).toStrictEqual(new Date(2049,4,31));
      }
    );
    test('retourne le dernier mois de fevrier d\'une année bissextile',() => {
        const date = new Date(2004,2,24,13,24);
        expect(getEndOfPreviousMonth(date)).toStrictEqual(new Date(2004,1,29));
    });
    test('retourne le dernier mois de fevrier d\'une année non bissextile',() => {
        const date = new Date(2022,2,24,12,45);
        expect(getEndOfPreviousMonth(date)).toStrictEqual(new Date(2022,1,28));
    });
    test('retourne le dernier mois précédant un jour de l\'an',() => {
        const date = new Date(2000,0,1);
        expect(getEndOfPreviousMonth(date)).toStrictEqual(new Date(1999,11,31));
      }
    )
})


describe("teste la date avec les heures et minutes mises à 0", () => {
    test('retourne la date avec les heures et minutes mis à zéro d\'une date avec heures et minutes defini',() => {
        const date = new Date(2022,2,24,12,45);
        expect(getDateHoursMinutesSetToZero(date)).toStrictEqual(new Date(2022,2,24,0,0));
    });
    test('retourne la date avec les heures et minutes mis à zéro d\'une date avec heures et minutes non defini',() => {
        const date = new Date(2022,2,24);
        expect(getDateHoursMinutesSetToZero(date)).toStrictEqual(new Date(2022,2,24,0,0));
    });
});

describe("Teste la date au format DD/MM/YYYY hh:mm", () => {
    test('retourne la date au format DD/MM/YYYY hh:mm avec le mois inferieur à 10',() => {
        const date = new Date( 2006,5,12,14,20);
        expect(getDateFormatted(date)).toStrictEqual("12/06/2006 14:20");
    });
    test('retourne la date au format DD/MM/YYYY hh:mm avec une année inférieur à 4 chiffres',() => {
        const date = new Date(433,11,8,9,50);
        expect(getDateFormatted(date)).toStrictEqual("08/12/0433 09:50");
    });
    test('retourne la date au bon format avec un regexp',() => {
        const regexp = new RegExp('([0-9]{2}/){2}[0-9]{4} [0-9]{2}:[0-9]{2}')
        const date = new Date(433,11,8,9,50);
        expect(getDateFormatted(date)).toEqual(expect.stringMatching(regexp));
    })
    
});

describe("Teste le nombre de la semaine dans l’année", () => {
    test('retourne le numero de la semaine d\'une date au hasard',() => {    
        const date = new Date(2022,5,15,20,10);
        expect(getWeek(date)).toStrictEqual(24);
    })
    test('retourne le numero de la semaine du debut de l\'année qui est lié à la semaine de l\'année précédente',() => {    
        const date = new Date(2039,0,1,20,10);
        expect(getWeek(date)).toStrictEqual(0);
    });
});

describe("Teste exercice 2", () => {
    test('affiche rien pour une liste vide',()=>{
        console.log = jest.fn();
        exercice2([]);
        expect(console.log).not.toHaveBeenCalled();
    });

    test('teste sur une liste avec plusieurs valeurs ',()=>{
        console.log = jest.fn();
    
        const listeN = [new Date(2036,7,28,23,12),new Date(400,2,12,8,9)];
        const expected = [new Date(2036,6,31),new Date(2036,7,28,0,0),'28/08/2036 23:12',35,
                          new Date(400,1,29), new Date(400,2,12,0,0), '12/03/0400 08:09',10 
                        ];
        exercice2(listeN);
        for(let i = 0 ; i< expected.length;i++){
            console.log(expected[i]);
            expect(console.log.mock.calls[i][0]).toStrictEqual(expected[i]);
        }
    });
})