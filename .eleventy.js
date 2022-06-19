
//
const glob = require('glob');

//
module.exports = function(eleventyConfig) {

    //copy over any images
    eleventyConfig.addPassthroughCopy('src/images');

    //
    eleventyConfig.addGlobalData('currentYear', String(new Date().getFullYear()));

    //
    eleventyConfig.addGlobalData('floorCount', glob.sync('./public/images/floor*.avif').length);

    //define the default input and output folders
    return {
        dir: {
            input: './src',
            output: './public/'
        }
    };

};