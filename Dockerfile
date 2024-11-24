FROM cypress/browsers:node-22.11.0-chrome-131.0.6778.69-1-ff-132.0.2-edge-131.0.2903.51-1

RUN mkdir /CypresTest

WORKDIR /CypresTest

COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT [ "npx","cypress","run" ]
CMD [""]
