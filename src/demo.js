
var Demo = function() {
};

Demo.prototype.test = function() {
    return 42;
};

Demo.prototype.anotherTest = function(value) {
    if (value < 0) {
        return 42;
    } else {
        return 0;
    }
};



module.exports.Demo = Demo;