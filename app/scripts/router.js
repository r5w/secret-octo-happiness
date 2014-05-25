Emberproject.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo('products');
	}
});

Emberproject.Router.map(function () {

	this.resource('spares', function(){
		this.resource('spare', { path: '/:spare_id' }, function(){
			this.route('edit');
		});
		this.route('create');
	});

	this.resource('products', function(){
		this.resource('product', { path: '/:product_id' }, function(){
			this.route('edit');
		//	this.resource('spare', { path: ':spare_id' });   
		});
		this.route('create');
	});

});