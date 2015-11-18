

Meteor.startup(function() {

	$("#submit").click(function(event) {
		event.preventDefault();
		// console.log("Hello, world!");
		let exclamation = $("#exclamation").val();
		
		let adverb = $("#Adverb").val();

		let noun = $("#Noun").val();
	
		let verb = $("#Verb").val();
		console.log(exclamation+" "+adverb+" "+noun+" "+verb);
		
		$("#mad-lab-console").hide();
		$("#mad-lab-console").text(exclamation+" "+adverb+" "+noun+" "+verb).fadeIn("slow").css("color","#000");



	});
});