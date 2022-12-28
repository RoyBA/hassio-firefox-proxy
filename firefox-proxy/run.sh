#!/usr/bin/with-contenv bashio

CONFIG_PATH=/data/options.json

IS_SECURED=$(bashio::config 'is_secured')
SERVER_CONTAINER_NAME=$(bashio::config 'server_container_name')
SERVER_PORT=$(bashio::config 'server_port')

bashio::log.info "${IS_SECURED}"
bashio::log.info "${SERVER_CONTAINER_NAME}"
bashio::log.info "${SERVER_PORT}"

npm install;
npm start ${IS_SECURED} ${SERVER_CONTAINER_NAME} ${SERVER_PORT};