const userData = [
	{
        id: 1,
		name: "Maria Silva",
		plate: "BRA2E19",
		phone: "(47) 91234-9874",
		email: "maria.silva@gmail.com",
		profile: "./assets/img/profile3.jpg",
	},
	{
        id: 2,
		name: "Ana Costa",
		plate: "KCI2E05",
		phone: "(47) 91234-1111",
		email: "ana.costa@gmail.com",
		profile: "./assets/img/profile4.jpg",
	},
	{
        id: 3,
		name: "João Lima",
		plate: "CCR3G08",
		phone: "(47) 91234-3333",
		email: "joao.lima@gmail.com",
		profile: "./assets/img/profile1.jpg",
	},
	{
        id: 4,
		name: "Cleber Junior",
		plate: "SDF8Q01",
		phone: "(47) 91234-8888",
		email: "cleber.junior@gmail.com",
		profile: "./assets/img/profile2.jpg",
	},
	{
        id: 5,
		name: "Lucas Silva",
		plate: "KRF12A5",
		phone: "(47) 91234-0000",
		email: "luscas.silva@gmail.com",
		profile: "./assets/img/profile3.jpg",
	},
];

// List controll
function createList() {
    let ul = document.getElementById('ul');

	userData.forEach((user) => {
        // Html components
		var li = document.createElement("li");
		var divWrapper = document.createElement("div");
		var imgProfile = document.createElement("img");
		var divContent = document.createElement("div");
		var title = document.createElement("h2");
		var description = document.createElement("p");
		var buttonProfile = document.createElement("button");
		var buttonProfilePar = document.createElement("p");
		var buttonProfileIcon = document.createElement("i");
		var divButtons = document.createElement("div");
		var buttonEdit = document.createElement("button");
		var buttonDelete = document.createElement("button");
		var buttonDeleteIcon = document.createElement("i");
		var buttonDeletePar = document.createElement("p");
		
        // Class 
        li.classList = "list__item";
        divWrapper.classList = "item__wrapper"
        imgProfile.classList = "item__image"
        divContent.classList = "item__content"
        title.classList = "item__title"
        description.classList = "item__description"
        buttonProfileIcon.classList = "fa-solid fa-arrow-up-right-from-square"
        divButtons.classList = "item__buttons"
        buttonEdit.classList = "item__buttons__edit"
        buttonDelete.classList = "item__buttons__delete"
        buttonDeleteIcon.classList = "fa-solid fa-circle-minus"
		
        // Content
        imgProfile.src = user.profile
        imgProfile.alt = 'Foto de perfil'
        title.innerText = user.name
        description.innerText = user.plate
        buttonProfilePar.innerText = 'Ver perfil'
        buttonEdit.innerText = 'Editar'
        buttonDeletePar.innerText = 'Excluir'

        // Clicks
        buttonProfile.addEventListener('click', () => { openProfile(user.id) })


        // Append
        ul.appendChild(li);
        li.appendChild(divWrapper)
        li.appendChild(divButtons)
        divWrapper.appendChild(imgProfile)
        divWrapper.appendChild(divContent)
        divContent.appendChild(title)
        divContent.appendChild(description)
        divContent.appendChild(buttonProfile)
        buttonProfile.appendChild(buttonProfilePar)
        buttonProfile.appendChild(buttonProfileIcon)
        divButtons.appendChild(buttonEdit)
        divButtons.appendChild(buttonDelete)
        buttonDelete.appendChild(buttonDeleteIcon)
        buttonDelete.appendChild(buttonDeletePar)
	});
};

// Profile controll
function openProfile(id) {
    var profile = document.getElementById('profile')
    profile.classList.add('active')
    
    var img = document.getElementById('profile__image')
    var name = document.getElementById('name')
    var plate = document.getElementById('plate')
    var phone = document.getElementById('phone')
    var email = document.getElementById('email')

    // div.classList('profile__img')
    img.src = userData.find(el => el.id == id).profile

    name.innerText = userData.find(el => el.id == id).name
    plate.innerText = userData.find(el => el.id == id).plate
    phone.innerText = userData.find(el => el.id == id).phone
    email.innerText = userData.find(el => el.id == id).email
}
function closeProfile() {
    var profile = document.getElementById('profile')
    profile.classList.remove('active')
}

document.getElementById('close').addEventListener('click', ()=>{closeProfile()})
createList()
counter()
