---
title: World Models
tagline: Self-driving RL agent for CarRacing-v3 on the World Models architecture (VAE + PPO) — trained end-to-end on a single GPU, best score 600.
role: Solo build
period: Aug 2025 – Dec 2025
status: complete
stack:
  - Python
  - PyTorch
  - Reinforcement Learning
  - PPO
  - Variational Autoencoders
  - Stable-Baselines3
  - Gymnasium
  - CUDA
  - NumPy
metrics:
  - { label: "mean score (10 eval eps)", value: "285 ± 195" }
  - { label: "best episode", value: "600" }
  - { label: "training", value: "500k steps · ~2h" }
categories:
  - ml
  - reinforcement-learning
links:
  github: https://github.com/haochentSC/worldModels_CSCI_467
featured: true
order: 5
---

<figure>
  <img src="/media/world-models/best_episode.gif" alt="The trained agent driving a full lap of CarRacing-v3, staying on the track through curves — controlled entirely from 32-dimensional VAE latents." />
  <figcaption>Best evaluation episode (score 600). The car drives purely from learned 32-dim latents — it never sees raw pixels at control time.</figcaption>
</figure>

## Problem

Reproduce the **World Models** architecture (Ha & Schmidhuber, 2018) end-to-end on CarRacing-v3:
compress each high-dimensional game frame into a compact latent space, then learn to drive from those
latents instead of raw pixels. The bet is that a tiny controller over a good learned representation can
match policies trained directly on images, far faster.

## What I built

A PyTorch implementation of the full pipeline, trained end-to-end on a single **NVIDIA RTX 3080 Laptop
GPU in ~2 hours**:

- A convolutional **VAE (vision model, V)** that compresses each 64×64×3 frame into a **32-dimensional
  latent vector** — the only thing the agent ever sees at control time.
- A **PPO controller** (Stable-Baselines3) that learns to drive directly on those latents, reaching a
  **best score of 600** and a **mean of 285 ± 195 over 10 real-environment evaluation episodes** after
  **500,000 timesteps**. Using PPO over latents cut iteration time from the days the paper's CMA-ES
  evolutionary search takes down to ~2 hours.
- An **MDN-RNN memory model (M)** that predicts the next latent from the current latent and action,
  completing the V–M–C architecture from the paper.

## Key technical decisions

### Diagnosing and fixing VAE posterior collapse
With the textbook KL weight of `1.0`, the VAE suffered **posterior collapse**: the KL term overwhelmed
reconstruction, the decoder learned to ignore the latents, and every reconstruction came out as the same
blurry, near-identical frame — useless as an observation for the controller. Dropping the KL weight to
**`1e-4`** rebalanced the objective and restored sharp, informative latents that actually encode track
geometry and car position. This single change is what makes the downstream controller learnable.

<figure>
  <img src="/media/world-models/vae_reconstructions.png" alt="Two rows of CarRacing frames: the top row shows original frames, the bottom row shows VAE reconstructions that faithfully recover the track shape, grass, and car position." />
  <figcaption>VAE reconstructions (top: original, bottom: decoded) after the posterior-collapse fix — track curvature, road edges, and car position survive the 32-dim bottleneck.</figcaption>
</figure>

## Results

Eval reward climbed from roughly **−32 to a ~440 peak** over training, with the variance you'd expect
from a stochastic track and a compact controller.

<figure>
  <img src="/media/world-models/training_curve.png" alt="PPO controller training curve: mean evaluation reward rising from about -32 to a peak near 440 over 500,000 timesteps, with a shaded one-standard-deviation band." />
  <figcaption>PPO controller training curve — eval mean reward (±1 std) vs. timesteps on the latent environment.</figcaption>
</figure>

<figure>
  <img src="/media/world-models/final_scores.png" alt="Bar chart of per-episode scores across 10 final evaluation episodes, ranging from near zero to 600, with a dashed line marking the mean of 285." />
  <figcaption>Final evaluation — per-episode scores across 10 real-environment runs (mean 285, best 600).</figcaption>
</figure>
