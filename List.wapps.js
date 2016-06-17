/**
 * List library
 * Author: Ricardo Alves
 * Date: 16/06/2016
 * Mail: rasf19@hotmail.com
 * Twitter: @ricardoAlllves
 */
var List = (function () {
    function List(collection, capacity) {
        this.Items = collection || [];
        this.Capacity = capacity;
    }
    List.prototype.Add = function (item) {
        if (item != undefined)
            this.Items.push(item);
    };
    List.prototype.AddRange = function (collection) {
        if (collection != undefined) {
            for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
                var item = collection_1[_i];
                this.Items.push(item);
            }
        }
    };
    List.prototype.ForEach = function (action) {
        if (action != undefined) {
            for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
                var item = _a[_i];
                action(item);
            }
        }
    };
    List.prototype.Exists = function (predicate) {
        if (predicate != undefined) {
            var found;
            found = false;
            for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (predicate(item)) {
                    found = true;
                    break;
                }
            }
            return found;
        }
        else
            return false;
    };
    List.prototype.Find = function (predicate) {
        if (predicate != undefined) {
            var found;
            for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (predicate(item)) {
                    found = item;
                    break;
                }
            }
            return found;
        }
        else
            return undefined;
    };
    List.prototype.IndexOf = function (item) {
        var index;
        index = -1;
        if (item != undefined) {
            var itemJson = JSON.stringify(item);
            for (var i = 0; i < this.Items.length; i++) {
                var _itemJson = JSON.stringify(this.Items[i]);
                if (_itemJson === itemJson) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    List.prototype.Remove = function (item) {
        if (item != undefined) {
            var idx = this.IndexOf(item);
            if (idx >= 0)
                this.RemoveAt(idx);
        }
    };
    List.prototype.RemoveAt = function (index) {
        if (!isNaN(index) && index >= 0 && index < this.Items.length && this.Items.length > 0) {
            var idx = index - (index % 1);
            this.Items.splice(idx, 1);
        }
    };
    List.prototype.Reverse = function () {
        this.Items.reverse();
    };
    List.prototype.Clear = function () {
        this.Items = [];
    };
    return List;
}());

