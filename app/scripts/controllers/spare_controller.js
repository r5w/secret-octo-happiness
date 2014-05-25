Emberproject.SpareController = Ember.ObjectController.extend({
needs:'products',

  // Implement your controller here.
 imagepath: function() {
    var image = this.get('model.image'),
         pre = "http://www.aradastoves.com/dealerapp/web/images/spares_large/";

    return pre + image;
  }.property('model.image')
});

