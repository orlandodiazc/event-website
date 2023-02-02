const peopleLibrary = [];
const personCardTemplate = document.getElementById('template-person-card');
const personCardContainer = document.querySelector('.person-card-cont');

const peopleDetails = (name, personImg, position, description) => ({
  name, personImg, position, description,
});

const carnivalKing = peopleDetails('Sebastian Guzman', 'images/important_figures/rey-momo.jpg', 'Carnival King Momo 2023', 'Sebastián is a Cultural and Social Manager, carnival lover at heart, one of his great contributions was the creation in 1994 of the Southwest Carnival.');
const carnivalQueen = peopleDetails('Natalia de Castro', 'images/important_figures/reina-carnaval.jpg', 'Carnival Queen 2023', 'Natalia has a degree in Industrial Engineering from the Universidad Autónoma del Caribe, and has 16 years of artistic experience in the Julie de Donado Dance School.');
const carnivalYoungKing = peopleDetails('Tahina Renteria', 'images/important_figures/reina-ninos.jpg', 'Young Carnival Queen 2023', 'Tahiana attends sixth grade at Karl C. Parrish School. She is the daughter of renowned baseball player Édgar Rentería and Jennifer De Ávila.');
const carnivalYoungQueen = peopleDetails('Diego Chelia', 'images/important_figures/rey-ninos.jpg', 'Young Carnival King 2023', 'Diego Andrés is a tenth grade student at Institución Educativa Distrital Manuel Zapata Olivella.');

peopleLibrary.push(carnivalKing);
peopleLibrary.push(carnivalQueen);
peopleLibrary.push(carnivalYoungKing);
peopleLibrary.push(carnivalYoungQueen);

function displayPersonCards(people) {
  people.forEach((personInfo) => {
    const personClone = personCardTemplate.content.cloneNode(true);
    personClone.querySelector('.person-card img').src = personInfo.personImg;
    personClone.querySelector('.person-position').innerText = personInfo.position;
    personClone.querySelector('.person-p').innerText = personInfo.description;
    personCardContainer.appendChild(personClone);
  });
}

displayPersonCards(peopleLibrary);