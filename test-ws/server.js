const express = require('express')
const app = express()
const port = 3000
var cache = require('memory-cache');
app.get('/q1/:index', (req, res) => {



    let index = req.params.index;
    let startNumber = 3;
    res.status(200).send({
        status: true,
        results: seriresNumber1(startNumber, index)
    });


});

app.get('/q2', (req, res) => {

    res.status(200).send({
        status: true,
        results: seriesNumber2()
    });


});

app.get('/q3/:index', (req, res) => {


    let index = req.params.index;
    res.status(200).send({
        status: true,
        results: seriesNumber3(index)
    });


});

app.listen(port, () => console.log(`app listening on port ${port}!`))

function seriresNumber1(startNumber, index) {

    /* 
        1. Check Cache data from memory cache
        2. return data
    */
    let cacheData = []
    let localData = cache.get("ansQ1");
    if (localData != null) {
        cacheData = localData;
    }
    var findKey = cacheData.filter(f => f.key == index);
    let results = []
    if (findKey.length == 0) {
        let number = Number(startNumber);

        for (var i = 1; i <= index; i++) {
            number = number + (2 * (i - 1));
            results.push(number);
        }
        let tmpCache = {
            key: index,
            value: results
        }
        cacheData.push(tmpCache);
        cache.put("ansQ1", cacheData);
    } else {
        results = findKey[0].value;
    }
    return results;
}

function seriesNumber2() {
    let localData = cache.get("ansQ2");
    let result = 0;
    if (!localData) {
        result = 99 - 20 - 24
        cache.put("ansQ2", result);
    } else {
        result = localData;
    }

    return result;
}

function seriesNumber3(index) {
    /* 
        1. Check Cache data from memory cache
        2. return data
    */
    let cacheData = []
    let localData = cache.get("ansQ3");
    if (localData != null) {
        cacheData = localData;
    }
    var findKey = cacheData.filter(f => f.key == index);
    let results = [{
        index: 1,
        value: 5
    }]
    if (findKey.length == 0) {
        for (var i = 1; i < index; i++) {
            var resultTmp = results.filter(f => f.index == i)[0];
            var tmp = (i + 1) + "" + resultTmp.value;
            temp = {
                index: i + 1,
                value: tmp
            }
            results.push(temp);
        }
        let tmpCache = {
            key: index,
            value: results
        }
        cacheData.push(tmpCache);
        cache.put("ansQ3", cacheData);
    } else {
        results = findKey[0].value;
    }

    return results;
}