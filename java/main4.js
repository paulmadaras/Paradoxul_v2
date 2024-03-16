function check(){
	var q1 = quiz.q1.value;
	var q2 = quiz.q2.value;
	var q3 = quiz.q3.value;
	var q4 = quiz.q4.value;
	var q5 = quiz.q5.value;
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
	if(q4 == "A"){
		correct++;
}
	if(q5 == "B"){
		correct++;
}
	alert("Ai răspuns corect la " + correct + "/5 întrebari.");
}