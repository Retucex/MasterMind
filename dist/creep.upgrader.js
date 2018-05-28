var commands = require('creep.commands');
var c = require('myConst');

var upgrader =
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
                creep.memory.task = c.TASK.UPGRADE;
            }
        }
    
        else if(creep.memory.task == c.TASK.UPGRADE)
        {
            if(creep.carry.energy > 0)
            {
                commands.moveToUpgrade(creep);
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
            c.ROLE.UPGRADER + Game.time.toString(),
            {memory: {role: c.ROLE.UPGRADER, task: c.TASK.HARVEST, spawner: spawnName}});
    }
};

module.exports = upgrader;