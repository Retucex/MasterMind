// Module
var some_module = {

    /** @param {p} p **/
    run: function(p) {
	}
};

module.exports = some_module;



// Main
var some_module = require('role.harvester');

for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    if(creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
    }
}


// Misc
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'basicHarvester1', {memory: {role: "basicHarvester"}});