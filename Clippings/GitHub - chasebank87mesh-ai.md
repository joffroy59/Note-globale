---
title: "GitHub - chasebank87/mesh-ai"
source: "https://github.com/chasebank87/mesh-ai"
author:
  - "[[GitHub]]"
published:
created: 2025-03-12
description: "Contribute to chasebank87/mesh-ai development by creating an account on GitHub."
tags:
  - "clippings toview"
---
If you like this plugin, feel free to support the development by buying a coffee:

[![](https://github.com/chasebank87/mesh-ai/raw/main/bmc_qr.png)](https://github.com/chasebank87/mesh-ai/blob/main/bmc_qr.png)[![Buy Me A Coffee](https://camo.githubusercontent.com/8993389497c0b621c7eb91826bf805bf242c495053f2f39319595a6c53927c7c/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d76696f6c65742e706e67)](https://www.buymeacoffee.com/chasebank87)

## Table of Contents

- [Mesh AI](https://github.com/chasebank87/#mesh-ai)
- [Table of Contents](https://github.com/chasebank87/#table-of-contents)
- [Overview](https://github.com/chasebank87/#overview)
- [Features](https://github.com/chasebank87/#features)
- [Compatibility](https://github.com/chasebank87/#compatibility)
- [Under Development](https://github.com/chasebank87/#under-development)
- [Differences from Official Fabric Plugin](https://github.com/chasebank87/#differences-from-official-fabric-plugin)
- [Installation](https://github.com/chasebank87/#installation)
- [Usage](https://github.com/chasebank87/#usage)
- [Contributing](https://github.com/chasebank87/#contributing)
- [License](https://github.com/chasebank87/#license)

## Overview

The Mesh AI plugin emulates the functionality provided by the [Fabric tool](https://github.com/danielmiessler/fabric) within your Obsidian vault. This plugin allows users to run and manage multiple text processing patterns on their notes, the clipboard, or Tavily search results. It integrates with various AI services and platforms to enhance your productivity within Obsidian.

## Features

- **Process Active Note, Clipboard, or Tavily Search Results:** The plugin allows you to apply patterns to the currently active note, clipboard content, or results from Tavily search.
- **Pattern Processing:**

- **Sequential Mode (Default):** Process multiple patterns in order, where the output of the first pattern is used as the input for the next.
- **Pattern Stitch Mode:** Process multiple patterns and output the results of each pattern collectively.
- **YouTube Link Detection:** Automatically detects YouTube links, fetches their transcripts, and uses the transcripts as a source input for processing.
- **Workflow Creation:** Create workflows from the settings view, which can then be added as command palette items for quick access.
- **Pattern Management:**

- Download patterns from the Fabric repository.
- Maintain a custom pattern folder to manage your own patterns.
- **AI Service Integration:** Utilize various major providers such as:

- `openai`
- `google`
- `microsoft`
- `anthropic`
- `grocq`
- `ollama`

## Compatibility

Currently, the plugin has been tested and confirmed to work with:

- `Grocq`
- `OpenAI`
- `Ollama`

### Under Development

We are currently working on testing and development for:

- `Microsoft Azure AI Services`
- `Anthropic`
- `google`

## Differences from Official Fabric Plugin

This plugin is a sibling project to the [Unofficial Fabric Plugin](https://github.com/chasebank87/unofficial-fabric-plugin). The key differences include:

- **Visual Appearance:** Differences in the user interface.
- **No Additional Dependencies:** You do not need to have Fabric or Fabric Connector installed for this plugin to work.

## Installation

To install the plugin, follow these steps:

1. Download the latest release from the [GitHub repository](https://github.com/chasebank87/unofficial-fabric-plugin).
2. Extract the files into your Obsidian vault's `plugins` directory.
3. Enable the plugin from the Obsidian settings menu.

\-OR-

Install using the BRAT Plugin:

1. Install the BRAT Plugin from the Obsidian Community Plugins list.
2. Open the BRAT settings and add the repository URL: `https://github.com/chasebank87/meshl-ai`.
3. Follow the prompts to install and enable the Mesh AI plugin.

## Usage

1. Open the settings view within Obsidian and configure your preferred AI service provider.
2. Define your text processing patterns and workflows.
3. Use the command palette to apply your workflows to your notes, clipboard, or Tavily search results.
4. Use the Mesh AI Interface

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/chasebank87/mesh-ai/blob/main/LICENSE) file for details.

---

For more information, please visit our [GitHub repository](https://github.com/chasebank87/mesh-ai).

---