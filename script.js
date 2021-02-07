let personid=1;
let people = [];

function inputKartu(){
	console.log("INPUT")
	let person={
		id: personid,
		nama: nama.value,
		tmpt: tempat.value,
		ttl: ttl.value,
		umur: calculateAge(ttl.value),
		alamat: alamat.value
		}
		

		people.push(person)
		console.log(people)
		personid++;
		show();
		clearForm();
		
}
function show(){
	document.querySelector('#bodyTable').innerHTML=``
	people.forEach((person, i) =>{
		document.querySelector('#bodyTable').innerHTML +=`
		<tr>
			<td class="headNomer">${i+1}</td>
			<td class="center">${person.nama}</td>
			<td class="center">${person.umur}</td>
			<td class="center">${person.alamat}</td>
		</tr>
		
	`
	})
}

function calculateAge(birth){
	let dateBirth= new Date(birth)
	let monDiff=Date.now()-dateBirth.getTime()
	let age_dt = new Date(monDiff)
	let year = age_dt.getUTCFullYear()
	let age = Math.abs(year - 1970)
	return age
}
function clearForm(){
	nama.value=""
	tempat.value=""
	ttl.value=""
	alamat.value=""
}
function clearData(){
	people = []
	show()
}
