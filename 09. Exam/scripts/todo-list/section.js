define(function () {
    'use strict';
    var Section;
    Section = (function () {
        function Section(title) {
            this.title = title;
            this._items = [];
        }

        Section.prototype.add = function (item) {
            var itemToAdd = item || { content: 'null' };
            this._items.push(itemToAdd);
        };

        Section.prototype.getData = function () {
            return JSON.stringify(this);
        };

        return Section;
    }());

    return Section;
});