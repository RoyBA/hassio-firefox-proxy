# Home Assistant Add-on: Firefox Proxy

<img src="./logo.png" height="80px"/></a>

<img src="https://img.shields.io/badge/release-1.2.0-blue" /></a>
<img src="https://img.shields.io/badge/project%20stage-expirimental-orange" /></a>
<img src="https://img.shields.io/badge/license-MIT-green" /></a>

<img src="https://img.shields.io/badge/aarch64-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/amd64-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/armhf-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/armv7-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/i386-yes-brightgreen" /></a>

Allows you to use Firefox web interface within Home Assistant UI.

## Pre-Installation
---
Launch [Firefox docker container](https://github.com/jlesage/docker-firefox#quick-start).

**NOTE**: The Firefox Docker container needs to share its network namespace with the Home Assistant network.  
Below is an example Docker command to run the container in hassio networking mode:

```shell
docker run -d \
    --name=firefox \
    --net=hassio \
    -p 5800:5800 \
    -v /docker/appdata/firefox:/config:rw \
    --shm-size 2g \
    jlesage/firefox
```

Here is an example of a `docker-compose.yml` file that can be used with
[Docker Compose](https://docs.docker.com/compose/overview/).

```yaml
version: '3'
services:
  firefox:
    image: jlesage/firefox
    ports:
      - "5800:5800"
    networks:
      - hassio
    volumes:
      - "/docker/appdata/firefox:/config:rw"
```

## Configuration
---
| Parameter | Description |
|-----------|-------------|
| Server Container Name        | Docker container name. |
| Server Port        | Port to access the application's GUI via the web interface. |
| Secure connection        | When enabled, application's GUI is performed over an HTTPs connection. |