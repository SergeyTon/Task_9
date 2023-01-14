
const personGenerator = {

    
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    
    firstNameMaleJson: `{                                      
        "count": 10,
        "list": {     
            "id_1": "Артур",
            "id_2": "Никита",
            "id_3": "Иван",
            "id_4": "Дмитрий",
            "id_5": "Александр",
            "id_6": "Владислав",
            "id_7": "Михаил",
            "id_8": "Денис",
            "id_9": "Платон",
            "id_10": "Андрей"
        }
    }`,

    
    firstNameFemaleJson: `{                                    
        "count": 10,
        "list": {     
            "id_1": "Наталья",
            "id_2": "Вероника",
            "id_3": "Елена",
            "id_4": "Анастасия",
            "id_5": "Татьяна",
            "id_6": "Мария",
            "id_7": "Юлия",
            "id_8": "Людмила",
            "id_9": "Ольга",
            "id_10": "Ангелина"
        }
    }`,

    
    middlenameJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Иванов",
            "id_2": "Александров",
            "id_3": "Петров",
            "id_4": "Сергеев",
            "id_5": "Андреев",
            "id_6": "Владимиров",
            "id_7": "Константинов",
            "id_8": "Леонидов",
            "id_9": "Павлов",
            "id_10": "Витальев"  
        }
    }`,

    
    bdatesJson: `{
        "count" : 12,
        "list" : {
            "id_1": ["января", "31"],
            "id_2": ["февраля", "28"],
            "id_3": ["марта", "31"],
            "id_4": ["апреля", "30"],
            "id_5": ["мая", "31"],
            "id_6": ["июня", "30"],
            "id_7": ["июля", "31"],
            "id_8": ["августа", "31"],
            "id_9": ["сентября", "30"],
            "id_10": ["октября", "31"],
            "id_11": ["ноября", "30"],
            "id_12": ["декабря", "31"]
        }
    }`,

    
    professionJson: `{

        "univer" : {
            "1": "Полицейский",
            "2": "Проектировщик",
            "3": "Врач",
            "4": "Дизайнер",
            "5": "Парикмахер",
            "6": "Маркетолог",
            "7": "Художник",
            "8": "Спортсмен",
            "9": "Кондитер",
            "10": "Кулинар",
            "11": "Повар",
            "12": "Писатель",
            "13": "Журналист",
            "14": "Редактор",
            "15": "Администратор"
            
        },

        "female" : {
            "16": "Учительница",
            "17": "Бухгалтер",
            "18": "Закройщица",
            "19": "Официантка",
            "20": "Стюардесса",
            "21": "Медсестра",
            "22": "Секретарь",
            "23": "Уборщица",
            "24": "Маникюрша",
            "25": "Косметолог"
        },

        "male" : {
            "16": "Водитель",
            "17": "Плотник",
            "18": "Столяр",
            "19": "Каменщик",
            "20": "Сантехник",
            "21": "Спасатель",
            "22": "Военный",
            "23": "Комбайнер",
            "24": "Стропальщик",
            "25": "Механик"
        }
        
    }`,

  

    
    genderParameter: '',

    // рандом и округление, для всех.
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

        // выбирает случайное значение из JSON
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  
        return obj.list[prop];
    },

    // генерация Пола
     randomGender: function () {
        this.randomIntNumber() == 0 ? this.genderParameter = 'Мужчина' : this.genderParameter = 'Женщина';
        return this.genderParameter;
        console.log(personGenerator.randomIntNumber());
    },
 // генерация фамилии
 randomSurname: function () {

    let surname = this.randomValue(this.surnameJson);
    if (this.genderParameter == 'Женщина') {
        surname += 'a';
    }
    return surname;
},

    // генерация имени в зависимости от пола
        randomFirstName: function () {
        if (this.genderParameter == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else if(this.genderParameter == 'Женщина') {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

   

    // генерация отчества
    randomMiddleName: function () {
        let middlename = this.randomValue(this.middlenameJson);
        this.genderParameter == 'Мужчина' ? middlename += 'ич' : middlename += 'на';
        return middlename;
    },

    // генерация года рождения
    randomBirthDates: function () {
        let year = this.randomIntNumber(1999, 1967);
        let date = this.randomValue(this.bdatesJson); // определяем id
        let month = date[0]; // определяем месяц
        let day = this.randomIntNumber(date[1], 1) ; // определяем число

        return day + ' ' + month + ' ' + year;
    },
    
    // генерация профессий, в зависимости от пола или универсальная
    randomProfession: function(){
        const obj = JSON.parse(this.professionJson);
        let genderProf = obj.univer;
        if (this.genderParameter == 'Мужчина'){
            genderProf = Object.assign(genderProf, obj.male);
        }
        else if(this.genderParameter == 'Женщина'){
            genderProf = Object.assign(genderProf, obj.female);
        }
        
        const count = Object.keys(genderProf).length;
        
        return genderProf[this.randomIntNumber(count, 1)];
    },


    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.middlename = this.randomMiddleName();
        this.person.birthDates = this.randomBirthDates();
        this.person.profession = this.randomProfession();
    


        return this.person;
    }
};