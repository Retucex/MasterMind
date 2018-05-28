module.exports =
{
    moveToHarvest: function(creep)
    {
        var sources = creep.room.find(FIND_SOURCES);
        
        if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE)
        {
            creep.moveTo(sources[1]);
        }
    },
    	
    transferToSpawn: function(creep)
    {
        if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
        {
            creep.moveTo(Game.spawns['Spawn1']);
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