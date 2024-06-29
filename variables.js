// userName es una variable de tipo string
userName = "Omar";
userSurname = "Olmedo";
espacio = " ";

//Una string con acentos abiertos (backticks) es un template literal
userTitle = `Professor`;

console.log(userName);
console.log("Omar");

console.log(userTitle, userName, userSurname);

userName = "Pablo";

console.log(userTitle + " " + userName + " " + userSurname);
console.log(userTitle + espacio + userName + espacio + userSurname);

console.log(`¿Qué tal estás, ${userName} ${userSurname}`);

userAge = 33; // Number
userExperience = 10;
userHasHair = false; // Boolean

console.log(userName + userAge);
console.log(userAge + userExperience);

userExperience = "diez";
console.log(userAge + userExperience);

console.log("Edad: " + userAge, "\nAños de experiencia: " + userExperience);

// TODO: objects

// Las variable no son cajas, son FLECHAS.
