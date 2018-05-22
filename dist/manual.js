var basicHarvester = require('creep.basicHarvester');
var basicUpgrader = require('creep.basicUpgrader');

var manual =
{
    buildHarvester: function()
    {
        basicHarvester.build();
    },
    
    buildUpgrader: function()
    {
        basicUpgrader.build();
    }
}

module.exports = manual;