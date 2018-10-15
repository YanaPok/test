function f1(){
	var age, btn, main, div1, div2;
	age = document.getElementById("age").value;
	btn = document.getElementById("btn");
	main = document.getElementById("field");
	div1 = document.createElement("div1");
	div2 = document.createElement("div2");

	console.log(age);
	console.log(btn);
	console.log(main);
	console.log(div1);
	console.log(div2);

	if (age>=18){
		div1.innerHTML = "Поздравляем! Вам разрешен доступ к сайту!";
		div1.className = "result";
		main.appendChild(div1);
	}
	else {
		div2.innerHTML = "Ooops! Вам не разрешен доступ к сайту!";
		div2. className = "result";
		main.appendChild(div2);
	}

}

btn.addEventListener("click", f1)

