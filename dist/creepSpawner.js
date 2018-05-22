var basicHarvester = require('creep.basicHarvester');
var basicUpgrader = require('creep.basicUpgrader');

var creepSpawner =
{
    run: function()
    {
        var creepsByRoom = aggregateCreeps();
        logToConsole(creepsByRoom);
        
        for(var room in creepsByRoom)
        {
            var rolesInRoom = creepsByRoom[room];

            if(rolesInRoom['Upgrader'] < 4)
            {
                Game.rooms[room].find(FIND_MY_SPAWNS)[0].spawnCreep([MOVE, MOVE, WORK, CARRY], "Upgrader" + Game.time.toString(), {memory: {role: 'Upgrader', task: 'harvest'}});
            }
            
            if(rolesInRoom['Harvester'] < 2)
            {
                Game.rooms[room].find(FIND_MY_SPAWNS)[0].spawnCreep([MOVE, MOVE, WORK, CARRY], "Harvester" + Game.time.toString(), {memory: {role: 'Harvester'}});
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