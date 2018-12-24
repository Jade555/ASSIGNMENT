const express = require('express')
const app = express()
const port = 3000

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

    let number = Number(startNumber);
    let results = []
    for (var i = 1; i <= index; i++) {
        number = number + (2 * (i - 1));
        results.push(number);
    }

    return results;
}

function seriesNumber2() {
    let result = 99 - 20 - 24
    return result;
}

function seriesNumber3(index) {

    let results = [{
        index: 1,
        value: 5
    }]
    for (var i = 1; i < index; i++) {
        var resultTmp = results.filter(f => f.index == i)[0];
        var tmp = (i + 1) + "" + resultTmp.value;
        temp = {
            index: i + 1,
            value: tmp
        }
        results.push(temp);
    }
    return results;
}