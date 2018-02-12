var TodoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },

    url: "fakeUrl",

    //Validation of model
    validate: function(attrs){
        if (!attrs.description)
            return "Description is required.";
    },

    //Toggle for updating state of model
    toggle: function(){
        this.set("isCompleted", !this.get("isCompleted"));
    }
});

