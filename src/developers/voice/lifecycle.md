# Livecycle

Before connecting to Livekit you must request a voice token for the channel you want to connect to.

Use the `/channels/{target}/join_call` route to get a token, specify the node you would like to connect to in the body.

after you receive a token and the node's url, connect to the livekit node using the url and token.

Once connected you will receive the voice and video streams via livekit's tracks.

## Events

### `VoiceChannelJoin`

A user has joined a voice channel.

### `VoiceChannelLeave`

A user has left a voice channel.

### `VoiceChannelMove`

A user has moved from one voice channel to another.

### `UserVoiceStateUpdate`

A user's voice state has updated, e.g. the user has started screensharing.

### `UserMoveVoiceChannel`

This event is sent when you are being forced moved channel, this will contain the new channel to connect to along with a voice token to use.
