# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## Модель бізнес-об'єктів 
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
![2](https://www.planttext.com/api/plantuml/img/VLB13e8m3Btp5Gr78ubU2J6Qo84BYN4cUfpImumCmZgL6FxT2KuW88Scw_Rw-lhMjI9Ua4vlZWE0aWILS51OA0Y2C6OHEwrMy39l02BnevZLH_r1I9wYpy9ZSvLoSRDPPQAb2vyv5jGb7F1Ti_DuxLuNTomdQmcVrCgWCk-8eYmNbpPDEA6_tR1mq6UdKP78v7IdFdUdRzLnRoFLOzI_ZsbHo_Pt1AEIzrIQiAJkOWup5ppjWRkSmzAr3arYVjCPb7Lq6lNZQfvgL5Fm_Ks3iVywPAeNg9x5g5-ZJCn-lG40)

## Реляційна схема
![3](https://github.com/readme-experts/expert-surveys/blob/lab5/src/img/eer.png)
