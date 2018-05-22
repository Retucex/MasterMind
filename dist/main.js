var harvester = require('creep.basicHarvester');
var upgrader = require('creep.basicUpgrader');
var creepSpawner = require('creepSpawner');

// iterate Memory.creeps to find dead creeps
for(var i in Memory.creeps)
{
    if(!Game.creeps[i])
    {
        delete Memory.creeps[i];
    }
    
}

for(var name in Game.creeps)
{
    var creep = Game.creeps[name];
    
    if(creep.memory.role == 'Harvester')
    {
        harvester.run(creep);
    }
    
    if(creep.memory.role == 'Upgrader')
    {
        upgrader.run(creep);
    }
}

creepSpawner.run();