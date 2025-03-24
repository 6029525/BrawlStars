import { getFighter } from './modules/api.js';
import { Fighter } from './modules/Fighter.js';

// Knoppen dynamisch toevoegen
const buttonsContainer = document.getElementById('buttons-container');
const fighters = [1, 2, 3]; // IDs

fighters.forEach(id => {
  const button = document.createElement('button');
  button.textContent = `Fighter ${id}`;
  button.dataset.id = id;
  button.addEventListener('click', () => loadFighter(id));
  buttonsContainer.appendChild(button);
});

// Laad fighter-data + toon template
function loadFighter(id) {
  const data = getFighter(id);
  const fighter = new Fighter(
    data.id,
    data.name,
    data.gadget,
    Fighter.formatHealth(data.health) // Static method
  );
  renderFighter(fighter);
}

// Render template
function renderFighter(fighter) {
  const template = document.getElementById('fighter-template');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.name').textContent = fighter.name;
  clone.querySelector('.gadget').textContent = `Gadget: ${fighter.gadget}`;
  clone.querySelector('.health').textContent = `Health: ${fighter.health}`;

  document.getElementById('character-data').replaceChildren(clone);
}