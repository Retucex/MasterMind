var commands = require('./creep.commands');
var c = require('./myConst');

module.exports =
{
    run: function(creep)
    {
        if(!creep.memory.target)
        {
            creep.memory.target = creep.room.find(FIND_MY_SPAWNS)[0];

            if(creep.memory.target.energy >= creep.memory.target.energyCapacity)
            {
                const targets = _.filter(creep.room.find(FIND_MY_STRUCTURES),
                    function(o) { return o.structureType == STRUCTURE_SPAWN || o.structureType == STRUCTURE_EXTENSION; });

                for(var t in targets)
                {
                    if(t.energy < t.energyCapacity)
                    {
                        creep.memory.target = t;
                        break;
                    }
                }
            }
        }

        if(creep.memory.task == c.TASK.HARVEST)
        {
            if(creep.carry.energy < creep.carryCapacity)
            {
                commands.moveToHarvest(creep);
            }
        
            else
            {
                commands.moveToTransfer(creep, creep.memory.target);
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