// Import
import {Weed} from '/threads/strain.js';

// Export

// Global Vars
let plotRate = 1;
let l = 0;
let plotStrainNum = 0;


// Strain declaration + index
let weed = Weed(1, 1, 5, 10, 'img/x1', 'common');

// Weed growth checker
let grownStrains = [];

function checkGrowth(weed) {
    if(weed.growth === 10) {
        grownStrains.push(weed);
    }
}

let manager = {
    managerlvl:0,
    managerSec: 0,
    harvest: function() {
        for(let i; i <= grownStrains.length; i++) {
            grownStrains.pop();
        }
    },

}