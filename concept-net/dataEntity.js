const get = require("lodash/get");

const formatData = (map = {}, conceptData) => {
    conceptData.edges.forEach(edge => {
        const src = get(edge, "start.label", "");
        const endLabel = get(edge, "end.label", "");
        const relations = get(edge, "rel.@id", "");
        const weight = get(edge, "weight", 0);
        if ( relations === "/r/IsA" ) {
            const tmpItem = map[src] || [];
            tmpItem.push({endLabel, weight});
            map[src] = tmpItem;
        }
    });
    return map;
};

const byWeight = (a, b) => b.weight - a.weight;

class DataEntity {
    constructor() {
        this.internalData = {};
    }

    addData(data) {
        try {
            formatData(this.internalData, data);
        } catch (err) {
            console.error(err);
            console.log("Invalid data", data);
        }
    }

    getTerm(term) {
        console.log(this.internalData);
        // console.log([term]);
        const labels = get(this.internalData, term, []); // object, path, defaultValue
        // console.log(labels);
        // process.exit(1);
        return labels.sort(byWeight).map(obj => obj.endLabel);
    }
}

module.exports = DataEntity;
