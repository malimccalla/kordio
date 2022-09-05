
## BUILD PHASE ##
FROM node:14.17.0-alpine as builder
WORKDIR /app

RUN apk add --update python3 make g++\
  && rm -rf /var/cache/apk/*

COPY ./package.json .
COPY ./yarn.lock .
COPY ./tsconfig.json .
COPY ./packages/api/package.json ./packages/api/

# Will use cache unless any of the above files have changed
RUN yarn install

# Copy the source code to be built
COPY ./packages/api/ ./packages/api/

RUN yarn --cwd packages/api run build

## RUN PHASE ##
FROM node:14.17.0-alpine
WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/packages/api/package.json ./packages/api/

RUN yarn install --production

COPY --from=builder /app/packages/api/dist ./packages/api/src

# Prisma needs to be here to run migraitons. For whatever reason src doesnt exist in dist
# COPY --from=builder /app/packages/api/src/prisma ./packages/api/dist/src/prisma

ENV NODE_ENV production
EXPOSE 4000

WORKDIR /app/packages/api

RUN echo $(ls -1 packages/api)

CMD ["yarn", "run", "migrate:start:prod"]