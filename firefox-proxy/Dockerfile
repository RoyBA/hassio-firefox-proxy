ARG BUILD_FROM
FROM $BUILD_FROM
 
ENV LANG C.UTF-8
ENV NODE_ENV=production
 
RUN apk add --no-cache npm jq
 
# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install --production
 
# Bundle app source
COPY . .
 
COPY ingress.conf /

COPY run.sh /
RUN chmod a+x /run.sh
 
CMD [ "/run.sh" ]