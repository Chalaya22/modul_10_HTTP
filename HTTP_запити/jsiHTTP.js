//__________ТИПИ АРХИТЕКТУР____________________________________________
//REST API-це певна архітектура за допомогою якоі ми можем спілкуватися з клієнтом та сервісом.
//REST - спілкується за допомогою формата JSON( особливість)
// 90% побудовані на архітектурі REST, базується на JS
//Швидка і маскимально просто парситься в результаті чого отримує обьект
//Парситься за допомогою одного виразу  - return response.json() в кінці then
// Для побудову запиту на бекенд на REST АРХІТЕКТУРІ нам потрібен url та enadPoint(та точка куди ми стукаємось)
//

//SOAP API - попередник REST, вона є більш складнішою , важко парситься але більш секьюрнішою та
//базується на XML

//Що потрібно для запиту? Потрібен вже готовий якийсь бекенд.
// На реальних проектах будемо використовувати той бекенд, який надасть ваша бекендкоманда.
//Для практики є багато відкритих(публічних) API, якими можна покористуватися. Але
//вони не дадуть вам повноціну змогу створити повноцінні запити в плані додавання
// чогось на бекенд. Ми можемо створити GET запити , щось отримати від бекенду. Бази
//данних не резинові і якщо дади кожному змогу записувати туда своі тестові данні,
//то вона доволі бистро забьється

//Попрацюємо з приват API. Для початку як і з бібліотекою порібно розібрати документацію
// За допомогою стороніх інтеграцій працює кожен сайт.
// Немає такого сайта, який щось продає , щоб в нього не було інтеграціі до конвертаціі валют
//ми можемо досткукатися до API Привату , та дістати з  нього конвертацію вілют
// Чи лля прикладу з Новою пошто. Наш сайт подаэ запит за допомогою інтеграціі на ресурс Новоі
// почти. Вона обробляє іі і видає інфо чи можлива така доставка чи ні.

// https://api.privatbank.ua/#p24/exchange - публічний апі приват банку/ конвертація валют

//Якщо ми хочемо отправити якійсь http запит нам потрібен код запиту, розпарсити його...
// ... це цілий процес , тому на сьогоднішній день в нас є така утиліта, як POSTMEN
//POSTMEN - тут ми можемо створити тей же запит, який ми створюємо с коду але без використання
// коду, що значно підвищує тестування якогось ресурсу
// Копіюємо посилання з Приват банку (друге) та підставимо в рядок з GET
// Вибераємо Colections , GET untitled Request - (получить запрос)( вибераємо + зверху ) -
//в результаті маємо потрібне вікно  -> кнопка SENT -> в результаті отримоємо
//response(відповідь) відформатований Pretty в форматі Json від бекенду з курсами валют.

// GET -ЦЕ ТИП ЗАПМТУ за якого ми хочемо спілкуватися
//**ОСНОВНІ 5 ТИПІВ ЗАПИТУ: CRUT -це розповсюдженіші запити на бекенд
// GET - ОТРИМАТИ ДАННІ в абревіатурі CRUT за це відповідає літера r - read
//POST -СТВОРИТИ (напр. юзер вводить логін і пароль і хосе створити обліковий запит)
// PUT / PATCH - ОНОВИТИ ( напр користувая в свому екаунті хоче змінити своє місце проживаняя)
// DELATE -ВИДАЛИТИ

// Спробуємо ще одну апішку SWAPI 'Зоряні війни" - https://swapi.dev/
// В документаціі  в розділі roots бачимо форму запиту, атрибути в які можемо стукатися( нас цікавлять people)
// Щоб трворити запит у нас завжди буде базовий url -https://swapi.dev/api/
// https://- тип зєднання
//swapi.dev/api/ - базовий ендпоінт - тобто адреса де лежить наш бекенд
// далі приклади з ендпоінтів куди ми повині стукатись:
//"films":"https://swapi.dev/api/films"
//"people":"https://swapi.dev/api/peopl"....
// далі  ми можемо зустріти наприклад людину як окремий  ендпоінт /pepple/:id/
// на бекенді прописані всі запити, і тілтки вивчая його документацію можно зрозуміти чи доступний
//нам цей запит чи ні
//ендпоінт це назва функціі яку ми будемо викликати на бекенді

