import {Injectable, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable({
  providedIn:  'root'
})
export class DetailsService {

  //employees = [{
  //  firstName: 'Андрей',
  //  surName: 'Лунев',
  //  patronymic: 'Евгеньевич',
  //  dateOfBirth: '13.11.1991',
  //  position: 'Вратарь',
  //  state: true,
  //  comment: 'Зенит',
  //  photo: ''
  //},
  //  {
  //    firstName: 'Антон',
  //    surName: 'Шунин',
  //    patronymic: 'Владимирович',
  //    dateOfBirth: '21.01.1987',
  //    position: 'Вратарь',
  //    state: true,
  //    comment: 'Динамо',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Георгий',
  //    surName: 'Джикия',
  //    patronymic: 'Тамазович',
  //    dateOfBirth: '21.11.1993',
  //    position: 'Защитник',
  //    state: true,
  //    comment: 'Спартак',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Федор',
  //    surName: 'Кудряшов',
  //    patronymic: 'Васильевич',
  //    dateOfBirth: '05.04.1987',
  //    position: 'Защитник',
  //    state: true,
  //    comment: 'Рубин',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Эльмир',
  //    surName: 'Рамилевич',
  //    patronymic: 'Набиуллин',
  //    dateOfBirth: '08.03.1995',
  //    position: 'Защитник',
  //    state: true,
  //    comment: 'Зенит',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Константин',
  //    surName: 'Рауш',
  //    patronymic: 'Викторович',
  //    dateOfBirth: '15.03.1990',
  //    position: 'Защитник',
  //    state: true,
  //    comment: 'Динамо',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Игорь',
  //    surName: 'Смольников',
  //    patronymic: 'Александрович',
  //    dateOfBirth: '08.08.1988',
  //    position: 'Защитник',
  //    state: true,
  //    comment: 'Зенит',
  //    photo: ''
  //  },{
  //    firstName: 'Марио',
  //    surName: 'Фернандес',
  //    patronymic: 'Фигейра',
  //    dateOfBirth: '19.09.1990',
  //    position: 'Защитник',
  //    state: true,
  //    comment: 'ЦСКА',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Юрий',
  //    surName: 'Газинский',
  //    patronymic: 'Александрович',
  //    dateOfBirth: '20.07.1989',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Краснодар',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Александр',
  //    surName: 'Ерохин',
  //    patronymic: 'Юрьевич',
  //    dateOfBirth: '13.10.1989',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Зенит',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Роман',
  //    surName: 'Зобнин',
  //    patronymic: 'Сергеевич',
  //    dateOfBirth: '11.02.1994',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Спартак',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Алексей',
  //    surName: 'Ионов',
  //    patronymic: 'Сергеевич',
  //    dateOfBirth: '18.02.1989',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Ростов',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Далер',
  //    surName: 'Кузяев',
  //    patronymic: 'Адьямович',
  //    dateOfBirth: '15.01.1993',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Зенит',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Денис',
  //    surName: 'Черышев',
  //    patronymic: 'Дмитриевич',
  //    dateOfBirth: '26.12.1990',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Валенсия',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Александр',
  //    surName: 'Голович',
  //    patronymic: 'Сергеевич',
  //    dateOfBirth: '30.05.1996',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Монако',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Алексей',
  //    surName: 'Миранчук',
  //    patronymic: 'Андреевич',
  //    dateOfBirth: '17.10.1995',
  //    position: 'Полузащитник',
  //    state: true,
  //    comment: 'Локомотив',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Артем',
  //    surName: 'Дзюба',
  //    patronymic: 'Сергеевич',
  //    dateOfBirth: '22.08.1988',
  //    position: 'Нападающий',
  //    state: true,
  //    comment: 'Зенит',
  //    photo: ''
  //  },{
  //    firstName: 'Антон',
  //    surName: 'Заболотный',
  //    patronymic: 'Константинович',
  //    dateOfBirth: '13.06.1991',
  //    position: 'Нападающий',
  //    state: true,
  //    comment: 'Гений',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Александр',
  //    surName: 'Кокорин',
  //    patronymic: 'Александрович',
  //    dateOfBirth: '19.03.1991',
  //    position: 'Нападающий',
  //    state: false,
  //    comment: 'Зенит',
  //    photo: ''
  //  },
  //  {
  //    firstName: 'Федор',
  //    surName: 'Чалов',
  //    patronymic: 'Николаевич',
  //    dateOfBirth: '10.04.1998',
  //    position: 'Нападающий',
  //    state: true,
  //    comment: 'ЦСКА',
  //    photo: ''
  //  }
  //];

  employees: Employee[] = [];
  employeesObj;

  constructor(private db: AngularFireDatabase)  {}

  readEmployees() {
    this.employees = [];
    this.db.list('/').valueChanges().subscribe((data) => {
      this.employeesObj = data;
      for (let key in this.employeesObj[0]) {
        this.employees.push(this.employeesObj[0][`${key}`]);
        this.employees[this.employees.length-1].key = key;
      }
    })
  }

  addEmployee(employee: Employee) {
    this.db.list('/employees').push(employee);
  }

  delEmployee(index: string) {
    console.log(index);
    this.db.list('/employees').remove(index);
  }

  editEmployee(index: string, employee: Employee) {
    console.log(index, employee)
    this.db.list('/employees').update(index, employee)
  }

}