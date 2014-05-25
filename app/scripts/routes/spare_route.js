Emberproject.SpareRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('spare', params.spare_id);
  }
});

