# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема


## Модель бізнес-об'єктів 
```md
@startuml
entity SelectedAlt <<ENTITY>>

  entity Alt <<ENTITY>>
  entity Alt.id <<NUMBER>> #ffffff
  entity Alt.text <<TEXT>> #ffffff
  entity Alt.type <<TEXT>> #ffffff

  entity SurveyState <<ENTITY>>
  entity SurveyState.name <<TEXT>> #ffffff

  entity SurveyAction <<ENTITY>>
  entity SurveyAction.at <<DATE>> #ffffff

  entity Answer <<ENTITY>>
  entity Answer.id <<NUMBER>> #ffffff
  entity Answer.text <<TEXT>> #ffffff
  entity Answer.date <<DATE>> #ffffff
  entity Answer.userId <<NUMBER>> #ffffff
  
  entity Expert <<ENTITY>>
  entity Expert.id <<NUMBER>> #ffffff
  entity Expert.job <<TEXT>> #ffffff
  
  entity User <<ENTITY>>
  entity User.username <<TEXT>> #ffffff
  entity User.mail <<TEXT>> #ffffff
  entity User.password <<TEXT>> #ffffff
  entity User.id <<NUMBER>> #ffffff

  entity Question <<ENTITY>>
  entity Question.id <<NUMBER>> #ffffff
  entity Question.text <<TEXT>> #ffffff
  entity Question.type <<TEXT>> #ffffff

  entity Survey <<ENTITY>>
  entity Survey.id <<NUMBER>> #ffffff
  entity Survey.text <<TEXT>> #ffffff
  entity Survey.type <<TEXT>> #ffffff
  entity Survey.topic <<TEXT>> #ffffff
  entity Survey.date <<DATE>> #ffffff
  
  User.username -u-* User
  User.mail -u-* User
  User.password -u-* User
  User.id -u-* User

  Expert.id -d-* Expert
  Expert.job -d-* Expert

  Alt.id -u-* Alt
  Alt.text -u-* Alt
  Alt.type -u-* Alt

  SurveyState.name -l-* SurveyState

  SurveyAction.at -r-* SurveyAction

  Answer.id -u-* Answer
  Answer.text -u-* Answer
  Answer.date -u-* Answer
  Answer.userId -u-* Answer
  
  Question.id -u-* Question
  Question.text -u-* Question
  Question.type -u-* Question

  Survey.id -d-* Survey
  Survey.text -d-* Survey
  Survey.type -d-* Survey
  Survey.topic -d-* Survey
  Survey.date -d-* Survey


  User "1,1" -u- "0,*" Expert
  Expert "0,*"-d- "1,1" Answer
  Question"1,1"-l- "0,*" Answer
  Survey "1,1" -d- "0,*" Answer
  Survey "1,1" -d- "0,*" Question
  Survey "1,1" -r- "0,*" SurveyState
  Survey "1,1" -l- "0,*" SurveyAction
  Question "1,1" -d- "0,*" Alt
  Answer"1,1" -d- "0,*" Alt
  Answer"1,1" -d- "0,*" SelectedAlt
  SelectedAlt"1,1"-r- "0,*"Alt
@enduml
```

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
   
@startuml
  entity SelectedAlt <<ENTITY>>

  entity Alt <<ENTITY>>
  entity Alt.id <<NUMBER>> #ffffff
  entity Alt.text <<TEXT>> #ffffff
  entity Alt.type <<TEXT>> #ffffff

  entity SurveyState <<ENTITY>>
  entity SurveyState.name <<TEXT>> #ffffff

  entity SurveyAction <<ENTITY>>
  entity SurveyAction.at <<DATE>> #ffffff

  entity Answer <<ENTITY>>
  entity Answer.id <<NUMBER>> #ffffff
  entity Answer.text <<TEXT>> #ffffff
  entity Answer.date <<DATE>> #ffffff
  entity Answer.userId <<NUMBER>> #ffffff
  
  entity Expert <<ENTITY>>
  entity Expert.id <<NUMBER>> #ffffff
  entity Expert.job <<TEXT>> #ffffff
  
  entity User <<ENTITY>>
  entity User.username <<TEXT>> #ffffff
  entity User.mail <<TEXT>> #ffffff
  entity User.password <<TEXT>> #ffffff
  entity User.id <<NUMBER>> #ffffff

  entity Question <<ENTITY>>
  entity Question.id <<NUMBER>> #ffffff
  entity Question.text <<TEXT>> #ffffff
  entity Question.type <<TEXT>> #ffffff

  entity Survey <<ENTITY>>
  entity Survey.id <<NUMBER>> #ffffff
  entity Survey.text <<TEXT>> #ffffff
  entity Survey.type <<TEXT>> #ffffff
  entity Survey.topic <<TEXT>> #ffffff
  entity Survey.date <<DATE>> #ffffff
  
  User.username -u-* User
  User.mail -u-* User
  User.password -u-* User
  User.id -u-* User

  Expert.id -d-* Expert
  Expert.job -d-* Expert

  Alt.id -u-* Alt
  Alt.text -u-* Alt
  Alt.type -u-* Alt

  SurveyState.name -l-* SurveyState

  SurveyAction.at -r-* SurveyAction

  Answer.id -u-* Answer
  Answer.text -u-* Answer
  Answer.date -u-* Answer
  Answer.userId -u-* Answer
  
  Question.id -u-* Question
  Question.text -u-* Question
  Question.type -u-* Question

  Survey.id -d-* Survey
  Survey.text -d-* Survey
  Survey.type -d-* Survey
  Survey.topic -d-* Survey
  Survey.date -d-* Survey


  User "1,1" -u- "0,*" Expert
  Expert "0,*"-d- "1,1" Answer
  Question"1,1"-l- "0,*" Answer
  Survey "1,1" -d- "0,*" Answer
  Survey "1,1" -d- "0,*" Question
  Survey "1,1" -r- "0,*" SurveyState
  Survey "1,1" -l- "0,*" SurveyAction
  Question "1,1" -d- "0,*" Alt
  Answer"1,1" -d- "0,*" Alt
  Answer"1,1" -d- "0,*" SelectedAlt
  SelectedAlt"1,1"-r- "0,*"Alt
