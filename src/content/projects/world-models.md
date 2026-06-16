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
  - { label: "VAE params", value: "4.35M" }
  - { label: "MDN-RNN params", value: "422K" }
  - { label: "PPO controller params", value: "867" }
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
- A convolutional **VAE (4.35M params)** with KL annealing compressing 64×64×3 frames into 32-dim
  latents (the vision model, V).
- An **MDN-RNN memory model (422K params)** predicting the next latent from the current latent and
  action (the memory model, M).
- An **867-parameter PPO controller** (C) trained on latent observations, reducing iteration time from
  days (CMA-ES / evolutionary baselines) to hours while achieving consistent track-completion behavior
  in simulation.
