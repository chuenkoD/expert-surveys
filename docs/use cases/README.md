# Модель прецедентів


<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

[alt text](https://www.plantuml.com/plantuml/png/ZLExJkD05Etp5QDiiPMBR3P9iucoMcr9IOq6Pq0Hnexy40zH94OyEbFma10Iy0UM4qDa5ESNxlqZXZiGao516ScMVNJEcNlFt6bxFdVzODSg-LtV4YNsllviERRFlEwXQ5Rgp7GinsrkMjpSQS4D93ynWcV88MCuW2d4C88CZo6HNnEOO4GsmkumPLgYVsxwZilAS0ivzc6C0moL1i_AZ7jitHCk-o7audnES0KPRPDY7qEY_j_l2TTVIBw352Ro6S7Jcu3eQzpcsqlCBoGxXXUynX36a17_hysj0w_m9q7W2PDxWYG9Xge9cKACfr8SgHR-RLGqyeEiuf9wxUlKNnhr4KD8o3TLCJ8PyLGc5HRP5kgglX4r7SDGaLTm-Aqvt4DAUmzb716CljNMlcXpF8VnYhNNTRNKvNW2EHtRAWuDTIZqei4nWfxHelnrIEKy6mAZu-pPX5CL7xDKm8qbzDfYEi6paIdmwc9SfZxl7nX7BQhtaxs65Yu5t9RNIrxRLm00)

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

