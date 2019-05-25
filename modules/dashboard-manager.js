import Counter from './counter.js'

let DashboardManager = {};
let teamates = []; 
let counter = new Counter(0); 

DashboardManager.addTeamate = function(teamate) {
  counter.increment(); 
  teamates.push(teamate);
};

DashboardManager.getAllTeamates = function() {
  return teamates;
};

export default DashboardManager; 