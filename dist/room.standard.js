module.exports =
{
    run: function(room)
    {
        var sources = Game.rooms[room].find(FIND_SOURCES);
        for(var source in sources)
        {
            console.log(room + " " + source);
        }
    }
}