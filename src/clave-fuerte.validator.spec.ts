import { validarClave } from "./main";
import { tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, noContieneNombreUsuario, noContienePalabrasComunes } from "./clave-fuerte.validator"


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
        expect(resultado.error).toBe('La clave debe de tener números');
    });

    it('debe de fallar, si la contraseña no tiene 8 caracteres', () => {
        // Arrange
        const clave = 'Ab1@C';

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe("La clave debe tener una longitud mínima de 8 caracteres");
    });

    it('debe de fallar, cuando la contraseña, si no tiene caracteres especiales', () => {
        // Arrange
        const clave = 'test123User';

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe("La clave debe de tener caracteres especiales");
    });

    it('debe de fallar, cuando la contraseña, si contiene el nombre del usuario', () => {
        // Arrange
        const clave = 'Passwordtestuser12@';

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe('La clave no debe tener el nombre del usuario');
    });

    it('debe de fallar, cuando la contraseña, si contiene palabras comunes', () => {
        // Arrange
        const clave = 'Passwordqwerty12@';

        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe('La clave no debe de contener palabras comunes');
    })

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

    it("debería devolver un error si no tiene mayúsculas y minúsculas", () => {
        // Arrange
        const clave = "prueba";

        // Act
        const resultado = tieneMayusculasYMinusculas(clave);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe("La clave debe de tener mayúsculas y minúsculas");
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

    it("debería devolver un error si no tiene números", () => {
        // Arrange
        const clave = "AbCdEf";

        // Act
        const resultado = tieneNumeros(clave);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe("La clave debe de tener números");
    });
});

describe("tieneCaracteresEspeciales", () => {
    it("debería devolver esValida si tiene caracteres especiales", () => {
        // Arrange
        const clave = "Abc123@";

        // Act
        const resultado = tieneCaracteresEspeciales(clave);

        // Assert
        expect(resultado.esValida).toBe(true);
    });

    it("debería devolver un error si no tiene caracteres especiales", () => {
        // Arrange
        const clave = "Abc123";

        // Act
        const resultado = tieneCaracteresEspeciales(clave);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe("La clave debe de tener caracteres especiales");
    });
});

describe("tieneLongitudMinima", () => {
    it("debería devolver esValida si cumple con la longitud mínima", () => {
        // Arrange
        const clave = "AbCdEf12";

        // Act
        const resultado = tieneLongitudMinima(clave);

        // Assert
        expect(resultado.esValida).toBe(true);
    });

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

    it("debería devolver un error si contiene el nombre de usuario", () => {
        // Arrange
        const nombreUsuario = "usuario123";
        const clave = "Abc123usuario123";

        // Act
        const resultado = noContieneNombreUsuario(nombreUsuario, clave);

        // Assert
        expect(resultado.esValida).toBe(false);
        expect(resultado.error).toBe("La clave no debe tener el nombre del usuario");
    });
});

describe("tienePalabrasComunes", () => {
    it("debería devolver esValida si no está en la lista de contraseñas comunes", () => {
        // Arrange
        const clave = "Abc123";

        // Act
        const resultado = noContienePalabrasComunes(clave, ["password", "123456"]);

        // Assert
        expect(resultado.esValida).toBe(true);
    });

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