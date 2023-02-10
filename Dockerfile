FROM node:18.14 AS development
ENV NODE_ENV development

RUN npm install -g pnpm \
  && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
  && unzip awscliv2.zip \
  && ./aws/install

WORKDIR /app

COPY . .
# this commond would ouput the build result to dist folder
RUN pnpm install && pnpm build
#export DOCKER_BUILDKIT=0
#export COMPOSE_DOCKER_CLI_BUILD=0
EXPOSE 3000
CMD ["pnpm", "start"]
