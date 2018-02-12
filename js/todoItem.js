var TodoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },

    urlRoot: "https://jsonplaceholder.typicode.com/todos",

    //Validation of model
    validate: function(attrs){
        if (!attrs.title)
            return "Title is required.";
    },

    //Toggle for updating state of model
    toggle: function(){
        this.set("completed", !this.get("completed"));
    }
});

