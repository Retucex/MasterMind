var commands = require('./creep.commands');
var c = require('./myConst');

module.exports =
{
    run: function(creep)
    {
        if(creep.memory.task == c.TASK.HARVEST)
        {
            if(creep.carry.energy < creep.carryCapacity)
            {
                commands.moveToHarvest(creep);
            }
        
            else if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity)
            {
                commands.transferToSpawn(creep);
            }

            else
            {
                creep.say('No bueno');
            }
        }
        
    },
    
    build: function(spawnName)
    {
        Game.spawns[spawnName].spawnCreep([MOVE, MOVE, WORK, CARRY],
            c.ROLE.HARVESTER.NAME + Game.time.toString(),
            {memory: {role: c.ROLE.HARVESTER.NAME, task: c.TASK.HARVEST, spawner: spawnName}});
    }
};