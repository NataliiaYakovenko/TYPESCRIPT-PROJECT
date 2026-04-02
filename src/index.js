class DataMerger {
    merge(arr1, arr2) {
        return [...arr1, ...arr2];
    }
}
const dataMerger = new DataMerger();
const result = dataMerger.merge([1, 2, 3], ["a", "b", "c"]);
console.log(result);
