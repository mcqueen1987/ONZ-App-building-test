import {DataUtils} from "./dataUtils";

const axios = require("axios");

const base = "http://api.conceptnet.io";
const limitPerPage = 100;
const data = new DataUtils();

// todo make it recursive
const doProcess = term => {
    return doFetch(term)
        .then(response => {
            data.addData(response);
            return data.getTerm(term);
        })
        .then(childTerms => {
            // todo should foreach and doFetch each term
            return childTerms[0] ? doFetch(childTerms[0]) : {edges: []};
        })
        .then(response => {
            data.addData(response);
            return data.getTerm(term)
        })
        .catch(err => {
            console.log(err);
        });
};

const doFetch = term => {
    // ref: https://github.com/commonsense/conceptnet5/wiki/API#complex-queries
    const url = `${base}/query?rel=/r/IsA&start=/c/en/${term}&offset=0&limit=${limitPerPage}&format=json"`;
    return axios.get(url).then(result => result.data);
};

module.exports = doProcess;
