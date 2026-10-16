# 🚗 TypeScript 5 Fundamentals Checkpoint (GoMyCode)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?logo=typescript&logoColor=white)]()
[![Node](https://img.shields.io/badge/Node.js-v24-339933?logo=nodedotjs&logoColor=white)]()
[![Tests](https://img.shields.io/badge/Tests-Node%20Test%20Runner-22c55e.svg)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Projet réalisé dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint met en pratique les fondamentaux du langage **TypeScript** : la définition d'interfaces, l'implémentation de classes, le typage strict et la compilation via `tsc`.

---

## 📋 Table des Matières

- [Objectifs du Checkpoint](#-objectifs-du-checkpoint)
- [Cahier des Charges & Validation](#-cahier-des-charges--validation)
- [Code TypeScript Détaillé](#-code-typescript-détaillé)
- [Exécution & Tests](#-exécution--tests)
- [Auteur](#-auteur)

---

## 🎯 Objectifs du Checkpoint

1. Définir une interface nommée `Vehicle` comprenant :
   - `make: string`
   - `model: string`
   - `year: number`
   - `start(): void`
2. Créer une classe `Car` qui implémente l'interface `Vehicle` :
   - Un constructeur initialisant `make`, `model` et `year`.
   - L'implémentation de la méthode `start()` affichant `"Car engine started"` dans la console.
3. Instancier la classe `Car` avec des données réelles (ex: `"Toyota"`, `"Corolla"`, `2021`).
4. Appeler la méthode `start()` sur l'instance et vérifier son bon fonctionnement.
5. Valider la compilation `tsc` et les tests unitaires automatisés.

---

## ✅ Cahier des Charges & Validation

| Consigne GoMyCode | Réalisation | Statut |
| :--- | :--- | :---: |
| **Interface Vehicle** | `make: string`, `model: string`, `year: number`, `start(): void` | ✅ Conforme |
| **Classe Car implements Vehicle** | Propriétés publiques typées + constructeur | ✅ Conforme |
| **Méthode start()** | Affiche `"Car engine started"` dans la console | ✅ Conforme |
| **Instanciation & Test** | Instance `Car` créée et méthode `start()` invoquée | ✅ Conforme |
| **Typage strict & Compilation** | `tsconfig.json` configuré en mode strict, compilation sans erreur | ✅ Conforme |
| **Suite de Tests Unitaires** | 4 tests validés via `node --test` | ✅ Conforme |

---

## 💻 Code TypeScript Détaillé

```typescript
// src/vehicle.ts
export interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

export class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  public start(): void {
    console.log("Car engine started");
  }
}

// src/index.ts
import { Car, Vehicle } from './vehicle.js';

const myCar: Vehicle = new Car("Toyota", "Corolla", 2021);
console.log(`Véhicule : ${myCar.make} ${myCar.model} (${myCar.year})`);
myCar.start(); // Affiche "Car engine started"
```

---

## 🚀 Exécution & Tests

```bash
# 1. Installer TypeScript
npm install

# 2. Compiler et exécuter l'application
npm start

# 3. Lancer la suite de tests unitaires
npm test
```

---

## 👨‍💻 Auteur

- **Darius Ange (Karma-22)**  
- Profil GitHub : [https://github.com/Karma-22](https://github.com/Karma-22)  
- GoMyCode Full Stack Software Developer Bootcamp
