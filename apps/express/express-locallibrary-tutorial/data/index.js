const data = {};

function setItem(key, value) {
    data[key] = value;
}

function getItem(key) {
    return data[key];
}

function removeItem(key) {
    delete data[key];
}

function clear() {
    Object.keys(data).forEach(key => delete data[key]);
}

module.exports = {
    setItem,
    getItem,
    removeItem,
    clear,
    data
}