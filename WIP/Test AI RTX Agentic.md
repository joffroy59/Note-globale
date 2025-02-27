---
tags:
  - status/wip
---
Test AI RTX agentic



plutot 
```embed
title: "Contents — Installation Guide for Linux 12.6 documentation"
image: "app://obsidian.md/_static/Logo_and_CUDA.png"
description: ""
url: "https://docs.nvidia.com/cuda/cuda-installation-guide-linux/contents.html"
```


pour faire par la suite du min 

[Getting Started — NVIDIA NIM for Large Language Models (LLMs)](https://docs.nvidia.com/nim/large-language-models/latest/getting-started.html)

# Getting Started
### Setup
- [x] - **NVIDIA AI Enterprise License**: NVIDIA NIM for LLMs are available for self-hosting under the NVIDIA AI Enterprise License. [Sign up for NVIDIA AI Enterprise license](https://www.nvidia.com/en-us/data-center/activate-license/). ✅ 2025-01-19
- [x] - **NVIDIA GPU(s)**: NVIDIA NIM for LLMs (NIM for LLMs) runs on any NVIDIA GPU with sufficient GPU memory, but some model/GPU combinations are optimized. Homogeneous multi-GPUs systems with [tensor parallelism](https://blogs.nvidia.com/blog/what-is-nvidia-nvlink/) enabled are also supported. See the [Support Matrix](https://docs.nvidia.com/nim/large-language-models/latest/support-matrix.html) for more information. ✅ 2025-01-19
- [-] **CUDA Drivers**: Follow the [installation guide](https://docs.nvidia.com/cuda/cuda-installation-guide-linux). We recommend:
      - Using a network repository as part of a [package manager installation](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/#package-manager-installation), skipping the CUDA toolkit installation as the libraries are available within the NIM container, then
    - Installing the [open kernels](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/#nvidia-open-gpu-kernel-modules) for a [specific version](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/#driver-installation):	
        |Major Version|EOL|Data Center & RTX/Quadro GPUs|GeForce GPUs|
        |---|---|---|---|
        |> 550|_TBD_|X|X|
        |550|Feb. 2025|X|X|
        |545|Oct. 2023|X|X|
        |535|June 2026|X||
        |525|Nov. 2023|X||
        |470|Sept. 2024|X||
	 [[#Installation Cuda driver]]
- [x] 1. Install [Docker](https://docs.docker.com/engine/install/) ✅ 2025-01-19
	- [x] Install the NVIDIA Container Toolkit packages: ✅ 2025-01-19
	- [x] Configure the container runtime by using the `nvidia-ctk` command: ✅ 2025-01-19
	- [x] # Running a Sample Workload[](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/sample-workload.html#running-a-sample-workload "Permalink to this headline") ✅ 2025-01-19
		- [x] Run a sample CUDA container: ✅ 2025-01-19
- [x] 2. Install the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installing-the-nvidia-container-toolkit) ✅ 2025-01-19
- [-] ## Launch NVIDIA NIM for LLMs[](https://docs.nvidia.com/nim/large-language-models/latest/getting-started.html#launch-nvidia-nim-for-llms "Link to this heading") ❌ 2025-01-26
	- [-] #### Generate an API Key ✅ 2025-01-26
	- [-] 1. Navigate to the [API Catalog](https://build.nvidia.com/).
		- [-] #[[#choose a model]] 

- [-]  version kubernetes #todo 
####  Installation Cuda driver

sur wsl 
 

- [x] 2. Pre-installation Actions
- [x] # 3. Package Manager Installation[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#package-manager-installation "Permalink to this headline") ✅ 2025-01-19
	- [x] ### 3.7.1. Prepare WSL[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#prepare-wsl "Permalink to this headline") ✅ 2025-01-19
	- [x] ### 3.7.3. Network Repo Installation for WSL[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#network-repo-installation-for-wsl "Permalink to this headline") ✅ 2025-01-19
	- [x] ### 3.7.4. Common Installation Instructions for WSL[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#common-installation-instructions-for-wsl "Permalink to this headline") ✅ 2025-01-19
		- [x] 1. Perform the [post-installation actions.](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#post-installation-actions) ✅ 2025-01-19
			- [x] ### 10.1.1. Environment Setup[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#environment-setup "Permalink to this headline") ✅ 2025-01-19
			- [x] ### 10.2.1. Install Writable Samples[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#install-writable-samples "Permalink to this headline") ✅ 2025-01-19
			- [x] ### 10.2.2. Verify the Installation[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#verify-the-installation "Permalink to this headline") ✅ 2025-01-19
			      ![[Pasted image 20250119210542-1.png]]
			      ![[Pasted image 20250119210731-1.png]]
- [x] # 4. Driver Installation[](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#driver-installation "Permalink to this headline")  [Driver Installation Guide for Linux](https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html) ✅ 2025-01-19
	- [x] Install NVIDIA Driver: **Open Kernel Modules** ✅ 2025-01-19


### choose a model

```embed
title: "mistral-7b-instruct-v0.3 Model by Mistral AI | NVIDIA NIM"
image: "https://assets.ngc.nvidia.com/products/api-catalog/images/mistral-7b-instruct-v03.jpg"
description: "This LLM follows instructions, completes requests, and generates creative text."
url: "https://build.nvidia.com/mistralai/mistral-7b-instruct-v03?snippet_tab=Docker"
```
![[Pasted image 20250119215018-1.png]]

dans WSL : **nvidia/test/**
#### Fix credentials docker login Nvidia

```sh
$ docker login nvcr.io
Username: $oauthtoken
Password: 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

```

```sh
export NGC_API_KEY=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
export LOCAL_NIM_CACHE=~/.cache/nim
mkdir -p "$LOCAL_NIM_CACHE"
docker run -it --rm \
    --gpus all \
    --shm-size=16GB \
    -e NGC_API_KEY \
    -v "$LOCAL_NIM_CACHE:/opt/nim/.cache" \
    -u $(id -u) \
    -p 8000:8000 \
    nvcr.io/nim/mistralai/mistral-7b-instruct-v0.3:latest


```

probleme de credentials : 
fix par changement du gestionnaire de credentials 
```sh
(base) joffroy@AsusGame:~/nvidia/test$ more ~/.docker/config.json
{
  "credsStore": "desktop.exe"
}
```

--> 
```sh
(base) joffroy@AsusGame:~/nvidia/test$ more ~/.docker/config.json
{
  "credStore": "desktop.exe"
}
```

login 
```sh
$ docker login nvcr.io
Username: $oauthtoken
Password: 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
```

et après login 
```sh
(base) joffroy@AsusGame:~/nvidia/test$ more ~/.docker/config.json
{
  "auths": {
    "nvcr.io": {
      "auth": "JG9hdXRodG9rZW46bnZhcGktLVFTQXBRZm56VUxJUzVwV2xjSG5taklwNVJOZ0RLUklGOXBFVVlmN0FONFBPNEJMdi1kd0JaUlRYR2pFcDdtNA=="
    }
  },
  "credsStore": "desktop.exe"
}
```
OK ✅

autrre model car pas focntionné 

```embed
title: "llama3-8b-instruct Model by Meta | NVIDIA NIM"
image: "https://assets.ngc.nvidia.com/products/api-catalog/images/llama3-8b.jpg"
description: "Advanced state-of-the-art LLM with language understanding, superior reasoning, and text generation."
url: "https://build.nvidia.com/meta/llama3-8b"
```


```sh
export NGC_API_KEY=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
export LOCAL_NIM_CACHE=~/.cache/nim
mkdir -p "$LOCAL_NIM_CACHE"
docker run -it --rm \
    --gpus all \
    --shm-size=16GB \
    -e NGC_API_KEY=$NGC_API_KEY \
    -v "$LOCAL_NIM_CACHE:/opt/nim/.cache" \
    -u $(id -u) \
    -p 8000:8000 \
    nvcr.io/nim/meta/llama3-8b-instruct:1.0.0

```