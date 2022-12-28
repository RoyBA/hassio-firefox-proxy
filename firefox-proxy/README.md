# Home Assistant Add-on: Firefox Proxy

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

## Configuration
---
| Parameter | Description |
|-----------|-------------|
| Server Container Name        | Docker container name. |
| Server Port        | Port to access the application's GUI via the web interface. |
| Secure connection        | When enabled, application's GUI is performed over an HTTPs connection. |