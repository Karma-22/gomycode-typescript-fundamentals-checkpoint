/**
 * Interface Vehicle définissant le contrat de type requis par GoMyCode
 */
export interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

/**
 * Classe Car implémentant l'interface Vehicle
 */
export class Car implements Vehicle {
  public make: string;
  public model: string;
  public year: number;

  /**
   * Constructeur pour initialiser les propriétés de la voiture
   * @param make Marque du véhicule (ex: Toyota, Tesla, Porsche)
   * @param model Modèle du véhicule (ex: Corolla, Model 3, 911)
   * @param year Année de fabrication (ex: 2024)
   */
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /**
   * Méthode start() requise : affiche "Car engine started" dans la console
   */
  public start(): void {
    console.log("Car engine started");
  }

  /**
   * Méthode utilitaire retournant les détails formatés du véhicule
   */
  public getDetails(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }

  /**
   * Méthode utilitaire calculant l'âge du véhicule
   */
  public getAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}
