define(function () {
    'use strict';
    var Container;
    Container = (function () {
        function Container() {
            this._sections = [];
        }

        Container.prototype.add = function (section) {
            this._sections.push(section);
        };

        Container.prototype.getData = function () {
            var sections = this._sections.slice();

            return sections;
        };

        return Container;
    }());
    return Container;
});