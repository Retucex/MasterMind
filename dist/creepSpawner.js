var harvester = require('creep.harvester');
var upgrader = require('creep.upgrader');
var builder = require('creep.builder');
var c = require('myConst');

var creepSpawner =
{
    run: function()
    {
        var creepsByRoom = countCreeps();
        
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

            if(!(c.ROLE.BUILDER in rolesInRoom) || rolesInRoom[c.ROLE.BUILDER] < 2)
            {
                builder.build(spawnName);
            }
        }
        
    },

    countCreeps: countCreeps
};

//Aggregate all creeps by room and by roles
function countCreeps()
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

module.exports = creepSpawner