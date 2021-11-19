<!-- @format -->

(@papoita)[https://github.com/papoita/snake-client] | ver 1.0.0

# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here.

# Purpose

BEWARE: This library was published for learning purposes. It is not intended for use in production-grade software.

This project was created and published by [Paola Perez Leiva](https://www.linkedin.com/in/perezleivapaola/) as part of my learnings at Lighthouse Labs.

## Getting Started

- Follow steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to run the server side using `npm run test` command.
- Run the development snake client using the `node play.js` command.

## Credit Where Credit Due

Our server code for this game was not written from scratch. It is a heavily modified version of the single player game Snek created by Tania Rascia. The demonstration GIF above is taken from the single-player version. It gives us a general idea of the gameplay and style, but ours is a heavily modified multi-player version of the game.

# Skills Learned

Callbacks,
Asynchronous control flow,
Modules in node,
Writing modular code,
Refactoring code,
Working with stdin
Connect a client to a server using TCP
