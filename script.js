//your JS code here. If required.
const submitBtn = document.querySelector("#btn");
const nameInp = document.querySelector("#name");
const ageInp = document.querySelector("#age");

submitBtn.addEventListener("click", () => {
	if(nameInp.value.trim() == "" || ageInp.value == ""){
		alert("Plese enter valid details")
	}else{
		const promis = new promise((resolve, reject) => {
			setTimeout(() => {
				if(ageInp.value > 18){
					resolve(`Wellcome, ${nameInp.value}. You can vote.`);
				}else{
					reject(`Oh sorry ${nameInp.value}. You arent old enough.`);
				}
			}, 4000);
			alert(promis);
		})
	}
})