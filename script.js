//your JS code here. If required.
const submitBtn = document.querySelector("#btn");
const nameInp = document.querySelector("#name");
const ageInp = document.querySelector("#age");

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	if(nameInp.value.trim() == "" || ageInp.value == ""){
		alert("Please enter valid details")
	}else{
		const promis = new Promise((resolve, reject) => {
			setTimeout(() => {
				if(ageInp.value > 18){
					resolve(`Wellcome, ${nameInp.value}. You can vote.`);
				}else{
					reject(`Oh sorry ${nameInp.value}. You aren't old enough.`);
				}
			}, 4000);
		})
		promis.then(data => alert(data)).catch(data => alert(data));
	}
})