interface ValidacionClave {
    esValida: boolean;
    error?: string;
}

// La clave debe de tener mayúsculas y minúsculas.

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const tieneMayusculas = /[A-Z]/.test(clave);
    const tieneMinusculas = /[a-z]/.test(clave);
    if (!tieneMayusculas || !tieneMinusculas)
    {
        return {esValida: false, error: "La clave debe de tener mayúsculas y minúsculas"};
    }
    return {esValida: true};
};

//La clave debe de tener números.
const tieneNumeros = (clave: string): ValidacionClave => {
    if (!/[0-9]/.test(clave))
    {
        return {esValida: false, error: "La clave debe tener números"}
    }
    return { esValida: true };
};

//La clave debe de tener caracteres especiales (@,#,+, _, ...)
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    if (!/[@#_+!?$%^&*()-=]/.test(clave))
    {
        return{esValida: false, error: "La clave debe de tener números"}
    }
    return { esValida: true };
};

//La clave debe de tener una longitud mínima de 8 caracteres.
const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if (clave.length < 8)
    {
        return {esValida: false, error: "La clave debe tener una longitud mínima de 8 caracteres"}
    }
    return { esValida: true };
};

//La clave no debe tener el nombre del usuario.
const noContieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
    const nombreLower = nombreUsuario.toLowerCase();
    const claveLower = clave.toLowerCase();
    if (claveLower.includes(nombreLower))
    {
        return { esValida: false, error: "La clave no debe tener el nombre del usuario" };
    }
    return { esValida: true };
};

//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
const noContienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const claveLower = clave.toLowerCase();
    for (const palabra of commonPasswords)
    {
        if (claveLower.includes(palabra.toLowerCase()))
        {
            return { esValida: false, error: "La clave no debe de contener palabras comunes" };
        }
    }
    return { esValida: true };
};

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[] ): ValidacionClave => {
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