define(function () {
    'use strict';
    var Item;
    Item = (function () {
        function Item(content) {
            if (typeof content === 'string' || content instanceof String) {
                this.content = content;
            }
            else {
                console.log('the content cannot be null, empty or undefined!');
            }
        }

        Item.prototype.getData = function () {
            return JSON.stringify(this);
        };

        return Item;
    })();
    return Item;
});