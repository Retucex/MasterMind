module.exports =
{
    run: function(room)
    {
        var sources = room.find(FIND_SOURCES);
        for(var s in sources)
        {
            var terrain = room.lookForAtArea(LOOK_TERRAIN, sources[s].pos.y + 1,
                sources[s].pos.x - 1,
                sources[s].pos.y - 1,
                sources[s].pos.x + 1,
                true);
        }
    }
}