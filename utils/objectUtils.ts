import {unitData} from '../concept-net/types/concept-net-type';

export function filterDuplicates(oriArr: unitData[]): unitData[] {
    return oriArr.filter((item, index) => {
        const itemStr = JSON.stringify(item);
        return index === oriArr.findIndex(obj => {
            return JSON.stringify(obj) === itemStr;
        });
    });
}
