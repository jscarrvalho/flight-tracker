var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {

    //Check if a new flight fits into next chain position.
    function itFits(flight, chained) {
        return chained.length === 0 || chained[chained.length - 1][1] === flight[0];
    }

    //Chain Flights
    function chainFlights(flights, chained) {

        //If chained is the size of the original, then it's done
        if(chained.length === reqBodyFlights.length) {
            return true;
        }

        //iterates over items to build possibilities
        for (let i= 0; i < flights.length;i++) {
            //Get flight to test if fits
            const flight = flights[i];
            if (itFits(flight, chained)) {
                //Flight fits, add into chain
                chained.push(flight);
                //Create a possibilities for a subset
                if(chainFlights(flights.toSpliced(i,1), chained)) return true;
                //Didn't work, goes back
                chained.pop();
            }
        }
        return false;
    }


    const reqBodyFlights = req.body;
    let chained = [];
    chainFlights(reqBodyFlights, chained);

    //Returning starting and ending at airports
    let ret = [];
    if (chained.length > 0) ret = [chained[0][0],chained[chained.length-1][1]];

    res.json(ret);
});

module.exports = router;
