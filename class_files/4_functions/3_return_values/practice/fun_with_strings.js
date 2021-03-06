//create a variable with your full name in it
let name = "Josh B. Archer";

//change your name with the functions below
name = capitalize(name);
name = replace(name);
name = prepend(name, "Mr. ");

//print out the newly formatted name
console.log(name);

let adam = "Adam Wise";
console.log(capitalize(replace(adam)))

function capitalize(theString)
{
    let updated = theString.toUpperCase();
    return updated;
}

function append(theString, newContent)
{
    let updated = theString + newContent;
    return updated;
}

function prepend(theString, newContent)
{
    let updated = newContent + theString;
    return updated;
}

function replace(theString)
{
    //replace vowels with special characters
    theString = theString.replaceAll("a", "@");
    theString = theString.replaceAll("A", "@");

    theString = theString.replaceAll("e", "&");
    theString = theString.replaceAll("E", "&");

    theString = theString.replaceAll("i", "!");
    theString = theString.replaceAll("I", "!");

    theString = theString.replaceAll("o", "()");
    theString = theString.replaceAll("O", "()");

    theString = theString.replaceAll("u", "#");
    theString = theString.replaceAll("U", "#");

    return theString;
}