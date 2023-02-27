   // Number 1
 function InstagramPost(Handle, Content, ImageLink, Views, Likes) {
    this.Handle = Handle;
    this.Content = Content;
    this.ImageLink = ImageLink;
    this.Views = Views;
    this.Likes = Likes;
}

// Number 2
const instagramUser1 = new InstagramPost("_ethel_", "Image", "https://www.instagram.com/p/CSru48NjvNI/?igshid=MDM4ZDc5MmU=", 1008, 413);
const instagramUser2 = new InstagramPost("_ethel_", "Reel", "https://www.instagram.com/reel/CclBK2PIVu1/?igshid=MDM4ZDc5MmU=", 800, 245);

// Number 3
// a
function createPerson(name, age, location) {
    
    return{
        name: name,
        age: age,
        location: location
    }
}

const musa = createPerson("Musa Dawodu", 19, "Lekki");

// b
function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}
const scores = createJambScores(70, 85, 82, 94);
// Now we merge
Object.assign(musa, scores);

// Number 4
// - Using Object.assign()
const pet = {
    type: "Dog",
    name: "Whisky",
    breed: "Labrador",
    color: "Brown",
}

const dog = Object.assign({}, pet);


// Option 2: Spread syntax (i.e. (...) )
const cat = {...pet};


// Option 3: JSON.parse(JSON.stringify())
const hamster = JSON.parse(JSON.stringify(pet));

// Number 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (let key in presidentialCandidates){
    console.log(presidentialCandidates[key] + " is the presidential candidate of" + " " + key)
 }
 