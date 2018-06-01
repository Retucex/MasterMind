var commands = require('./creep.commands');
var c = require('./myConst');

module.exports =
{
    run: function(creep)
    {

        if(creep.memory.target != null)
        {
            var tar = Game.getObjectById(creep.memory.target)

            if(tar.energy < 50)
            {
                const targets = _.filter(creep.room.find(FIND_MY_STRUCTURES),
                    function(o) { return o.structureType == STRUCTURE_SPAWN || o.structureType == STRUCTURE_EXTENSION; });

                for(var t in targets)
                {
                    if(t.energy > 50)
                    {
                        creep.memory.target = t.id;
                        break;
                    }
                }
            }
        }
        else
        {
            creep.memory.target = creep.room.find(FIND_MY_SPAWNS)[0].id;
        }

        if(creep.memory.task == c.TASK.HARVEST)
        {
            if(creep.carry.energy < creep.carryCapacity)
            {
                commands.moveToWithdraw(creep, creep.memory.target);
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
    
    build: function(spawnName, spawnId)
    {
        Game.spawns[spawnName].spawnCreep([MOVE, MOVE, WORK, CARRY],
            c.ROLE.UPGRADER.NAME + Game.time.toString(),
            {memory: {role: c.ROLE.UPGRADER.NAME,
                task: c.TASK.HARVEST,
                spawner: spawnName,
                target = spawnId}});
    }
};