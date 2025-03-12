---
title: "Quickstart - Onyx Documentation"
source: "https://docs.onyx.app/quickstart"
author:
  - "[[Onyx Documentation]]"
published:
created: 2025-03-12
description: "How to deploy Onyx on your local machine"
tags:
  - "clippings toview"
---
## 

[​](https://docs.onyx.app/#requirements)

Requirements

- Git
- Docker with compose (docker version >= 1.13.0)

## 

[​](https://docs.onyx.app/#setup)

Setup

The most common source of issues is under-resourcing. Before beginning, check the system requirements [here](https://docs.onyx.app/resourcing).

Note: This is just one way to run Onyx. Onyx can also be run on Kubernetes, there are provided Kubernetes manifests and Helm charts in the [deployment](https://github.com/onyx-dot-app/onyx/tree/main/deployment) directory.

1. Clone the [Onyx](https://github.com/onyx-dot-app/onyx) repo:

```bash
git clone https://github.com/onyx-dot-app/onyx.git
```

1. Navigate to **onyx/deployment/docker\_compose**

```bash
cd onyx/deployment/docker_compose
```

1. (Optional) [configure Onyx](https://docs.onyx.app/configuration_guide)
2. Bring up your docker engine and run:

- To pull images from DockerHub and run Onyx:

```bash
docker compose -f docker-compose.dev.yml -p onyx-stack up -d --pull always --force-recreate
```

- Alternatively, to build the containers from source and start Onyx, run:

```bash
docker compose -f docker-compose.dev.yml -p onyx-stack up -d --build --force-recreate
```

- This may take 15+ minutes depending on your internet speed.
- Additionally, once the images have been pulled / built, the initial startup of the `api_server` may take some time. If you see `This site can’t be reached` in your browser despite all containers being up and running, check the `api_server` logs and make sure you see `Application startup complete`.
- If you see `Killed` in the logs, you may need to increase the amount of memory given to Docker. For recommendations, check the system requirements [here](https://docs.onyx.app/resourcing).

These commands are also used to redeploy if any **.env** variables are updated

1. Onyx will now be running on [http://localhost:3000](http://localhost:3000/).

## 

[​](https://docs.onyx.app/#generative-ai-api-key)

Generative AI API Key

**Note:** On the initial visit, Onyx will prompt for a GenAI API key.

For example, you can get an OpenAI API key at: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

Onyx relies on Generate AI models to provide parts of its functionality. You can choose any LLM provider from the admin panel or even self-host a local LLM for a truely airgapped deployment.

## 

[​](https://docs.onyx.app/#shutting-down)

Shutting Down

```bash
docker compose -f docker-compose.dev.yml -p onyx-stack down
```

add `-v` at the end to additionally delete the volumes (containing users, indexed documents, etc.)

[Introduction](https://docs.onyx.app/introduction)[Resourcing](https://docs.onyx.app/resourcing)