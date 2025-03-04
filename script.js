/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */

// Create pet variable, set equal to empty quotes ("")
function button () {
var pet = ("")
// Ask if they are allergic, store in a boolean variable with OK/Cancel
var allergic = confirm ("are you allergic to pet hair? Ok for yes, cancel for no")
// If they are allergic, ask if they want a cute pet, store in a boolean variable with OK/Cancel
if (allergic == true) var cute = confirm ("do you want a cute pet? Ok for yes, cancel for no")
// If they are not allergic, ask if they want to be outdoors with their pet.  Store it in a boolean with OK/Cancel.
else var outdoors = confirm ("do you want to be outside with your pet? Ok for yes, cancel for no")
// If allergic and cute, pet =  bird
if (allergic && cute ) {pet="bird"}
// Else if allergic and not cute,  pet =  tarantula
else if (allergic && !cute ) {pet="tarantula"}
// Else if not allergic and outdoors,  pet =  dog
else if (!allergic && outdoors ) {pet="dog"}
// Else if not allergic and indoors,  pet =  cat 
else if (!allergic && !outdoors ) {pet="cat"}
// Display the type of pet: You would do well with a pet
alert ("you would do well with a " + pet)
// Ask for a pet name for the pet starting with the same letter as the pet starts with
var petname = prompt ("name your pet")
// Display petname the pet says hi. 
alert (petname + " the " + pet + " says hi")
};
