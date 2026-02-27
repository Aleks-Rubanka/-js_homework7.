
var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com"
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru" // Нам такі не підходять
  }
];

var re = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

var trusted = [];
for (var i = 0; i < arr.length; i++) {
  if (re.test(arr[i].email)) {
    trusted.push(arr[i].email);
  }
}

console.log(trusted);