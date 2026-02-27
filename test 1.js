var words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

var re = /^[^Aa]{6,}$/;

for (var i = 0; i < words.length; i++) {
  if (re.test(words[i])) {
    console.log(words[i]);
  }
}