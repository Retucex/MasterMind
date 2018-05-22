var commands = require('creep.commands');
var c = require('myConst');

var harvester =
{
    run: function(creep)
    {
        if(creep.carry.energy < creep.carryCapacity)
        {
            commands.moveToHarvest(creep);
        }
    
        else if(Game.spawns[creep.memory.spawner].energy < Game.spawns[creep.memory.spawner].energyCapacity)
        {
            commands.transferToSpawn(creep);
        }

        else
        {
            creep.say('No bueno');
        }
    },
    
    build: function(spawnName)
    {
        Game.spawns[spawnName].spawnCreep([MOVE, MOVE, WORK, CARRY],
            c.ROLE_HARVESTER + Game.time.toString(),
            {memory: {role: c.ROLE_HARVESTER, spawner: spawnName}});
    }
};

module.exports = harvester;