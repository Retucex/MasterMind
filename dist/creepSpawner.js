var harvester = require('creep.harvester');
var upgrader = require('creep.upgrader');
var c = require('myConst');

var creepSpawner =
{
    run: function()
    {
        var creepsByRoom = aggregateCreeps();
        logToConsole(creepsByRoom);
        
        for(var room in creepsByRoom)
        {
            var rolesInRoom = creepsByRoom[room];

            //TODO add logic for multiple spawner
            var spawnName = Game.rooms[room].find(FIND_MY_SPAWNS)[0].name;

            if(!(c.ROLE.UPGRADER in rolesInRoom) || rolesInRoom[c.ROLE.UPGRADER] < 10)
            {
                upgrader.build(spawnName);
            }
            
            if(!(c.ROLE.HARVESTER in rolesInRoom) || rolesInRoom[c.ROLE.HARVESTER] < 5)
            {
                harvester.build(spawnName);
            }
        }
        
    }
};

//Aggregate all creeps by room and by roles
function aggregateCreeps()
{
    var creepsByRoom = {};
    
    for(var roomName in Game.rooms)
    {
        var room = Game.rooms[roomName];
        
        var creepsByRole = {};
        for(var name in Game.creeps)
        {
            var creep = Game.creeps[name];
            
            if(!(creep.memory.role in creepsByRole))
            {
                creepsByRole[creep.memory.role] = 1;
            }
            else
            {
                creepsByRole[creep.memory.role] += 1;
            }
        }
        
        creepsByRoom[room.name] = creepsByRole;
    }
    
    return creepsByRoom;
}

// Log results to console
function logToConsole(creepsByRoom)
{
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

module.exports = creepSpawner