var commands = require('creep.commands');

var basicUpgrader =
{
    run: function(creep)
    {
        if(creep.memory.task == 'harvest')
        {
            if(creep.carry.energy < creep.carryCapacity)
            {
                commands.moveToHarvest(creep);
            }
            else
            {
                creep.memory.task = 'upgrade';
            }
        }
    
        else if(creep.memory.task == 'upgrade')
        {
            if(creep.carry.energy > 0)
            {
                commands.moveToUpgrade(creep);
            }
            else
            {
                creep.memory.task = 'harvest';
            }
        }
    },
    
    build: function()
    {
        Game.spawns['Spawn1'].spawnCreep([MOVE, MOVE, WORK, CARRY], "Upgrader" + Game.time.toString(), {memory: {role: 'Harvester', task: 'harvest'}});
    }
};

module.exports = basicUpgrader;