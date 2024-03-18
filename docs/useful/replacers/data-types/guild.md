# Guild

## .afk_channel_id

Идентификатор голосового канала, в который перемещаются AFK участники.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .banner

Ссылка на баннер сервера.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .boost_tier

Уровень буста сервера.

[number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)

## .booster_count

Количество бустеров на сервере.

[number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)

## .channels

Список каналов на сервере.

```javascript
// замените <channel_id> на идентификатор нужного канала
{ guild.channels.<channel_id>.name }
```

[Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<string, [Channel](channel.md)>

## .created_at

Дата создания сервера.

[number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)

## .description

Описание сервера.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .discovery_splash

Ссылка на заставку сервера в путешествии.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .icon

Ссылка на иконку сервера.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .id

Идентификатор сервера.

[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .member_count

Количество участников на сервере.

[number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)

## .name

Название сервера.

[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .name_acronym

Акроним названия сервера.

[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .owner

Владелец сервера.

[GuildOwner](guildowner.md)

## .presence_count

Количество участников на сервере, которые имеют статус в сети.

[number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)

## .public_updates_channel_id

Идентификатор канала для публичных обновлений.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .rules_channel_id

Идентификатор канала с правилами.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .safety_alerts_channel_id

Идентификатор канала для уведомлений о безопасности.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .splash

Ссылка на заставку для приглашений.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .system_channel_id

Идентификатор системного канала.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .vanity_url

Ссылка на пользовательское приглашение.

?[string](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## .voice_connection_count

Количество участников на сервере, которые находятся в голосовом канале.

[number](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number)
