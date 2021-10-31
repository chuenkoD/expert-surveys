# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми

```md

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>
```

яка буде відображена наступним чином

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
title
        <font size=16 color=black>Зв'язок спадкування
    end title


    actor "Користувач" as User #eeeeaa
    actor "Експерт" as Expert #eeeeaa
    actor "Менеджер" as Manager #eeeeaa
    actor "Аналітик" as Analyst #eeeeaa

    usecase "Авторизація" as UC_1
    usecase "Реєстрація" as UC_2
    usecase "Створення опитування" as UC_3
    usecase "Редагування опитування" as UC_4
    usecase "Перегляд опитування" as UC_5
    usecase "Поширення опитування" as UC_6
    usecase "Проходження опитування" as UC_7

    
    User -up->UC_1
    User -up->UC_2
    Manager -down->UC_6
    Expert -down->UC_7
    Manager -down->UC_5
    Expert -down->UC_5
    Analyst -down->UC_3
    Analyst -down->UC_4

    Manager -u-|> User
    Expert -u-|> User
    Analyst -u-|> User
@enduml

@startuml

    actor "Експерт" as Expert #eeeeaa

    usecase "Проходження опитування" as UC_1 #aaeeaa
    usecase "Редагування відповідей" as UC_1.1
    usecase "Зміна відповіді" as UC_1.1.1
    usecase "Додавання відповіді" as UC_1.1.2
    usecase "Вибір декількох відповідей" as UC_1.1.3
    usecase "Завершення проходження \n опитування" as UC_1.2

    Expert-down->UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends

    UC_1.1.1 .u.> UC_1.1 :extends
    UC_1.1.2 .u.> UC_1.1 :extends
    UC_1.1.3 .u.> UC_1.1 :extends
@enduml

@startuml

    actor "Менеджер" as Manager #eeeeaa

    usecase "Поширення опитування" as UC_1 #aaeeaa
    usecase "Вибір способу поширення" as UC_1.1
    usecase "Посилання на опитування" as UC_1.1.1
    usecase "Поширення через соц. мережі" as UC_1.1.2

    Manager-down->UC_1
    UC_1.1 .u.> UC_1 :extends

    UC_1.1.1 .u.> UC_1.1 :extends
    UC_1.1.2 .u.> UC_1.1 :extends

@enduml

@startuml
actor "Аналітик" as Analyst #eeeeaa

    usecase "Редагування опитування" as UC_1 #aaeeaa
    usecase "Додавання питання" as UC_1.1
    usecase "Видалення питання" as UC_1.2
    usecase "Редагування питання" as UC_1.3

    Analyst-down->UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_1.3 .u.> UC_1 :extends
@enduml

**Діаграма прецедентів**

</center>

