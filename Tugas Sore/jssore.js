const form = document.querySelector('.form-data')
form.addEventListener('submit', inputData)
const bodyTable = document.querySelector('#bodyTable')
const buttonSubmit = document.querySelector('#tombol-submit')

let start = 3
let people = []
let counterId = 1
let dummyPeople = [{
        id: 1,
        name: "Yono",
        placeOfBirth: "Bandung",
        dateOfBirth: "1996-06-07",
        age: 24,
        gender: "L",
        hobbies: ["Berenang", "Jogging", "Bersepeda"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 2,
        name: "Al afif",
        placeOfBirth: "Bogor",
        dateOfBirth: "1998-01-01",
        age: 23,
        gender: "L",
        hobbies: ["Jogging", "Bersepeda", "Futsal"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 3,
        name: "Al Alif",
        placeOfBirth: "Balikpapan",
        dateOfBirth: "1998-02-02",
        age: 22,
        gender: "L",
        hobbies: ["Berenang", "Bersepeda", "Futsal"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 4,
        name: "Silo",
        placeOfBirth: "Banjarmasin",
        dateOfBirth: "1998-03-03",
        age: 22,
        gender: "L",
        hobbies: ["Futsal"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 5,
        name: "Rilo",
        placeOfBirth: "Banjarnegaara",
        dateOfBirth: "1998-04-04",
        age: 22,
        gender: "L",
        hobbies: ["Berenang", "Jogging", "Futsal"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 6,
        name: "Fauzan",
        placeOfBirth: "Banyumas",
        dateOfBirth: "1998-05-05",
        age: 22,
        gender: "L",
        hobbies: ["Bersepeda", "Futsal"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 7,
        name: "Bang Husen",
        placeOfBirth: "Bontang",
        dateOfBirth: "1998-06-06",
        age: 22,
        gender: "L",
        hobbies: ["Bersepeda"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 8,
        name: "Erik leo4",
        placeOfBirth: "Banda Aceh",
        dateOfBirth: "1997-07-07",
        age: 23,
        gender: "L",
        hobbies: ["Berenang", "Jogging", "Bersepeda", "Futsal"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 9,
        name: "Bibbah",
        placeOfBirth: "Bali",
        dateOfBirth: "1998-08-08",
        age: 22,
        gender: "P",
        hobbies: ["Berenang", "Jogging", "Bersepeda"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 10,
        name: "Kris",
        placeOfBirth: "Banyuwangi",
        dateOfBirth: "1998-09-09",
        age: 22,
        gender: "L",
        hobbies: ["Berenang", "Jogging", "Bersepeda", "Futsal"],
        religion: "islam",
        address: "Tangerang",
    },
    {
        id: 11,
        name: "Amal",
        placeOfBirth: "Bandar Lampung",
        dateOfBirth: "1998-09-09",
        age: 22,
        gender: "L",
        hobbies: ["Jogging"],
        religion: "islam",
        address: "Tangerang",
    }

]

function loadDummy() {
    counterId = dummyPeople.length + 1
    people = people.concat(dummyPeople)
    showPeople(start)
}
function clearTable() {
    bodyTable.innerHTML = ``
}
console.log(form.hobby);
function inputData(e) {
    e.preventDefault()
    
    form.hobby.forEach(el =>{
        console.log(el);
    })
    let formHobbies = Array.prototype.slice.call(form.hobby)
    let person = {
        id: 0,
        name: form.nama.value,
        placeOfBirth: form.tempat.value,
        dateOfBirth: form.ttl.value,
        age: calculateAge(form.ttl.value),
        gender: form['jenis-kelamin'].value,
        hobbies: getCheckedHobby(formHobbies),
        religion: form.agama.value,
        address: form.alamat.value
    }
    if (buttonSubmit.value == 'Submit') {

        person.id = counterId
        people.push(person)
        counterId++;
        showPeople(people.length-1)
        clearForm() 
    } else {
        console.log("Update");
        person.id = parseInt(form['update-id'].value)
        saveUpdate(person)
        buttonSubmit.value = 'Submit'
        let position = people.map(function(e) { return e.name; }).indexOf(person.name);
        let page = position/3
        showPeople(checkStartValue(page*3))
        clearForm()   
        console.log(person);
    }
}

function getCheckedHobby(listHobby) {
    let listCheckedHoby = []
    listHobby.forEach(element => {
        if (element.checked) {
            listCheckedHoby.push(element.value)
        }
    })
    return listCheckedHoby
}

function calculateAge(birth) {
    let dateBirth = new Date(birth)
    let monDiff = Date.now() - dateBirth.getTime()
    let age_dt = new Date(monDiff)
    let year = age_dt.getUTCFullYear()
    let age = Math.abs(year - 1970)
    return age
}

function showPeople(end) {
    clearTable()
    let init = end - 3
    for (let i = init; i <= end; i++) {
        showPerson(people[i])
    }
}

function showPerson(person) {
        bodyTable.innerHTML += `
        <tr class="isi-tabel">
            <td class="center">${person.id}</td>
            <td class="center">${person.name}</td>
            <td class="center">${person.age}</td>
            <td class="center">${person.gender}</td>
            <td class="center">${person.hobbies}</td>
            <td class="center">${person.religion}</td>
            <td class="center">${person.address}</td>
            <td class="center">
                <button class="action update-hover" type="button" onclick="updatePeople(${person.id})">Update</button>
                <button class="action delete-hover" type="button" onclick="deletePeople(${person.id})">Delete</button>
            </td>
        </tr>
        `
}

function deletePeople(id) {
    clearForm()
    people = people.filter(person => {
        return person.id != id
    })
    showPeople(3)
}

function getPerson(id) {
    let result = people.filter(person => {
        return person.id == id
    })
    return result[0]
}

function getIndexPerson(idTarget) {
    let index, i = 0;
    for (const person of people) {
        if (idTarget == person.id) {
            index = i
            break;
        }
        i++
    }
    return index
}

function saveUpdate(person) {
    let targetIndex = getIndexPerson(person.id)
    people.splice(targetIndex, 1, person)
}

function updatePeople(id) {
    let target = getPerson(id)
    showPersonToForm(target)
    buttonSubmit.value = "Update"
}

function showPersonToForm(person) {
    form['update-id'].value = person.id
    form.nama.value = person.name
    form.tempat.value = person.placeOfBirth
    form.ttl.value = person.dateOfBirth
    form['jenis-kelamin'].value = person.gender
    setCheckBoxHobbies(person.hobbies)
    form.agama.value = person.religion
    form.alamat.value = person.address
}

function setCheckBoxHobbies(hobbies) {
    hobbies.forEach((hobby, i) => {
        if (hobby === 'Berenang') {
            form.hobby[0].checked = true
        } else if (hobby === 'Jogging') {
            form.hobby[1].checked = true
        } else if (hobby === 'Bersepeda') {
            form.hobby[2].checked = true
        } else {
            form.hobby[3].checked = true
        }
    })
}

function seacrhByName() {
    let target = document.querySelector('#nama-target').value.toLowerCase()
    let regPattern = new RegExp(target)
    let suspectPeople = []
    console.log("lengtTarget"+target.length);
    people.forEach((person) => {
        let result = person.name.toLowerCase().match(regPattern)
        console.log(result);
        console.log(typeof(result));
        if(result!=null){
            if (result.length>=0) {
                suspectPeople.push(person)
            }
        }
    })
    console.log(suspectPeople);
    clearTable()
    if(suspectPeople.length>5){
        for (let i = 0; i <5; i++) {
            showPerson(suspectPeople[i])
        }
    }else{
        for (let i = 0; i <suspectPeople.length; i++) {
            showPerson(suspectPeople[i])
        }
    }
}
function startPage() {
    start=3
    showPeople(start)
}
function nextPage() {
    start+=3
    start = checkStartValue(start)
    showPeople(start)
}
function prevPage() {
    start-=3
    start = checkStartValue(start)
    showPeople(start)
}
function checkStartValue(start) {
    let currentStart = 0
    if (start < 3) {
        currentStart = 3
        start=currentStart
    } else if (start > people.length) {
        currentStart = people.length - 1
        start=currentStart
    } else{
        currentStart=start
    }
    return currentStart
}

// function clearForm() {
//     form['update-id'].value = 0
//     form.nama.value = ""
//     form.tempat.value = ""
//     form.ttl.value = null
//     clearRadioAndCheckBox()
//     form.agama.value = ""
//     form.alamat.value = ""
// }

// function clearRadioAndCheckBox() {
//     for(let i =0;i<=3;i++){
//         form.hobby[i].checked = false
//     }
//     document.querySelector('#laki-laki').checked=false
//     document.querySelector('#perempuan').checked=false
// }

function clearForm() {
    form.reset()
}