# Docker-Names

Docker Names generates semi-random, easy to remember names similar to how docker names its containers. For example, `desperate_fermi`, `cranky_heyrovsky` or `tender_mahavira`.

Or as seen from the docker client container list: 
![Docker container list](http://i.imgur.com/Ws7B38h.png)


Current Build Status: ![Build Status](https://circleci.com/gh/bearjaws/docker-names.png?circle-token=d89f3fd5c89d8f2e12c2fd3f7e759f42e735e5fd "CI Build Status")

### Usage

Usage is very simple as this module only exports one method:
```javascript
var dockerNames = require('docker-names');
console.log(dockerNames.getRandomName());
$ angry_nobel
```

Additionally, per dockers specification they have a "retry" counter that appends a *random** number if set to true or a number greater than 0.
For example:
```javascript
console.log(dockerNames.getRandomName(true));
$ jolly_mclean3

console.log(dockerNames.getRandomName(3));
$ backstabbing_roentgen5
```
`*` This uses Math.random which means its not very random. These names should never be used as any sort of unique id. The names are mostly applicable for small lists of ephemeral objects that you want to have easy to remember identifiers for.

### Word Lists

This module exports the full docker name lists as two arrays.
```javascript
// This contains all adjectives i.e. "left words"
dockerNames.adjectives = Array('admiring', 'adoring'...);

// This contains all surnames to use as "right words"
dockerNames.surnames = Array('albattani', 'allen' ...);
```