---
title: Member
---

Объект участника сервера.

Отличие этого типа от [User](user.md) в том, что здесь участник рассматривается в контексте Discord-сервера, а не как независимый от конкретного сервера пользователь.

## .avatar

Ссылка на аватар участника.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .joinedTimestamp

Дата присоединения к серверу.

[number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)

## .nickname

Никнейм участника.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .pending

Прошел ли участник отбор.

[boolean](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## .permissions

Разрешения участника.

[Array](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)>

## .roles

Роли участника.

[Array](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)\<[Role](role.md)>

## .user

Информация о пользователе.

[User](user.md)

## .voice

Голосовой канал участника.

?[VoiceState](voicestate.md)
