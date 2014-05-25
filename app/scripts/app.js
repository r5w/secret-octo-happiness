var Emberproject = window.Emberproject = Ember.Application.create();
Emberproject.ApplicationView = Ember.View.extend({
	didInsertElement: function(){
		this.$().foundation('topbar');
	},
	willDestroyElement: function() {
		this.$().foundation('topbar', 'off');
	}	
})
/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
