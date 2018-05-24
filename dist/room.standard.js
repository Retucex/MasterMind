module.exports =
{
    run: function(room)
    {
        var sources = room.find(FIND_SOURCES);
        for(var source in sources)
        {
            var terrain = room.lookForAtArea(LOOK_TERRAIN, source.pos.y + 1,
                                                            source.pos.x - 1,
                                                            source.pos.y - 1,
                                                            source.pos.x + 1,
                                                            true);
            console.log(source + " " + terrain);
        }
    }
}