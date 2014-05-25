Emberproject.SpareEditController = Ember.ObjectController.extend({
  needs: 'spare',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.spare.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('spare',this.get('model'));
    }
  }
});

