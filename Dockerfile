FROM cypress/included:13.11.0
RUN apt-get update -y
RUN apt-get upgrade -y

WORKDIR /e2e
COPY . .

COPY ./package.json .
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress

RUN npm install


CMD ["npx", "cypress", "run"]
