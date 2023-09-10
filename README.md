# VSG Relay Peer
<a href="https://github.com/fanboykun/gun-relay"> Relay Server Repo </a>
<a href="https://github.com/fanboykun/vsg"> VSG (app) Repo </a>

### Introduction

    This project is the relay server version of vsg.
    A relay that connect & communicate the vsg app.
    Make sure to follow all of the instructions.

### Pre Requisite

- Node version 18x
- npm or pnpm latest version
- Terminal

### Instalation

- install all the dependencies :
  ```npm install```
or if you prefer using pnpm :
    ```pnpm i```

### Development

    You can modify the start.js file and public/index.html file.
    The start.js file contains the configuration of the relay.

    The public/index.html file contains the information about the relay.

    and finally, the store directory contains the data that being stored in the relay.

you can reset the data by deleting the store directory, or by simply doing this :
- navigate to the project's directory(this directory).
- then execute this command
```rm -rf store```

### Running The Server

- navigate to the project's directory(this direcory)
- type this command :
  ```node start.js```

