/*global Ember*/
Emberproject.Spare = DS.Model.extend({
    name: DS.attr('string'),

    code: DS.attr('string'),

    //category: DS.attr('string'),
    quantity: DS.attr('string'),
    price: DS.attr('string'),
    image: DS.attr('string'),
    imagepath: DS.attr('string'),
    source: DS.attr('string'),
    non_essential: DS.attr('string'),


  //  product:DS.belongsTo('product')
});

//This section tells fixture adapter to use the code property as the id
Emberproject.SpareAdapter = DS.FixtureAdapter.extend({

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

// probably should be mixed-in...
Emberproject.Spare.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Emberproject.Spare.FIXTURES = [
  /*
  {
    id: 101,
    
    name: 'Grate Bar',
    
    code: 'AFS4321',
    
    category: 'Grates',

   // product:1
    
  },
  
  {
    id: 202,
    
    name: 'Left Hand Door Handle',
    
    code: 'AFS1234',
    
    category: 'Handles',

   // product:1
    
  },
  {
    id: 303,
    
    name: 'Spigot',
    
    code: 'AFS2222',
    
    category: 'Flue',

   // product:1
    
  },
  {
    id: 404,
    
    name: 'Right Hand Door Glass',
    
    code: 'AFS3333',
    
    category: 'Door',

   // product:1
    
  }, 
  */ 
  {
    "name":"Airwash Cover",
    "code":"AFS1578",
    "quantity":1,
    "diagram_number":1,
    "price":"15.65",
    "image":"AFS1578.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Glass Kit",
    "code":"AFS1965",
    "quantity":1,
    "diagram_number":2,
    "price":"38.13",
    "image":"AFS1965.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Door Rope Kit",
    "code":"AFS1021",
    "quantity":1,
    "diagram_number":3,
    "price":"25.39",
    "image":"AFS1021.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Fire Door Handle Assembly",
    "code":"AFS2040",
    "quantity":1,
    "diagram_number":4,
    "price":"17.68",
    "image":"AFS2040.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Airwash Knob",
    "code":"AFS1405",
    "quantity":2,
    "diagram_number":5,
    "price":"5.00",
    "image":"AFS1405.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Ash Pan",
    "code":"AFS1273",
    "quantity":1,
    "diagram_number":6,
    "price":"12.49",
    "image":"AFS1273.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Operating Tool",
    "code":"AFS008",
    "quantity":1,
    "diagram_number":7,
    "price":"18.32",
    "image":"AFS008.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Fuel Retainer",
    "code":"AFS1920",
    "quantity":1,
    "diagram_number":8,
    "price":"14.67",
    "image":"AFS1920.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Gasket And Glass Clips",
    "code":"AFS1365",
    "quantity":1,
    "diagram_number":9,
    "price":"18.18",
    "image":"AFS1365.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"4 Inch Flue Spigot",
    "code":"AFS009A",
    "quantity":1,
    "diagram_number":10,
    "price":"45.62",
    "image":"AFS009A.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"4 Inch Hot Plate",
    "code":"AFS009B",
    "quantity":1,
    "diagram_number":11,
    "price":"45.62",
    "image":"AFS009B.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Throat Plate",
    "code":"AFS1596",
    "quantity":1,
    "diagram_number":12,
    "price":"36.76",
    "image":"AFS1596.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Liner (rear)",
    "code":"AFS1094",
    "quantity":1,
    "diagram_number":13,
    "price":"31.55",
    "image":"AFS1094.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Liner Set",
    "code":"AFS1063",
    "quantity":2,
    "diagram_number":14,
    "price":"36.57",
    "image":"AFS1063.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Liner Set",
    "code":"AFS1975",
    "quantity":1,
    "diagram_number":15,
    "price":"48.57",
    "image":"AFS1975.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Grate Bar Support",
    "code":"AFS1591",
    "quantity":1,
    "diagram_number":16,
    "price":"16.00",
    "image":"AFS1591.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Flexi Grate Bar (small)",
    "code":"AFS1586",
    "quantity":5,
    "diagram_number":17,
    "price":"13.16",
    "image":"AFS1586.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Comb and Riddle Pull",
    "code":"AFS1985",
    "quantity":1,
    "diagram_number":18,
    "price":"16.54",
    "image":"AFS1985.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Hinge ",
    "code":"AFS2460",
    "quantity":2,
    "diagram_number":19,
    "price":"8.80",
    "image":"AFS2460.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Complete Fire Door",
    "code":"AFS1995",
    "quantity":1,
    "diagram_number":20,
    "price":"152.20",
    "image":"AFS1995.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  },

  {
    "name":"Hinge ",
    "code":"AFS2460",
    "quantity":2,
    "diagram_number":21,
    "price":"8.80",
    "image":"AFS2460.jpg",
    "source":"LAExplodedData",
    "non_essential":"No",
    "product":""
  }
];
