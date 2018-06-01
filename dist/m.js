var basicHarvester = require('./creep.harvester');
var basicUpgrader = require('./creep.upgrader');
var creepSpawner = require('./creepSpawner');

module.exports =
{
    logBasics: function() {
        console.log("---CPU---");
        console.log("Limit: " + Game.cpu.limit);
        console.log("Tick Limit: " + Game.cpu.tickLimit);
        console.log("Bucket: " + Game.cpu.bucket);
        console.log();

        return OK;
    },

    buildHarvester: function()
    {
        basicHarvester.build();
    },
    
    buildUpgrader: function()
    {
        basicUpgrader.build();
    },

    // Log results to console
    logCreepTypes: function()
    {
        var creepsByRoom = creepSpawner.countCreeps();

        for(var room in creepsByRoom)
        {
            console.log(room);
            var rolesInRoom = creepsByRoom[room];
            
            for(var role in rolesInRoom)
            {
                console.log(role + ": " + rolesInRoom[role]);
            }
        }
        
        return OK
    }
}