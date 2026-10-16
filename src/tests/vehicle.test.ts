import test from 'node:test';
import assert from 'node:assert';
import { Car, Vehicle } from '../vehicle.js';

test('Vehicle Interface & Car Class Implementation', async (t) => {
  await t.test('Car should correctly instantiate with make, model and year', () => {
    const car: Vehicle = new Car('Honda', 'Civic Type R', 2023);
    assert.strictEqual(car.make, 'Honda');
    assert.strictEqual(car.model, 'Civic Type R');
    assert.strictEqual(car.year, 2023);
  });

  await t.test('start() method should execute without throwing and log engine message', () => {
    const car = new Car('Porsche', '911 GT3 RS', 2024);
    
    // Capture stdout
    let logged = '';
    const originalLog = console.log;
    console.log = (msg: any) => {
      logged += msg;
    };

    try {
      car.start();
      assert.strictEqual(logged, 'Car engine started');
    } finally {
      console.log = originalLog;
    }
  });

  await t.test('getDetails() should format full vehicle string', () => {
    const car = new Car('Audi', 'RS6 Avant', 2022);
    assert.strictEqual(car.getDetails(), '2022 Audi RS6 Avant');
  });

  await t.test('getAge() should compute correct vehicle age', () => {
    const currentYear = new Date().getFullYear();
    const car = new Car('BMW', 'M3', 2020);
    assert.strictEqual(car.getAge(), currentYear - 2020);
  });
});
