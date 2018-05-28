var commands = require('creep.commands');
var c = require('myConst');

var builder =
{
    run: function(creep)
    {
        if(creep.memory.task == c.TASK.HARVEST)
        {
            if(creep.carry.energy < creep.carryCapacity)
            {
                commands.moveToHarvest(creep);
            }
            else
            {
                creep.memory.task = c.TASK.BUILD;
            }
        }
    
        else if(creep.memory.task == c.TASK.BUILD)
        {
            if(creep.carry.energy > 0)
            {
                commands.moveToBuild(creep);
            }
            else
            {
                creep.memory.task = c.TASK.HARVEST;
            }
        }

        else
        {
            creep.say('No Bueno');
        }
    },
    
    build: function(spawnName)
    {
        Game.spawns[spawnName].spawnCreep([MOVE, MOVE, WORK, CARRY],
            c.ROLE.BUILDER + Game.time.toString(),
            {memory: {role: c.ROLE.BUILDER, task: c.TASK.HARVEST, spawner: spawnName}});
    }
};

module.exports = builder;