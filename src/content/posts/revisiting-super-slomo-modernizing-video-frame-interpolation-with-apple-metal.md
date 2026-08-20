---
title: 'Revisiting Super SloMo: modernizing video frame interpolation with Apple Metal'
description: 'Emilio modernized an older Super SloMo implementation with a simplified Bash script, updated dependencies, Apple Metal (MPS) GPU acceleration on macOS, and continuous code quality analysis via CodeScene.'
pubDate: '2025-11-03'
heroImage: '../../assets/posts/revisiting-super-slomo-modernizing-video-frame-interpolation-with-apple-metal.png'
category: 'Projects'
---

I recently discovered Super SloMo, a deep learning model that generates HQ intermediate frames between video frames to produce smooth slow-motion interpolation. While exploring the [paper by Jiang et al. (2018)](https://jianghz.me/projects/superslomo/), I came across an older implementation of this model that was no longer fully functional.

Seeing an opportunity to try in-practice some High Performance video processing technologies and to provide a working tool for others interested in this domain, I made several improvements: simplified its usage with an all-in-one Bash script, updated dependencies, and enabled [Apple Metal (MPS)](https://developer.apple.com/metal/pytorch/) to support GPU acceleration on macOS systems.

Additionally, I integrated [CodeScene](https://codescene.io/) to continuously analyze and improve code quality throughout development.
