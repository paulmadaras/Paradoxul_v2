function check(){
	var q1 = quiz.q1.value;
	var q2 = quiz.q2.value;
	var q3 = quiz.q3.value;
	var correct = 0;
	
	if(q1 == "C"){
		correct++;
}
	if(q2 == "C"){
		correct++;
}
	if(q3 == "D"){
		correct++;
}
	alert("Ai răspuns corect la " + correct + "/3 întrebari.");
}