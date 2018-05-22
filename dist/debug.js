var debug = {
    info: function() {
        console.log("---CPU---");
        console.log("Limit: " + Game.cpu.limit);
        console.log("Tick Limit: " + Game.cpu.tickLimit);
        console.log("Bucket: " + Game.cpu.bucket);
        console.log();

        return OK;
    }
};
module.exports = debug;