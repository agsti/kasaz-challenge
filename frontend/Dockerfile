# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:12.2.0-alpine as build-stage

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY tsconfig.json ./
COPY .babelrc ./
COPY webpack.config.js ./
COPY src/ ./src
COPY public/ ./public

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM tutum/nginx
RUN rm /etc/nginx/sites-enabled/default
COPY ./public/ /var/www/public/
COPY --from=build-stage /app/dist/ /var/www/dist/

COPY ./nginx/sites-enabled/ /etc/nginx/sites-enabled
