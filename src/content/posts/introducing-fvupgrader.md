---
title: 'Introducing fvupgrader'
description: 'fvupgrader is a Python-based command-line tool available on PyPI that helps Flutter developers upgrade version numbers and manage the related Git workflow.'
pubDate: '2024-02-17'
heroImage: '../../assets/posts/introducing-fvupgrader.png'
category: 'Projects'
---

[![Pylint](https://github.com/emiliodallatorre/fvupgrader/actions/workflows/pylint.yml/badge.svg)](https://github.com/emiliodallatorre/fvupgrader/actions/workflows/pylint.yml) [![Upload Python Package](https://github.com/emiliodallatorre/fvupgrader/actions/workflows/python-publish.yml/badge.svg)](https://github.com/emiliodallatorre/fvupgrader/actions/workflows/python-publish.yml) [![PyPI version](https://badge.fury.io/py/fvupgrader.svg)](https://badge.fury.io/py/fvupgrader)

If you're a Flutter developer, you know how crucial it is to manage version numbers efficiently, especially when it comes to maintaining consistency across your project and managing releases on Git. That's why I'm thrilled to introduce **[fvupgrader](https://github.com/emiliodallatorre/fvupgrader)**, a handy command-line tool designed to simplify the process of upgrading version numbers in your Flutter projects and seamlessly integrating those changes into your Git workflow.

## What is fvupgrader?

**fvupgrader** is a Python-based command-line tool available on PyPI, designed specifically for Flutter developers. With **fvupgrader**, you can effortlessly upgrade the version number in your project's `pubspec.yaml` file, commit the changes, tag the release, and push everything to your Git repository—all with just a few simple commands.

Some key points:

- **Streamlined version management**: no more manual editing of `pubspec.yaml` files or worrying about maintaining consistent version numbers across your project. **fvupgrader** automates the process, saving you time and reducing the chances of errors
- **Git integration**: easily manage your project's version upgrades and releases directly from the command line. **fvupgrader** handles the entire process, from committing changes to pushing tags, making it easy to keep track of your project's history and releases
- **Customization options**: while **fvupgrader** provides a straightforward way to upgrade version numbers and manage Git actions, it also offers customization options to suit your specific needs. Whether you want to follow semantic versioning or have custom commit message formats, **fvupgrader** can adapt to your workflow

## How to use it?

Using **fvupgrader** is simple and straightforward. Here's a quick guide to get you started:

1. **Install fvupgrader** from PyPI with pip:

   ```bash
   pip install fvupgrader
   ```

   (ensure pip destination directory is in your `PATH`)

2. **Navigate to your Flutter project**: open your terminal and navigate to the root directory of your Flutter project

3. Run the following command to upgrade the version number in your `pubspec.yaml` file:

   ```bash
   fvupgrader --patch
   ```

   (replace `--patch` with `--minor` or `--major` if you want to perform a minor or major version upgrade, respectively)

   The tool will automatically commit, tag and push your edit to `pubspec.yaml`, you can disable this behavior with `--no-push`, `--no-tag` and `--no-commit`

And that's it! With just a few simple commands, you've successfully upgraded the version number in your Flutter project, committed the changes, tagged the release, and pushed everything to your Git repository.

## Conclusion

Managing version numbers and releases in Flutter projects doesn't have to be a daunting task. With **fvupgrader**, you can streamline the process and focus on what matters most—building amazing Flutter apps. Give **fvupgrader** a try today and experience the convenience of automated version management and Git integration.

To learn more about **fvupgrader** and how to contribute to its development, check out the [GitHub repository](https://github.com/emiliodallatorre/fvupgrader) and [PyPI page](https://pypi.org/project/fvupgrader/).
