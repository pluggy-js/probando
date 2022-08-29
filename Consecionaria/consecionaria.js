let autos = require('./Autos')

const concecionaria = {

    autos:autos,

    buscarAuto: function(patente){
        let resultado = autos.find(
            (autos) => autos.patente ==patente)
            if (resultado == undefined){
                return null;
            }
            return resultado;
    },

    venderAuto: function (patente){
    let auto = this.buscarAuto(patente)
    auto.vendido = true;
    return auto
    }
}

console.log (concecionaria.verderAuto('APL123'))

