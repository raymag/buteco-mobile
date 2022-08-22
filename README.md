# Buteco: Mobile
Free open chat mobile application built with react native and socket.io as a study project, a challenge and a way to kill time. 
So currently there's a couple of things you can do with this app:

- Send messages (duh 😜)
- Set nicknames

We plan to add a whole bunch of other features if time and motivation lay their blessings uppon us mortals. Some of them are:
- Storing messages locally 
- 3rd party authentication for a unique and persistant ID 🌥️
- Rooms for different topics 
- Mute system
- Cool stats for nerds like myself 👾

![screenshot](https://user-images.githubusercontent.com/29918030/184980617-c00fbea4-c596-4d51-ab7f-783a936dbfc8.png)

## Installing

```bash
$ git clone https://github.com/raymag/buteco-mobile
$ cd buteco-mobile
$ npm install
$ npm start
```

## Building for Android on Windows
```bash
$ cd android
$ ./gradlew assembleRelease
```

By the way, if you're somehow interested in the backend part of this application, you can [check it out here](https://github.com/raymag/open-buteco-server). 
I also have a web version of this application (different backend) [here](https://github.com/raymag/buteco).
