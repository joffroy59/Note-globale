---
title: "Copilot Settings"
source: "https://www.obsidiancopilot.com/en/docs/settings"
author:
  - "[[loganyang]]"
published:
created: 2025-03-12
description: "How to configure Copilot settings to get the most out of it."
tags:
  - "clippings toview"
---
How to configure Copilot settings to get the most out of it.

---

## General Settings

At the top of the Copilot settings page, you can find general settings for the plugin.

## Model Settings

This is where you set your default model for the plugin. Whenever the plugin starts or reloads, it will use the model you set here as the default model.

![Model Settings](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fgeneral-setting-1.png&w=3840&q=75)

## Conversation Settings

- Default Conversation Folder Name: The default folder name where chat conversations will be saved. Default is 'copilot-conversations'
- Default Conversation Tag: The default tag to be used when saving a conversation. Default is 'copilot-conversations'
- Autosave Chat: Automatically save the chat when starting a new one or when the plugin reloads
- Custom Prompts Folder Name: The default folder name where custom prompts will be saved. Default is 'copilot-custom-prompts'

![Conversation Settings](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fgeneral-setting-2.png&w=3840&q=75)

## LLM Parameters

- Temperature: The temperature to use for the model. Default is 0.1.
- Max Tokens: The maximum number of tokens to generate for each response. Note that if you set this too high, you will run out of context window and the chat will fail!
- Conversation Turns: The number of turns to keep in the conversation history. 1 Turn is 2 messages. Default is 10. A large number will use up the context window faster and **cost more** if you are using a paid provider.

![LLM Parameters](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fgeneral-setting-3.png&w=3840&q=75)

## Copilot Commands Toggles

You can use Copilot commands in the Obsidian command palette to quickly summarize, translate, or ask questions about the current file or selection. You can find all the commands in your Obsidian command palette.

Some users reported that there are too many commands for them, so here you can **toggle some of them off** if you do not need them. Note that some important commands cannot be turned off, for example, the `index vault` command will always be available.

![Copilot Commands settings](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fgeneral-setting-4.png&w=3840&q=75)

## Adding Custom Models

This is one of the most important features of Copilot. You can add your own models to the plugin, no matter if they are models from the existing providers such as OpenAI, Anthropic, Google, Cohere, Groq, OpenRouter, or local models powered by Ollama or LM Studio, or any other 3rd party models as long as they support OpenAI API format.

### Example 1: Adding a model from an existing provider, Anthropic

First, fill your API key for Anthropic in the API settings. You can get your API key from [here](https://www.anthropic.com/product/api-keys).

Next, toggle open the Custom Models section, fill in the model name, select Anthropic as the provider, and click on the `Add Model` button. No need to provide URL (because it is an builtin provider) or API key here (as you already have it in the API Settings). Click "Add Model" and you will see the model in the list above!

![Add Custom Models 1](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fcustom-model-1.png&w=3840&q=75)

The same process applies to other providers, such as OpenAI, Google, Cohere, Groq, OpenRouter, etc.

### Example 2: Adding a local model powered by LM Studio

First you need to install LM Studio on your computer. In LM Studio, download a model you like, and go to the developer tab. Load the model, enable CORS (important!), and click on "Start Server".

![LM Studio Tab](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Flm-studio-tab.png&w=3840&q=75)

Now, find that model name on the right panel and copy it.

![LM Studio Model Name](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Flm-studio-modelname.png&w=3840&q=75)

Next, go back to Copilot Settings page, toggle open the Custom Models section, paste the model name you just copied, select "LM Studio" as the provider, and click on the `Add Model` button.

### Example 3: Adding a local model powered by Ollama

First you need to install Ollama on your computer. In Ollama, run `ollama pull` to pull a model you like, and close the Ollama app (important!).

Then go to your terminal and run `ollama serve` to start the server.

Similar to LM Studio, just fill in the model name, select "Ollama" as the provider, and click on the `Add Model` button. Make sure you have the correct model name you pulled, or your server will show 404 error.

### Example 4: Adding an OpenAI compatible model from a 3rd party provider

Here I use Perplexity as an example. First, get an API key from them and make sure you have payment method added. You can find their endpoint URL `https://api.perplexity.ai` from their docs [here](https://docs.perplexity.ai/api-reference/chat-completions).

In the custom model form, fill in the model name, select "3rd party (openai format)" as the provider, and paste the API URL you just got from Perplexity into the Base URL field. Also fill in the model name e.g. `llama-3.1-sonar-small-128k-online` and API key.

![Add Perplexity Model](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fadd-pplx.png&w=3840&q=75)

Perplexity is used as an example because their server does not support CORS. If you don't check CORS in Copilot Settings, the chat will fail with these errors. Make sure you check CORS and then save the settings.

![CORS Error](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fcors-error.png&w=3840&q=75) ![CORS Toggle](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fcors-toggle.png&w=3840&q=75)

With CORS enabled, you should be able to chat with it. Note that Obsidian currently does not support streaming with this CORS mode, so in this case you will lose streaming.

Providers other than Perplexity may support CORS natively so you don't need to enable CORS. For any new 3rd party provider, always check the dev console for CORS errors.

## API Settings

This is where you set your API keys for the builtin providers. For 3rd party providers, you can set the API keys in the custom model section when you add your custom model.

![API Settings](https://www.obsidiancopilot.com/_next/image?url=%2Fimages%2Fdocs%2Fapi-settings.png&w=3840&q=75)

## QA Settings

Check the Vault QA section for more details.

---

[Getting Started](https://www.obsidiancopilot.com/docs/getting-started)[Chat Mode](https://www.obsidiancopilot.com/docs/chat-mode)