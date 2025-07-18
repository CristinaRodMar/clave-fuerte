export interface ValidacionClave {
    esValida: boolean;
    error?: string;
}

// La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const tieneMayusculas = /[A-Z]/.test(clave);
    const tieneMinusculas = /[a-z]/.test(clave);
    if (!tieneMayusculas || !tieneMinusculas) {
        return { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" };
    }
    return { esValida: true };
};

//La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
    if (!/[0-9]/.test(clave)) {
        return { esValida: false, error: "La clave debe de tener números" }
    }
    return { esValida: true };
};

//La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    if (/[@#_+!?$%^&*()\-=/]/.test(clave)) {
        return { esValida: true };

    }
    return { esValida: false, error: "La clave debe de tener caracteres especiales" }
};

//La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if (clave.length < 8) {
        return { esValida: false, error: "La clave debe tener una longitud mínima de 8 caracteres" }
    }
    return { esValida: true };
};

//La clave no debe tener el nombre del usuario.
export const noContieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
    const nombreLower = nombreUsuario.toLowerCase();
    const claveLower = clave.toLowerCase();
    if (claveLower.includes(nombreLower)) {
        return { esValida: false, error: "La clave no debe tener el nombre del usuario" };
    }
    return { esValida: true };
};

//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const noContienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const claveLower = clave.toLowerCase();
    for (const palabra of commonPasswords) {
        if (claveLower.includes(palabra.toLowerCase())) {
            return { esValida: false, error: "La clave no debe de contener palabras comunes" };
        }
    }
    return { esValida: true };
};
