---
title: World Models
tagline: Model-based RL pipeline reproducing Ha & Schmidhuber (2018) on CarRacing-v3 — VAE + PPO controller on learned latents.
role: Solo build
period: Aug 2025 – Dec 2025
status: complete
stack:
  - Python
  - PyTorch
  - Gymnasium
  - TensorBoard
  - NumPy
metrics:
  - { label: "VAE params", value: "1.78M" }
  - { label: "MDN-RNN params", value: "384K" }
  - { label: "controller params", value: "867" }
categories:
  - ml
  - reinforcement-learning
links:
  github: https://github.com/haochentSC/worldModels_CSCI_467
featured: true
order: 5
---

## Problem

Reproduce the World Models architecture (Ha & Schmidhuber, 2018) as an end-to-end, model-based RL
pipeline on CarRacing-v3 — compress high-dimensional frames into a latent space and train a tiny
controller on those latents instead of raw pixels.

## What I built

- An end-to-end training pipeline with reproducible experiment tracking, model checkpointing, and
  TensorBoard observability.
- A convolutional **VAE (1.78M params)** compressing 64×64×3 frames into 32-dim latents (the vision
  model, V), trained at a fixed low KL weight (β=1e-4) after posterior collapse at the default β
  drove the model to ignore its latents entirely.
- An **MDN-RNN memory model (384K params)** predicting the next latent from the current latent and
  action (the memory model, M).
- Two controller paths behind one module: an **867-parameter linear controller** (C) optimized as a
  flat vector by CMA-ES, and a PPO policy trained directly on 32-dim VAE latents — reaching a mean
  score of 285 over 10 evaluation episodes after 500k timesteps.
