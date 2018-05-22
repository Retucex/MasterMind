var commands = require('creep.commands');
var c = require('myConst');

var upgrader =
{
    run: function(creep)
    {
        if(creep.memory.task == c.TASK_HARVEST)
        {
            if(creep.carry.energy < creep.carryCapacity)
            {
                commands.moveToHarvest(creep);
            }
            else
            {
                creep.memory.task = c.TASK_UPGRADE;
            }
        }
    
        else if(creep.memory.task == c.TASK_UPGRADE)
        {
            if(creep.carry.energy > 0)
            {
                commands.moveToUpgrade(creep);
            }
            else
            {
                creep.memory.task = c.TASK_HARVEST;
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
            "Upgrader" + Game.time.toString(),
            {memory: {role: c.ROLE_UPGRADER, task: c.TASK_HARVEST, spawner: spawnName}});
    }
};

module.exports = upgrader;