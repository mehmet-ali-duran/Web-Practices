let names = ["ahmet", "mehmet", "ali", "zaynep", "hatice"];

sessionStorage.setItem("names", JSON.stringify(names));
let value = JSON.parse(sessionStorage.getItem("names"));
// console.log(value);
value.forEach((element) => {
    console.log(element.length);
});
