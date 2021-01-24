interface Pet = { 
    name: String,
    age: Number,
    weight: Number,
    height: Number,
    microChipped: boolean,
    sprayedOrNeutered: boolean,
    breed: String
}
interface Dog extends Pet {
    sporty: boolean,
    bark: () => void
} 

interface Cat extends Pet{//&? 
 purr: () => void
}


const dogArray: Dog = [
        { name: 'Bob', age: 4, weight: 10, height: 10, microChipped: true, spayedOrNeutered: true, breed: 'labradorian', sporty: true, bark: () => {
            console.log("Woof") 
         },
       
       { name: 'Rico', age: 8, weight: 9, height: 10, microChipped: true, spayedOrNeutered: false, breed: 'terrier', sporty: true, bark: () => {
        console.log("Woof") 
        },
       
       { name: 'Repo', age: 6, weight: 10, height: 9, microChipped: true, spayedOrNeutered: true, breed: 'hound', sporty: true, bark: () => {
        console.log("Woof") 
        } ]

        const dogArray: Dog[] = [bob, rico, repo];

 const catArray: Cat = [
{ name: 'Sammy', age: 4, weight: 5, height: 7, microChipped: true, sprayedOrNeutered: false, breed: 'siamese', sporty: true,
     purr: () => {
         console.log("Meow")
     },
     {name: 'Tobby', age: 6, weight: 5, height: 9, microChipped: true, sprayedOrNeutered: true, breed: 'brittish', sporty: true,
     purr: () => {
         console.log("Meow")

     } ]
 
     const adoptPet = (pet: Dog | Cat):void => {
        if(pet === 'dog'){
            console.log(`We adopted a ${pet}: ${pet.name}, he/she is ${pet.age} years old and is ${pet.spayedOrNeutered &&}'sprayed or neutered', and loves to woof`);
        } else if(pet === 'cat'){
            console.log(`We have adopted a ${pet}: ${pet.name}, he/she is ${pet.age} years old and is ${pet.spayedOrNeutered &&}, and loves to meow`);
        }
    }

       

     
