import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroesService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'Spider Dude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'Super Dude', strength: 55 },
        ];

        mockHeroesService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroesService);
    });

    describe('deleteHero', () => {
        it('should remove the indicated hero from the heroes list', () => {
            // Arrange
            mockHeroesService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            // Act
            component.delete(HEROES[2]);

            // Assert
            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero', () => {
            // Arrange
            mockHeroesService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            // Act
            component.delete(HEROES[2]);

            // Assert
            expect(mockHeroesService.deleteHero).toHaveBeenCalled();
        });

        it('should have been called with deleteHero', () => {
            // Arrange
            mockHeroesService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            // Act
            component.delete(HEROES[2]);

            // Assert
            expect(mockHeroesService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });

    describe('addHero', () => {
        it('should add the hero to the heroes list', () => {
            // Arrange
            mockHeroesService.addHero.and.returnValue(of(true));
            component.heroes = HEROES;

            // Act
            component.add('Rich Dude');

            // Assert
            expect(component.heroes.length).toBe(4);
        });

        it('should have called addHero', () => {
            // Arrange
            mockHeroesService.addHero.and.returnValue(of(true));
            component.heroes = HEROES;

            // Act
            component.add('Iron Man');

            // Assert
            expect(mockHeroesService.addHero).toHaveBeenCalled();
        });

        it('should have been called with addHero', () => {
            // Arrange
            mockHeroesService.addHero.and.returnValue(of(true));
            component.heroes = HEROES;

            // Act
            component.add('Iron Man');

            // Assert
            expect(mockHeroesService.addHero).toHaveBeenCalledWith({name: 'Iron Man', strength: 11});
        })
    });

    // describe('getHero', () => {
    //     it('should return the list of heroes', () => {
    //         mockHeroesService.getHeroes.and.returnValue(of(true));
    //         component.heroes = HEROES;

    //         let result = component.getHeroes();
            
    //         expect(result).toHaveSize(3);
    //     });
    // });
})