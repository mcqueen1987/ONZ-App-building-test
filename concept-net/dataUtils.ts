import {filterDuplicates} from '../utils/objectUtils';
import {unitDataObj} from './types/concept-net-type';
const get = require("lodash/get");

interface FormatDataParams {
    ret: unitDataObj;
    conceptData: {edges: unknown[]};
}

const formatData = ({ret, conceptData}: FormatDataParams) => {
    conceptData.edges.forEach(edge => {
        const src = get(edge, "start.label", "").toLowerCase();
        const endLabel = get(edge, "end.label", "");
        const relations = get(edge, "rel.@id", "");
        const weight = get(edge, "weight", 0);
        // filter with all the term’s English language parent (IsA) concepts
        if (relations === "/r/IsA") {
            ret[src] = ret[src] || [];
            ret[src].push({endLabel, weight});
        }
    });

    for (const [key, value] of Object.entries(ret)) {
        ret[key] = filterDuplicates(value);
    }

    return ret;
};

const byWeight = (a, b) => b.weight - a.weight;

export class DataUtils {
    private internalData: {};

    constructor() {
        this.internalData = {};
    }

    addData(data) {
        try {
            formatData({ret : this.internalData, conceptData : data});
        } catch (err) {
            console.error(err);
            console.log("Invalid data", data);
        }
    }

    getTerm(term) {
        const labels = get(this.internalData, term, []); // object, path, defaultValue
        return labels.sort(byWeight).map(obj => obj.endLabel);
    }
}
