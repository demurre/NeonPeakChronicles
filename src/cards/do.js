import {
  enemy1,
  enemy1HPBar,
  enemy2,
  enemy2HPBar,
} from '../characters/enemies.js';
import { updateHPBar } from '../characters/shared.js';

const attackEnemy = (enemy, damage) => {
  enemy.currentHP -= damage;

  if (enemy.currentHP <= 0) {
    // enemy був убитий, виконати відповідні дії
  }

  updateHPBar(enemy.hpBar, enemy.currentHP, enemy.baseHP);
};

const init = () => {
  const damage = 5; // Визначте значення пошкодження

  attackEnemy(enemy1, damage); // Передайте enemy1 та damage для атаки
  attackEnemy(enemy2, damage); // Передайте enemy2 та damage для атаки

  if (enemy1.currentHP <= 0) {
    // enemy1 був убитий, виконати відповідні дії
  }

  if (enemy2.currentHP <= 0) {
    // enemy2 був убитий, виконати відповідні дії
  }

  updateHPBar(enemy1HPBar.hpBar, enemy1.currentHP, enemy1.baseHP);

  updateHPBar(enemy2HPBar.hpBar, enemy2.currentHP, enemy2.baseHP);
};

export default init;
