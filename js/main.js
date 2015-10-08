(function () {
  // console.log('It Works!');
  // console.dir(_);
  // console.dir($);
  console.dir(etsy);
  //-------------------------
  var templateString = $('#itemTemplate').text();
  var templateFunction = _.template(templateString);

  _.each(etsy.results, function(item){
    // console.log('price', item.price);

    var itemHTML = templateFunction(item);

    $('#mainContent').append(itemHTML);
 
 
  });

}());


