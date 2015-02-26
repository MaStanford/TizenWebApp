var startTime;
var checkTime;
var i = 0;

Parse.initialize("APPLICATION_ID", "JAVASCRIPT_KEY");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
  testObject.save({foo: "bar"}, {
  success: function(object) {
    $(".success").show();
  },
  error: function(model, error) {
    $(".error").show();
  }
});

/**
 * Constructor for a user.
 */
function UserFactory() {
			this.name = "Username";
			this.email = "Email@Email.com";
			this.mdn = "1234567";
}

/**
 * This is a literal object.
 */
var Metrics = {time: 12345, phone: "tizen pooturd", car: "Hyndai", Deoderant: "None",toString : function(){
				return "Metrics on: {0} at {1} while driving {2}".format(phone, time, car);
			  }
};

//Object.create takes a literal and return a copy.
var currentMetrics = Object.create(Metrics)

//My attempt at using the prototype langauge feature of JS. It doesn't work.
var UserClass = Object.prototype(UserFactory);

//My attempt at adding a function to a prototype. It doesn;t seem to work.
UserClass.toString = function() {return "Hey " + this.name};

//My attempt at constructing an object from a prototype.
var currentUser = Object.create(UserClass);

var currentUser = {name : "Mark"};

/**
 * Called by the window.onload() callback.
 * We set a listener under this method.
 */
var init = function () {
	
	$.mobile.changePage('#home');
	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};

// window.onload can work without <body onload="">
window.onload = init; //This is how we get a callback to the loading of the html

/**
 * Gets and formats the current time.
 * Prints the output to "divbutton1"
 * Calls a setTimeout loop at 250 ms.
 */
function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

/**
 * Helps format the time by prefixing a 0 to numbers less than 10
 * @param i
 * @returns {String}
 */
function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

/**
 * Increments the counter and displays the counter to "accumalator"
 */
function incrementAccumulator(){
	document.getElementById('accumalator').innerHTML="Count: " + i++;
}

/**
 * Function to stringify an object.
 * @param obj
 * @returns {String}
 */
function getObjProps(obj){
	var output = '';
	for (var property in obj) {
	  output += property + ': ' + object[property]+'; ';
	}
	return output;
}

/**
 * returns a string of all the properties of an object.
 */
var print = function(o){
    var str='';
    for(var p in o){
        if(typeof o[p] == 'string'){
            str+= p + ': ' + o[p]+'; </br>';
        }else{
            str+= p + ': { </br>' + print(o[p]) + '}';
        }
    }
    return str;
}

/**
 * Attempts to display a tizen.CalendarEvent.  
 */
function displayEvent(){
	var event = new tizen.CalendarEvent(
			{
			   description:"hospital", 
			   geolocation: new tizen.SimpleCoordinates(37.4889, 127.0876),
			   startDate: new tizen.TZDate(2011, 11, 1, 14, 0), 
			   duration: new tizen.TimeDuration(2, "HOURS")
			});
	document.getElementById('eventOutput').innerHTML=print(event);
}


/**
 * Prints the current user to "UserOutput"
 */
function showUser(){
	document.getElementById("UserOutput").innerHTML = currentUser.name;
	document.getElementById("MetricOutput").innerHTML = "Is this be working?";//currentMetrics.toString();
}
