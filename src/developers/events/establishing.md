# Establishing a connection

To get started, you should have:

- A WebSocket URL, which is found from the API root.
- A valid session or bot token.

You may authenticate in one of two ways:

- Include credentials in the connection URL, see [Query Parameters](#query-parameters).
- Sending an [Authenticate](./protocol.md#authenticate) event to the server.

You should listen out for [Error](./protocol.md#error) events to find out if your credentials are incorrect or if something goes wrong here.

After authenticating, the server will respond with [Authenticated](./protocol.md#authenticated) then it will send a [Ready](./protocol.md#ready) event containing useful data.

The server will now start sending relevant events as they come in.

You should [Ping](./protocol.md#ping) the server every 10 to 30 seconds to prevent your connection being dropped.

Bots receive all events, normal users do not receive UserUpdate events fanned out through servers by default, [read more here](./protocol.md#subscribe).

## Query Parameters

The Bonfire service supports additional query parameters:

| Parameter | Description                                           | Values            | Required |
| --------- | ----------------------------------------------------- | ----------------- | -------- |
| `version` | Describes the protocol version in use.                | `1`               | No †     |
| `format`  | In what format to send packets, default is JSON.      | `json`, `msgpack` | No       |
| `token`   | Session token for authenticating the connecting user. |                   | No       |

† `version` may become compulsary in the future, please set it to `1` if you can.

You may specify these in the connection URL: `wss://ws.revolt.chat?version=1&format=json`.
