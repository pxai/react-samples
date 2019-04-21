import people from "./data";
import "../css/style.css";
import "../css/fonts.css";

for (let person of people) {
    console.log(person.name);
}

console.log("Kaixo");

const doStuff = () => {
    alert("This works. Check console.");
}