// тепер працюємо з WeatherApi - апішка погоди  http://weatherapi.com/docs/
// Тут треба створити keyApi
//спочатку в Postmen передаємо адресу api http://api.weatherapi.com/v1
// потім ендпоінт з документаціі /forecast.json
// потім параметри рядка запиту. так як наш ендпоінт це функція на бекенді
// після ендпоінта ми вказуємо знак питання , і це говорить про то ,
// що ми формуємо квейріпараметри
// після чого у нас завжди буде пара - ключ і значеня, параметри розділяють амперсандом &
//В Requaers Parameters велике значення має Required. Якщо воно є в документаціі, то його
//обовязкого треба передати , інакше все зламається
// Тому в нас є три обовязкових параметра - key Required APKey,
//q(місто)  Paris, days  5

//Результат!
//Якщо отримали код, то точено знаємо , що ми правильно сформували url запит!

//______________________CORS запити_________________________________________-
// Крос домені запити -це можливість буекнду  зробити найкращий захист від будь яких сторонніх запитів
// ______________________-Практика______________________________________
// Завдання:
// 1.Зробимо форму де користувач зможе вводити місто, яке його цікавить
// 2.Зробимо випадаюче меню  за допомогою тега select і дамо йому змогу обирати на
// 3, 5 та 7 днів розклад погоди.  Піля того як користувач натисне на кнопку Submit
//у нас буде виводитися список уже безпосередньо під кожен день
// Рішення:
// Перше що треба зробити, це запит на бекенд!
//Ми його вже створили в Postmen, тому беремо його та переносим на VS Code

// Створюємо функцію function getWeather(city, days), тапереносимо вже сформований наш url

// Виносимо базовий url в окрему змінну, длятого щоб коли ми стукались в майбутньому
//на один і тей самий резурс, то могли змінювати ендпоінти

//Наступне нам потібен ключ, який ми теж винесем в окрему змінну

//Формуємо fetch запит на бекенд

//Першимм параметром треба сформувати той url на який ми будем стукатися

// так як наш fetch завжди буде повертати проміс, то ми його будем
//опрацьовувати за допомогою ланцюжка then().catch().finaly()
//Коли ми в зені законсолим респонс - then(
// (resp) => console.log(resp), а потім викличем функцію getWeather("Thassos", 5);
//то отримаємо в консолі  -Response {type: 'cors', url: 'http://api.weatherapi.com/v1/forecast.json?key=b387beaf1c134dc1926185440230609&q=Thassos&days=5', redirected: false, status: 200, ok: true, …}
// Тут найбільше нас цікавить параметр ok: true та потім status: 200.
//Якщо ok:false, то щось пішло не так !!!!! Тому обовязково треба опрацювати параметр ok
// Тому першим зеном нам треба опрацьовувати перевірку з яким статусом опрацювало
// Тому ми пишемо умову і відсіюєм той випадок коли до нас прийшов статус fals
// примусово сетимо помилку для того , що прийшов Error використовуючи конструкцію
// throw new Error(resp.statusText) та resp.statusText, яка видає статус помилки

//Якщо все добре то ми повертаєм роспарсаний json

//В наступноми зені ми будемо вже опрацьовувати ті данні , які ми розпарсили.

//Важливо! Перша функція getWeather яка в нас відпрацьовує запит, в середені неі
//пишуть тільки один зен!!!!! наступні ланцюжки then().catch() треба записувати за межами getWeather
// тобто НА РЕЗУЛЬТАТІ ВИКОНАННЯ ФУНКЦІІ getWeather("Thassos", 5)!!
// Обовязково пишемо що ми повертаєм виконання fetch використовуючи перед ним return

