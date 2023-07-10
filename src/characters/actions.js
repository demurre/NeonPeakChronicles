const attack = ({ game, damage, character } = props) => {
  let { currentHP } = character;
  currentHP -= damage;
  game.updateHPBar(character);
};

export { attack };
