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
    	
    moveToTransfer: function(creep, target)
    {
        var t = Game.getObjectById(target)
        if(t.energy < t.energyCapacity)
        {
            if(creep.transfer(t, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(t);
            }
        }
    },

    moveToWithdraw: function(creep, target)
    {
        var t = Game.getObjectById(target)
        if(creep.withdraw(t, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
        {
            creep.moveTo(t);
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