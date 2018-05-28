var basicHarvester = require('creep.basicHarvester');
var basicUpgrader = require('creep.basicUpgrader');
var creepSpawner = require('creepSpawner');

var manual =
{
    buildHarvester: function()
    {
        basicHarvester.build();
    },
    
    buildUpgrader: function()
    {
        basicUpgrader.build();
    },

    // Log results to console
    logToConsole: function()
    {
        var creepsByRoom = creepSpawner.aggregateCreeps();

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

module.exports = manual;