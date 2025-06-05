# Getting Started with voice channels

Revolts voice channels internally use [Livekit](https://livekit.io/) to handle most of the heavy lifting however Revolt has an extra layer on top to handle everything revolt specific.

Livekit has a variety of libraries premade in lots of different languages which you can make use of to handle most of the underlying webrtc and transport components. these libraries should work
as is without any modifications - if there is a bug in one of their libraries please try file an issue on their github.

see how to connect and start sending and receiving data in the [lifecycle](./lifecycle.md) page.

# Voice Nodes

Revolt hosts multiple livekit nodes in different locations around the world to help lower latency in voice channels, you must specify a node when getting a voice token, each token can only work on
its corrasponding node, the available nodes you can connect to can be found by requesting the api info via the `/` route.

## Choosing a node

If you are the first user in the voice channel the node you request when requesting a voice token will be used for that voice channel, other users connecting will be forced to connect to the same node
regardless of if they specify a different node when requesting a voice token.

You should always try specify the node with the best latency from you, even if you are not the first user in the voice channel, and you should not rely on the node url that is returned with the voice token to match the node you request to join, always use what is returned.

# Keeping track of voice states

The Ready event payload contains the current user voice states for all users the current user can see and should update this cache from the voice events you will receive over the course of the clients
lifetime. each user voice state contains whether they are deafend, muted, has their camera on and whether they are screensharing.

To check whether a user is server-wide muted or deafend you can check `Member.can_publish` and `Member.can_receive`.