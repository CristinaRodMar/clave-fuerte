import { ValidacionClave, tieneCaracteresEspeciales,tieneLongitudMinima,tieneMayusculasYMinusculas,tieneNumeros, noContieneNombreUsuario,noContienePalabrasComunes } from "./clave-fuerte.validator";

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
let resultado = tieneLongitudMinima(clave);
    if (!resultado.esValida) return resultado;

    resultado = tieneMayusculasYMinusculas(clave);
    if (!resultado.esValida) return resultado;

    resultado = tieneNumeros(clave);
    if (!resultado.esValida) return resultado;

    resultado = tieneCaracteresEspeciales(clave);
    if (!resultado.esValida) return resultado;

    resultado = noContieneNombreUsuario(nombreUsuario, clave);
    if (!resultado.esValida) return resultado;

    resultado = noContienePalabrasComunes(clave, commonPasswords);
    if (!resultado.esValida) return resultado;

    return { esValida: true };
};