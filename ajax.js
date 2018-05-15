document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

  var message  = document.querySelector('.message');
  var button1  = document.querySelector('#button1');
  var button2  = document.querySelector('#button2');
  var button3  = document.querySelector('#button3');
  var button4  = document.querySelector('#button4');
  var button5  = document.querySelector('#button5');
  var step12   = document.querySelector('#step12').querySelector('p');
  var step3456 = document.querySelector('#step3456').querySelector('p');
  var step7    = document.querySelector('#step7').querySelector('p');
  var step8    = document.querySelector('#step8').querySelector('p');
  var step9    = document.querySelector('#step9').querySelector('p');

  button1.addEventListener('click', function() {
    var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });

    request.done(function() {
      console.log(request);
      console.log('AJAX request done');
      step12.innerText = request.responseText;
    })

    request.fail(function(request, status, error) {
      console.log(status + ': ' + error);
    });

    request.always( function() {
      message.innerText = "It's running";
    });

  });

  button2.addEventListener('click', function() {
    var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    });

    request.done(function(responseData) {
      console.log(request);
      console.log('AJAX request done');
      step3456.innerText = responseData;
    })

    request.fail(function(request, status, error) {
      console.log(status + ': ' + error);
    });

    request.always( function() {
      message.innerText = "It's running";
    });

  });

  button3.addEventListener('click', function() {
    var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    });

    request.done(function(responseData) {
      console.log(request);
      console.log('AJAX request done');
      step7.innerText = responseData;
    })

    request.fail(function(request, status, error) {
      console.log(status + ': ' + error);
    });

    request.always( function() {
      message.innerText = "It's running";
    });

  });

  button4.addEventListener('click', function() {
    var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {food: 'pancakes', quantity: 6, type: 'blueberry'},
      dataType: 'text'
    });

    request.done(function(responseData) {
      console.log(request);
      console.log('AJAX request done');
      step8.innerText = responseData;
    })

    request.fail(function(request, status, error) {
      console.log(status + ': ' + error);
    });

    request.always( function() {
      message.innerText = "It's running";
    });

  });

  button5.addEventListener('click', function() {
    var request = $.ajax ({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    });

    request.done(function(responseData) {
      console.log(request);
      console.log('AJAX request done');
      step9.innerText = responseData;
    })

    request.fail(function(request, status, error) {
      console.log(status + ': ' + error);
    });

    request.always( function() {
      message.innerText = "It's running";
    });

  });

});
