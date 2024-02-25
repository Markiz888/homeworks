let arr = ["img", "breed", "age", "nickname", "gender", "coat", "status"];
let arr2 = ["-", "Порода: ", "Возрост: ", "Кличка: ", "Пол: ", "Цвет шерсти: "]
class Cat {
  constructor(img, breed, age, nickname, gender, coat, status) {
    this.img = img;
    this.breed = breed;
    this.age = age;
    this.nickname = nickname;
    this.gender = gender;
    this.coat = coat;
    this.status = status;
  }

  getEat() {
    if (this.status == false) {
      console.log("Мяу хочу жрать");
    }
  }

  go_sleep() {
    if (this.status == false){
      this.status = !this.status;
      console.log('Лег спать');
  }
}

  wake_up() {
    if (this.status == true){
      this.status = !this.status;
      console.log('Проснулся');
    }
  }
}

const cat1 = new Cat("cat1.jpg", "нету", 7, "муха", "male", "рыжий", false);
const cat2 = new Cat("cat2.jpg","Британский", 10,"Блохастый","male","серый",true);
const cat3 = new Cat("cat3.png", "Шаурма", 5, "Шаурма", "male", "серый", true);

a = [cat1, cat2, cat3]

let change = function(event) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'status') {
        if (a[event.target.value-1][arr[i]]) {
            document.getElementById(arr[i]).textContent = 'Статус: спит';
        
        } else {
            document.getElementById(arr[i]).textContent = 'Статус: не спит';
        }
    } else if (arr[i] == 'img'){
        document.getElementById(arr[i]).src = `img/${a[event.target.value-1][arr[i]]}`;
        document.getElementById(arr[i]).className = 'cat-img'
    } else {
        document.getElementById(arr[i]).textContent = arr2[i]+ a[event.target.value-1][arr[i]];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (i == event.target.value-1) {
      event.target.className = ('is-active')
    }
    else{
      c = document.getElementById(`btn${i+1}`)
      c.className= ('btn')
    }
  }
}


addEventListener('click', change)