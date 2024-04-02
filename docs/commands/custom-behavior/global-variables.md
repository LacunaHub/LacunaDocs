---
title: Глобальные переменные
description: Перечень глобальных переменных, доступных к использованию
---

### `channel`: _[Channel](data-types/channel.md)_

Канал, в котором произошло событие.

### `guild`: _[Guild](data-types/guild.md)_

Объект сервера.

### `member`: _[Member](data-types/member.md)_

Участник, который инициировал событие.

### `interaction`: _[Interaction](data-types/interaction.md)_

Объект взаимодействия. Доступно только в автоматизации для триггеров `INTERACTION_BUTTON`, `INTERACTION_SELECT_MENU` и `INTERACTION_MODAL_SUBMIT`.

### `message`: _[Message](data-types/message.md)_

Объект сообщения. Доступно только в автоматизации для триггеров `MESSAGE_CREATE`, `MESSAGE_DELETE` и `MESSAGE_UPDATE`.

### `voiceState`: _[VoiceState](data-types/voicestate.md)_

Объект голосового состояния. Доступно только в автоматизации для триггеров `VOICE_CONNECT` и `VOICE_DISCONNECT`.
