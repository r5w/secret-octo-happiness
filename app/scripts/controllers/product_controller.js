Emberproject.ProductController = Ember.ObjectController.extend({
  // Implement your controller here.
 needs:"spare",
 imagepath: function() {
    var image = this.get('model.code').toLowerCase(),
         pre = "http://www.aradastoves.com/dealerapp/web/images/stoves/",
         post = "x500.jpg";

    return pre + image + post;
  }.property('model.code')
});