@enduml
</center>
    

## ER-модель
```md
@startuml
entity User <<ENTITY>> {
    id:INT
    usersname:TEXT
    mail:TEXT
  }
  
  entity Expert <<ENTITY>>{
    id:INT
    job:TEXT
  }
  
  entity Survey <<ENTITY>>{
    id:INT
    text:TEXT
    type:TEXT
    topic:TEXT
    date:DATE
  }
  
  entity Question <<ENTITY>>{
    id:INT
    type:TEXT
    text:TEXT
    min: int
    max: int
  }

    entity Alt <<ENTITY>>{
        id:INT
        type:TEXT
        text:TEXT
    }

  entity Answer <<ENTITY>> {
    userId:INT
    id:INT
    text:TEXT
    data:DATE
  }
  
  entity SelectedAlt {
  }
  
  entity SurveyState {
    name: text
  }
  
  entity SurveyAction {
    at:Date
  }
  
  

  SurveyAction -> User: actor
  SurveyAction -u-> User: collaborator

  Answer "0, *" -u- "1, 1" Survey
  Answer "0, *" -u- "1, 1" Question
  Survey "0, *" -u- "1, 1" Question
  Answer "1, 1" -u- "0, *" Expert
  Expert "0, *" -u- "1, 1" User
  Question "1,1" -d- "0,*" Alt
  Answer "1,1" -d- "0,*" Alt
  Answer"1,1" -d- "0,*" SelectedAlt
  SelectedAlt"1,1"-r- "0,*"Alt
  Survey "1,1" -r- "0,*" SurveyState
  Survey "1,1" -l- "0,*" SurveyAction
@enduml
```

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
   
@startuml
entity User <<ENTITY>> {
    id:INT
    usersname:TEXT
    mail:TEXT
  }
  
  entity Expert <<ENTITY>>{
    id:INT
    job:TEXT
  }
  
  entity Survey <<ENTITY>>{
    id:INT
    text:TEXT
    type:TEXT
    topic:TEXT
    date:DATE
  }
  
  entity Question <<ENTITY>>{
    id:INT
    type:TEXT
    text:TEXT
    min: int
    max: int
  }

    entity Alt <<ENTITY>>{
        id:INT
        type:TEXT
        text:TEXT
    }

  entity Answer <<ENTITY>> {
    userId:INT
    id:INT
    text:TEXT
    data:DATE
  }
  
  entity SelectedAlt {
  }
  
  entity SurveyState {
    name: text
  }
  
  entity SurveyAction {
    at:Date
  }
  
  

  SurveyAction -> User: actor
  SurveyAction -u-> User: collaborator

  Answer "0, *" -u- "1, 1" Survey
  Answer "0, *" -u- "1, 1" Question
  Survey "0, *" -u- "1, 1" Question
  Answer "1, 1" -u- "0, *" Expert
  Expert "0, *" -u- "1, 1" User
  Question "1,1" -d- "0,*" Alt
  Answer "1,1" -d- "0,*" Alt
  Answer"1,1" -d- "0,*" SelectedAlt
  SelectedAlt"1,1"-r- "0,*"Alt
  Survey "1,1" -r- "0,*" SurveyState
  Survey "1,1" -l- "0,*" SurveyAction
@enduml
</center>


## Реляційна схема
![3](https://github.com/readme-experts/expert-surveys/blob/lab5/src/img/eer.png)
