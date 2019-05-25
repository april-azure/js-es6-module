import DashboardManager from './modules/dashboard-manager.js'
import { Teamate } from './modules/teamate.js';

console.log('loaded!');

let $button = document.getElementById('btn-register');
let $name = document.getElementById('teamate-name');
let $skill = document.getElementById('teamate-skill');
let $info = document.getElementById('info-panel');

let onClick = function() {
  let name = $name.value;
  let skill = $skill.value;

  $name.value = ''
  $skill.value = '';

  console.log(`teamate: ${name}`);
  console.log(`skill: ${skill}`);

  let teammate = new Teamate(name, skill);
  DashboardManager.addTeamate(teammate);
  updateCounts(); 
};

let updateCounts = function() {
  let teamates = DashboardManager.getAllTeamates();
  $info.innerText = `Current team size: ${teamates.length}`;
};

$button.addEventListener('click', onClick);
