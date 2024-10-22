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

const myCar = new Veicolo("Fiat", 2019, "Blu")
myCar.informazioni()
myCar.calcoloEta()

