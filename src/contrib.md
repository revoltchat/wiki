# Contribution Guide

This is the contribution guide for developers wanting to help out with Revolt.

Please first read our [GitHub contributors guidance](https://github.com/revoltchat/.github/blob/master/.github/CONTRIBUTING.md).

## Backend (Rust)

The backend can be quite demanding at times, it is recommended that you have:

- A modern multi-core CPU for Rust compilation.
- About 30gb of free disk space to ensure everything can be installed and built.

  **Tip:** run `cargo clean` semi-frequently to delete old build artifacts.

- At least 4gb of free memory.

  - Roughly half a gigabyte to run the Revolt stack
  - Betweeen 2-12gb to run Visual Studio Code with rust-analyzer
  - About 1gb to run a browser

You need the following prerequisites:

- Rust (ideally through rustup)
- Docker
- Git
- mold (optional but recommended, [see mold](https://github.com/rui314/mold))
- If you'd like to run revite:
  - Node.js (v16 at minimum)
  - Yarn (enable [corepack](https://nodejs.org/api/corepack.html#enabling-the-feature))

Please refer to the [technical documentation found here](https://revoltchat.github.io/backend/).

Now you are ready to follow the [development guide](https://github.com/revoltchat/backend#development-guide).

## Frontend (Typescript)

You need the following prerequisties:

- Node.js (LTS)
- pnpm (enable [corepack](https://nodejs.org/api/corepack.html#enabling-the-feature))

Please refer to the [technical documentation found here](https://revoltchat.github.io/frontend/).

Now you are ready to follow the [development guide](https://github.com/revoltchat/frontend#development-guide).

You should aim to test your changes on:

- A Chromium browser (e.g. Chrome or Edge)
- A WebKit browser (e.g. Safari or Epiphany)
- Firefox
