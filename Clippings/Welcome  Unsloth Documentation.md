---
title: "Welcome | Unsloth Documentation"
source: "https://docs.unsloth.ai/"
author:
published: 2025-03-10
created: 2025-03-16
description: "New to Unsloth?"
tags:
  - "clippings toview"
---
[Unsloth](https://github.com/unslothai/unsloth) makes finetuning large language models like Llama-3, Mistral, Phi-4 and Gemma 2x faster, use 70% less memory, and with no degradation in accuracy! Our docs will guide you through training your own custom model. It covers the essentials of [installing & updating](https://docs.unsloth.ai/get-started/fine-tuning-guide#id-5.-installing--requirements) Unsloth, [creating datasets](https://docs.unsloth.ai/basics/datasets-101), running & [deploying](https://docs.unsloth.ai/get-started/fine-tuning-guide#id-5.-running--saving-the-model) your model.

#### 

[Get started](https://docs.unsloth.ai/get-started/beginner-start-here)

[💡Reasoning - GRPO & RL](https://docs.unsloth.ai/basics/reasoning-grpo-and-rl)[⚡Tutorial: Train your own Reasoning model with GRPO](https://docs.unsloth.ai/basics/reasoning-grpo-and-rl/tutorial-train-your-own-reasoning-model-with-grpo)[🧬Fine-tuning Guide](https://docs.unsloth.ai/get-started/fine-tuning-guide)[📒Unsloth Notebooks](https://docs.unsloth.ai/get-started/unsloth-notebooks)

## 

Quickstart

**Install locally with pip (recommended)** for Linux devices:

```
pip install unsloth
```

For Windows install instructions, see [here](https://docs.unsloth.ai/get-started/installing-+-updating/windows-installation).

## 

What is finetuning and why?

Fine-tuning an LLM customizes its behavior, enhances domain knowledge, and optimizes performance for specific tasks. Finetuning is the process of updating the actual "brains" of the language model through some process called back-propagation.

By fine-tuning a pre-trained model (e.g. Llama-3.1-8B) on a specialized dataset, you can:

- **Update Knowledge**: Introduce new domain-specific information.
- **Customize Behavior**: Adjust the model’s tone, personality, or response style.
- **Optimize for Tasks**: Improve accuracy and relevance for specific use cases.

**Example usecases**:

- Train LLM to predict if a headline impacts a company positively or negatively.
- Use historical customer interactions for more accurate and custom responses.
- Fine-tune LLM on legal texts for contract analysis, case law research, and compliance.

You can think of a fine-tuned model as a specialized agent designed to do specific tasks more effectively and efficiently. **Fine-tuning can replicate all of RAG's capabilities**, but not vice versa.

[🤔FAQ + Is Fine-tuning Right For Me?](https://docs.unsloth.ai/get-started/beginner-start-here/faq-+-is-fine-tuning-right-for-me)

## 

How to use Unsloth?

[Unsloth](https://github.com/unslothai/unsloth) can be installed locally via Linux, Windows, Kaggle, or another GPU service like Google Colab. Most use Unsloth through the interface Google Colab which provides a free GPU to train with.

[📥Installing + Updating](https://docs.unsloth.ai/get-started/installing-+-updating)[🛠️Unsloth Requirements](https://docs.unsloth.ai/get-started/beginner-start-here/unsloth-requirements)

![](https://docs.unsloth.ai/~gitbook/image?url=https%3A%2F%2F3215535692-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FxhOjnexMCB3dmuQFQ2Zq%252Fuploads%252FLrqITvuoKyiMl8mqfu5B%252Flarge%2520sloth%2520wave.png%3Falt%3Dmedia%26token%3D3077792b-90ff-459d-aa52-57abcf219adf&width=768&dpr=4&quality=100&sign=5c6df706&sv=2)

[NextBeginner? Start here!](https://docs.unsloth.ai/get-started/beginner-start-here)

Last updated

Was this helpful?