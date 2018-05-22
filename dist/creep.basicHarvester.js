var commands = require('creep.commands');

var basicHarvester =
{
    run: function(creep)
    {
        if(creep.carry.energy < creep.carryCapacity)
        {
            commands.moveToHarvest(creep);
        }
    
        else if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity)
        {
            commands.transferToSpawn(creep);
        }
    },
    
    build: function()
    {
        Game.spawns['Spawn1'].spawnCreep([MOVE, MOVE, WORK, CARRY], "Harvester" + Game.time.toString(), {memory: {role: 'Harvester'}});
    }
};

module.exports = basicHarvester;