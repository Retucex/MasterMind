var _ = require('lodash');
var c = require('myConst');
var creep_harvester = require('creep.harvester');
var creep_upgrader = require('creep.upgrader');
var creep_builder = require('creep.builder');
var room_standard = require('room.standard');
var creepSpawner = require('creepSpawner');

module.exports.loop = function()
{
    // iterate Memory.creeps to find dead creeps
    for(var i in Memory.creeps)
    {
        if(!Game.creeps[i])
        {
            delete Memory.creeps[i];
        }
        
    }

    for(var creepKey in Game.creeps)
    {
        var creep = Game.creeps[creepKey];
        
        if(creep.memory.role == c.ROLE.HARVESTER)
        {
            creep_harvester.run(creep);
        }
        
        else if(creep.memory.role == c.ROLE.UPGRADER)
        {
            creep_upgrader.run(creep);
        }

        else if(creep.memory.role == c.ROLE.BUILDER)
        {
            creep_builder.run(creep);
        }
    }

    for(var roomKey in Game.rooms)
    {
        var room = Game.rooms[roomKey];

        room_standard.run(room);
    }

    creepSpawner.run();
}