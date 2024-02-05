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

  is_sleep() {
    this.status = !this.status;
  }
}

const cat1 = new Cat("cat1.jpg", "нету", 7, "муха", "male", "рыжий", false);
const cat2 = new Cat("cat2.jpg","Британский", 10,"Блохастый","male","серый",true);
const cat3 = new Cat("cat3.png", "Шаурма", 5, "Шаурма", "male", "серый", true);

function change(a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'status') {
        if (a[arr[i]]) {
            document.getElementById(arr[i]).textContent = 'Статус: спит';
        
        } else {
            document.getElementById(arr[i]).textContent = 'Статус: не спит';
        }
    } else if (arr[i] == 'img'){
        document.getElementById(arr[i]).src = `img/${a[arr[i]]}`;
        document.getElementById(arr[i]).className = 'cat-img'
    } else {
        document.getElementById(arr[i]).textContent = arr2[i]+ a[arr[i]];
    }
  }
  document.getElementById(b).className = 'is-active';
  if (b == 'btn1') {
    document.getElementById('btn2').className = 'btn'
    document.getElementById('btn3').className = 'btn'
  } else if(b == 'btn2'){
    document.getElementById('btn1').className = 'btn'
    document.getElementById('btn3').className = 'btn'
  } else{
    document.getElementById('btn2').className = 'btn'
    document.getElementById('btn1').className = 'btn'
  }
}
