/*global Ember*/
Emberproject.Product = DS.Model.extend({
    name: DS.attr('string'),

    code: DS.attr('string'),

    category: DS.attr('string'),
    imagepath: DS.attr('string'),

    spares:DS.hasMany('spare',{ async: true })
});

// probably should be mixed-in...
Emberproject.Product.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

//This section tells fixture adapter to use the code property as the id
Emberproject.ProductAdapter = DS.FixtureAdapter.extend({

 fixturesForType: function(type) {
  if (type.FIXTURES) {
   var fixtures = Ember.A(type.FIXTURES);
   return fixtures.map(function(fixture){

    // aka we massasge the data a bit here so the fixture adapter won't whine so much
    fixture.id = fixture.code;
    var fixtureIdType = typeof fixture.id;
    if(fixtureIdType !== "number" && fixtureIdType !== "string"){
      throw new Error(fmt('the id property must be defined as a number or string for fixture %@', [fixture]));
    }
    fixture.id = fixture.id + '';
    return fixture;
   });
  }
  return null;
 },
});
// delete below here if you do not want fixtures
Emberproject.Product.FIXTURES = [
  
  {
  //  id: 0,
    
    name: 'Acorn View 4',
    
    code: 'ACORN4F',
    
    category: 'foo',

    spares:['AFS1965','AFS1578','AFS009A']
    
  },
  
  {
 //   id: 1,
    
    name: 'EcoburnPlus 5',
    
    code: 'ECB5FPLUS',
    
    category: 'foo',

    spares: ['AFS1405','AFS008']
    
  }
  
];
