var harvester = require('./creep.harvester');
var upgrader = require('./creep.upgrader');
var builder = require('./creep.builder');
var c = require('./myConst');

module.exports =
{
    run: function()
    {
        var creepsByRoom = countCreeps();
        
        for(var room in creepsByRoom)
        {
            var rolesInRoom = creepsByRoom[room];

            //TODO add logic for multiple spawner
            var spawnName = Game.rooms[room].find(FIND_MY_SPAWNS)[0].name;

            //Harvester
            if(!(c.ROLE.HARVESTER.NAME in rolesInRoom) || rolesInRoom[c.ROLE.HARVESTER.NAME] < c.ROLE.HARVESTER.LIMIT)
            {
                harvester.build(spawnName, Game.rooms[room].find(FIND_MY_SPAWNS)[0].id);
            }

            //Upgrader
            if(!(c.ROLE.UPGRADER.NAME in rolesInRoom) || rolesInRoom[c.ROLE.UPGRADER.NAME] < c.ROLE.UPGRADER.LIMIT)
            {
                upgrader.build(spawnName, Game.rooms[room].find(FIND_MY_SPAWNS)[0].id);
            }

            //Builder
            if(!(c.ROLE.BUILDER.NAME in rolesInRoom) || rolesInRoom[c.ROLE.BUILDER.NAME] < c.ROLE.BUILDER.LIMIT)
            {
                if(Game.rooms[room].find(FIND_MY_CONSTRUCTION_SITES).length > 0)
                {
                    builder.build(spawnName);
                }
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