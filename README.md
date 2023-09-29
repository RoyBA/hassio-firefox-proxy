# Home Assistant Add-on: Firefox Proxy

<img src="https://github.com/RoyBA/hassio-firefox-proxy/raw/main/firefox-proxy/logo.png" height="80px"/></a>

<img src="https://img.shields.io/badge/release-1.2.0-blue" /></a>
<img src="https://img.shields.io/badge/project%20stage-expirimental-orange" /></a>
<img src="https://img.shields.io/badge/license-MIT-green" /></a>

<img src="https://img.shields.io/badge/aarch64-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/amd64-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/armhf-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/armv7-yes-brightgreen" /></a>
<img src="https://img.shields.io/badge/i386-yes-brightgreen" /></a>

This Home Assistant add-on enables you to utilize the Firefox web interface within the Home Assistant UI.

## Pre-Installation
---
Before proceeding, you need to launch a [Firefox Docker container](https://github.com/jlesage/docker-firefox#quick-start).

**NOTE**: The Firefox Docker container must share its network namespace with the Home Assistant network.  
Below is an example Docker command to run the container in **hassio networking mode**:

```shell
docker run -d \
    --name=firefox \
    --net=hassio \
    -p 5800:5800 \
    -v /docker/appdata/firefox:/config:rw \
    -v /usr/share/fonts:/usr/share/fonts:rw \
    -e DARK_MODE=1 \
    -e DISPLAY_HEIGHT=900 \
    -e DISPLAY_WIDTH=1600 \
    --shm-size 2g \
    jlesage/firefox
```

Alternatively, you can use the following `docker-compose.yml` file with
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
      - "/usr/share/fonts:/usr/share/fonts:rw"
    environment:
      - DARK_MODE=1
      - DISPLAY_HEIGHT=900
      - DISPLAY_WIDTH=1600
```

## Configuration
---
| Parameter | Description |
|-----------|-------------|
| Server Container Name        | The name of the Firefox Docker container. |
| Server Port        | The port to access the application's GUI via the web interface. |
| Secure connection        | When enabled, the application's GUI is accessed over an HTTPS connection. |
