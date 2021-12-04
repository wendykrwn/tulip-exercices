const exercice1 = require("../src/exercice1");

describe("teste pour l'exercice 1", () => {
   
    test('affiche rien pour une liste vide',() => {
        console.log = jest.fn();
        exercice1([]);
        expect(console.log).not.toHaveBeenCalled();
    });
    test('affiche Garçon',() => {
        console.log = jest.fn();
        exercice1([39]);
        expect(console.log).toHaveBeenCalledWith("Garçon");
    });
    test('affiche Fille',() => {
        console.log = jest.fn();
        exercice1([25]);
        expect(console.log).toHaveBeenCalledWith("Fille");
    });

    test('affiche GarçonFille',() => {
        console.log = jest.fn();
        exercice1([225]);
        expect(console.log).toHaveBeenCalledWith("GarçonFille");
    });
    test('affiche le nombre',() => {
        console.log = jest.fn();
        exercice1([14]);
        expect(console.log).toHaveBeenCalledWith(14);
    });

    test('teste sur une liste avec plusieurs valeurs ',()=>{
        console.log = jest.fn();
        const listeN = [23,10,125,1234,45,9,60,46];
        const expected = [23,'Fille','Fille',1234,'GarçonFille','Garçon','GarçonFille',46];
        exercice1(listeN);
        for(let i = 0 ; i< expected.length;i++){
            expect(console.log.mock.calls[i][0]).toBe(expected[i]);
        }
    });
});

