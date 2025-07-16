import { validarClave } from "./main"; 

const commonPasswords: string[] = [
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