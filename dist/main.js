var c = require('myConst');
var harvester = require('creep.harvester');
var upgrader = require('creep.upgrader');
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
    
    if(creep.memory.role == c.ROLE.HARVESTER)
    {
        harvester.run(creep);
    }
    
    if(creep.memory.role == c.ROLE.UPGRADER)
    {
        upgrader.run(creep);
    }
}

creepSpawner.run();