//Якщо все успішно ,то отримаємо оьект відповіді з бекенду -{location: {…}, current: {…}, forecast: {…}}

//Створили в HTML форму, на яку потрібно повісити прослуховувач подій по типу Submit,
//опрацювати данні що ввів користувач, щоб опрокинути ці данні на запит букенду

//в функціі onSearch скидуємо дефолтні налаштування evt.preventDefault();
//в функціі onSearch в консолі дістаєм з нашого evt.currentTarget.elements

//Вволим в імпут форми назву міста та кількість днів, в результаті ми маємо доступ
//до нашого імпуту та тегу select
//
//Робимо диструктурізацію

//Нам потрібно передати з форми значення в функцію getWeather(), тому
//забираємо наш виклик getWeather() (функціі з ругим зеном), переносимо його в
//функцію onSearch(evt), та підставляєм значення
// з імпуту query.value та  значення зселектора days.value
// Отримуємо responce

//Тепере лишилось відмалювати відповідь з нашого бекенду!
//В нас в другому зені є доступ до нашоі data
//тому цю дату нам треба віддати на розалевку розмітки.
// тоді ідем і робимо функцію createMarkap. Що ця функція в нас має приймати?
//якщо ми підем і подивимось на response , то нас цікавить forcastday з масивом під кожний день
//та далі будемо інфо доставати....

// далі ми повині піти до файлу HTML і додати до нашого контейнера нашу розмітку чрез ul

// Наступне що нам потрібно визначитись з ти як буде виглядати наша картка
// дивимось що нам потрібно прокидати ключ forcast з нашого обьєкту і з нього focastday-
// це ы буде наш масив!
//Тому ідем і викликаємо в другому зені викликаємо функцію createMarkap, покидаємо наш обьект date
// з нього ключ forecast, з нього forecastday .
// В результаті чого ми дісталися до нашого обьєкту
// Тепер як ми до ньогоь дісталися, його треба деструктуризувати , використовуючи і вкладену деструктуризацію
// теппер йдемо і підставляєм наші значення в розмітку
// консолимо  в другому зені console.log(createMarkap(data.forecast.forecastday) та
// та отримали розмітку з підставленими значеннями
// <li>
//   <img src="//cdn.weatherapi.com/weather/64x64/day/176.png" alt="Patchy rain possible" />
//   <p>Patchy rain possible</p>
//   <h2>2023-09-07</h2>
//   <h3>24.4</h3>
// </li><li>
//   <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="Sunny" />
//   <p>Sunny</p>
//   <h2>2023-09-08</h2>
//   <h3>24.4</h3>
// </li><li>
//   <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="Sunny" />
//   <p>Sunny</p>
//   <h2>2023-09-09</h2>
//   <h3>24.1</h3>
// </li>

// Тепер лишилось розмітку помістити в ДОМ. Знов в другому зені викликаємо
//.then((data) => list.innerHTML = createMarkap(data.forecast.forecastday))
//ЧІПЛЯЄМО ДО LIST РЕЗУЛЬТАТ ВИКОНАННЯ ФУНКЦІІ, в результаті отрмаємо РОЗКЛАД ПОГОДМ

const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
search.addEventListener("submit", onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const { query, days } = evt.currentTarget.elements;
  getWeather(query.value, days.value)
    .then((data) => (list.innerHTML = createMarkap(data.forecast.forecastday)))
    .catch((err) => console.log(err));
}

function getWeather(city, days) {
  // http://api.weatherapi.com/v1/forecast.json?key=b387beaf1c134dc1926185440230609&q=Thassos&days=5
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "b387beaf1c134dc1926185440230609";

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkap(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li>
        <img src="${icon}" alt="${text}" />
        <p>${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c}</h3>
      </li>`
    )
    .join("");
}
