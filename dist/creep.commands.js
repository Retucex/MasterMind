_ = require('lodash');

module.exports =
{
    moveToHarvest: function(creep)
    {
        var sources = creep.room.find(FIND_SOURCES);
        
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
        {
            creep.moveTo(sources[0]);
        }
    },
    	
    moveToTransfer: function(creep)
    {
        const targets = _.filter(creep.room.find(FIND_MY_STRUCTURES),
            function(o) { return o.structureType == STRUCTURE_SPAWN || o.structureType == STRUCTURE_EXTENSION; });

        for(var target in targets)
        {
            if(target.energy < target.energyCapacity)
            {
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(target);
                }
            }
        }
        
    },
    
    moveToUpgrade: function(creep)
    {
        if(creep.room.controller)
        {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(creep.room.controller);
            }
        }
    },

    moveToBuild: function(creep)
    {
        const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
        if(target)
        {
            if(creep.build(target) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(target);
            }
        }
    }
};