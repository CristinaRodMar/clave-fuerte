import { validarClave } from "./main";
import { tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNumeros, noContieneNombreUsuario, noContienePalabrasComunes } from "./clave-fuerte.validator"


export const commonPasswords: string[] = [
    "password", "123456", "qwerty", "admin",
    "letmein", "welcome", "monkey", "sunshine",
    "password1", "123456789", "football", "iloveyou",
    "1234567", "123123", "12345678", "abc123", "qwerty123",
    "1q2w3e4r", "baseball", "password123", "superman",
    "987654321", "mypass", "trustno1", "hello123",
    "dragon", "1234", "555555", "loveme", "hello", "hockey", "letmein123",
    "welcome123", "mustang", "shadow", "12345", "passw0rd",
    "abcdef", "123abc", "football123", "master", "jordan23",
    "access", "flower", "qwertyuiop", "admin123", "iloveyou123",
    "welcome1", "monkey123", "sunshine1", "password12", "1234567890",
];

describe('validarClave', () => {
const nombreUsuario = 'testuser'; 

    it('debe fallar si no tiene mayúsculas y minúsculas', () => {
    // Arrange
    const clave = 'abc123@def';

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe('La clave debe de tener mayúsculas y minúsculas');
    });

    it('debe fallar si no tiene números', () => {
    // Arrange
    const clave = 'Abcdef@Ghi';

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe('La clave debe tener números');
    });

    it('debe pasar para longitud exacta de 8 caracteres si cumple lo demás', () => {
    // Arrange
    const clave = 'Ab1@Cdef';

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
    });

    it('debe pasar aunque contiene una variante en mayúsculas del nombre de usuario', () => {
    // Arrange
    const clave = 'test123@User';

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
    });

    it('debe pasar si no contiene palabras comunes ni nombre, pero tiene todo lo demás', () => {
    // Arrange
    const clave = 'Xyz789#Qwe';

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
    });
});

describe("tieneMayusculasYMinusculas", () => {
    it("debería devolver esValida si tiene mayúsculas y minúsculas", () => {
    // Arrange
    const clave = "AaBbCc";

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado.esValida).toBe(true);
    });
});

describe("tieneNumeros", () => {
    it("debería devolver esValida si tiene números", () => {
    // Arrange
    const clave = "Abc123";

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado.esValida).toBe(true);
    });
});

describe("tieneLongitudMinima", () => {
    it("debería devolver un error si no cumple con la longitud mínima", () => {
    // Arrange
    const clave = "Abc123";

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe tener una longitud mínima de 8 caracteres");
    });
});

describe("noContieneNombreUsuario", () => {
    it("debería devolver esValida si no contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "usuario123";
    const clave = "Abc123";

    // Act
    const resultado = noContieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado.esValida).toBe(true);
    });
});

describe("noContienePalabrasComunes", () => {
    it("debería devolver un error si está en la lista de contraseñas comunes", () => {
    // Arrange
    const clave = "password";

    // Act
    const resultado = noContienePalabrasComunes(clave, ["password", "123456"]);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no debe de contener palabras comunes");
    });
});

describe("validarClave", () => {
    it("debería devolver esValida si todas las validaciones son exitosas", () => {
    // Arrange
    const nombreUsuario = "usuario123";
    const clave = "Abc9@rty";
    const commonPasswords = ["password", "123456"];

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(true);
    });

    it("debería devolver el error concreto si alguna validación falla", () => {
    // Arrange
    const nombreUsuario = "usuario123";
    const clave = "password";
    const commonPasswords = ["password", "123456"];

    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);

    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener mayúsculas y minúsculas");
    });
});