import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        // Arrange
        let pipe = new StrengthPipe();
        
        // Act + Assert
        expect(pipe.transform(5)).toBe('5 (weak)');
    });
    
    it('should display strong if strong if strenght is 10', () => {
        // Arrange
        let pipe = new StrengthPipe();

        // Act + Assert
        expect(pipe.transform(10)).toBe('10 (strong)');
    });

    it('should display unbelievable if strenght is 25', () => {
        // Arrange
        let pipe = new StrengthPipe();

        // Act + Assert
        expect(pipe.transform(25)).toEqual('25 (unbelievable)');
    });

    it('should display weak if strength is -10', () => {
        // Arrange
        let pipe = new StrengthPipe();

        // Act + Assert
        expect(pipe.transform(-10)).toBe('-10 (weak)');
    });

    it('should not display strong if strength is 4', () => {
        // Arrange
        let pipe = new StrengthPipe();

        // Act + Assert
        expect(pipe.transform(4)).not.toBe('4 (strong)');
    })
})