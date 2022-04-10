var Test = /** @class */ (function () {
    function Test(button) {
        var _this = this;
        this.button = button;
        this.button.addEventListener("click", function () {
            _this.alert();
        });
    }
    Test.prototype.alert = function (message) {
        if (message === void 0) { message = "click"; }
        window.alert(message);
    };
    return Test;
}());
//# sourceMappingURL=test.js.map