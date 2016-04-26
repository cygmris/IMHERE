define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  SearchView = Backbone.View.extend({
    el: $('#search_container'),

    render: function() {
      // Compile the template using underscore
      var content = {
        search_label: "searh something."
      };

      var template = _.template($('#search_template').html());
      var output = template(content);
      // Load the compiled HTML into the Backbone "el"
      this.$el.html(output);
    },
    events: {
      "click i": "doSearch"
    },
    doSearch: function(event) {
      // Button clicked, you can access the element that was clicked with event.currentTarget
      alert("Search for " + $("#search").val());
    }
  });
  return SearchView;
});
