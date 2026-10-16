import { Car, Vehicle } from './vehicle.js';

console.log("=================================================");
console.log(" 🚗 TypeScript 5 Fundamentals Checkpoint - GoMyCode");
console.log("=================================================\n");

// 1. Instanciation de la classe Car implémentant Vehicle
const myCar: Vehicle = new Car("Toyota", "Corolla", 2021);

console.log("Informations du véhicule instancié :");
console.log(`- Marque (make) : ${myCar.make}`);
console.log(`- Modèle (model): ${myCar.model}`);
console.log(`- Année (year)  : ${myCar.year}\n`);

// 2. Appel de la méthode start()
console.log("Exécution de myCar.start() :");
myCar.start();

console.log("\nDeuxième exemple avec un véhicule électrique :");
const tesla: Car = new Car("Tesla", "Model S Plaid", 2024);
console.log(`Véhicule : ${tesla.getDetails()} (${tesla.getAge()} an(s))`);
tesla.start();

console.log("\n✅ Test TypeScript Fundamentals exécuté avec succès !");
