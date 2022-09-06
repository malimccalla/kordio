## BUILD PHASE ##
FROM node:14.17.0-alpine as builder
WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./tsconfig.json .
COPY ./packages/www/package.json ./packages/www/package.json

# Will use cache unless any of the above files have changed
RUN yarn install

COPY ./packages/www/ ./packages/www/

ARG API_ENDPOINT
ARG DEPLOY_ENV

ENV NEXT_PUBLIC_DEPLOY_ENV=$DEPLOY_ENV
ENV NEXT_PUBLIC_API_ENDPOINT=$API_ENDPOINT

RUN yarn --cwd packages/www run build

## RUN PHASE ##
FROM node:14.17.0-alpine
WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/packages/www/package.json ./packages/www/package.json

RUN yarn install --production

# Get the build output
COPY --from=builder /app/packages/www/.next /app/packages/www/.next

# Copy over the public folder
COPY --from=builder /app/packages/www/public /app/packages/www/public

WORKDIR /app/packages/www

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npx", "next", "start"]