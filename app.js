angular.module('todoList', [])
.controller('TodoCtrl', function($scope) {
    var self = this;

    /**
     * Variable for adding new item
     */
    self.listItem = {};

    /**
     * Container that conain all todo items
     */
    self.items = [];

    // Generate dummy data for todo list items
    for (var i = 1; i <= 10; i++) {
        self.items.push({
            title: 'Item ' + i,
            checked: false
        });
    }

    // Flag variable for toggle check/uncheck all checkboxes
    self.isCheckedAll = false;    
    
    /**
     * Toggle checkboxes state
     */
    self.toggleCheckbox = function() {
        self.isCheckedAll = !self.isCheckedAll;

        angular.forEach(self.items, function(v, k) {            
            v.checked = self.isCheckedAll;            
        });      
    };

    /**
     * Add item into list
     */
    self.addItem = function() {
        if (self.listItem.title == '' || !self.listItem.title) {
            alert('Please enter title');
            return false;
        }

        self.items.unshift(angular.copy(self.listItem));
        self.listItem = {};
    };

    /**
     * Delete selected items
     */
    self.deleteItems = function() {        
        if (confirm('Are you sure to delete seleted item(s)?')) {
            var tmp = [];
            angular.forEach(self.items, function(v, k) {
                if (!v.checked) {
                    tmp.push(v);
                }
            });

            self.items = tmp;
        }
    };

    /**
     * Remove a specific item
     */
    self.removeItem = function(index) {
        if (confirm('Are you sure to delete this item?')) {
            self.items.splice(index, 1);
        }
    };
});