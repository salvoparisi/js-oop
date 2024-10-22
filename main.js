class Veicolo {
    marca
    anno
    colore
    numPorte
    carburante

    constructor(marca, anno, colore, numPorte, carburante) {
        this.marca = marca
        this.anno = anno
        this.colore = colore
        this.numPorte = numPorte
        this.carburante = carburante
    }

    informazioni() {
        console.log(this.marca, this.anno, this.colore);
    }

    calcoloEta() {
        let yearNow = new Date().getFullYear()
        let age = yearNow - this.anno
        console.log(`Questa macchina ha ${age} anni`);
    }
}

class Automobile extends Veicolo {
    gomme
    ccMotore
    topSpeed

    constructor(marca, anno, colore, numPorte, carburante, gomme, ccMotore, topSpeed) {
        super(marca, anno, colore, numPorte, carburante)
        this.gomme = gomme
        this.ccMotore = ccMotore
        this.topSpeed = topSpeed
    }

    porteAndGas() {
        console.log(`La macchina ha ${this.numPorte} porte ed è alimentata a ${this.carburante}`);
    }
}

const myCar = new Veicolo("Fiat", 2019, "Blu")
myCar.informazioni()
myCar.calcoloEta()

const mySecondCar = new Automobile("Opel", 2020, "nera", 4, "benzina")
mySecondCar.porteAndGas()