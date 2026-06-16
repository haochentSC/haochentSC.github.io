---
title: NeuroMechFly Vision Sandbox
tagline: Voxel arena & bio-inspired vision-to-action pipeline for embodied Drosophila simulation on FlyGym + MuJoCo.
role: Solo build
period: Jan 2025 – May 2025
status: complete
stack:
  - Python
  - FlyGym
  - MuJoCo / MJCF
  - DM Control
  - Gymnasium
  - OpenCV (CUDA)
  - NumPy
metrics: []
categories:
  - ml
  - simulation
  - computer-vision
links:
  github: https://github.com/haochentSC/NeuroMechFly-MinecraftVisionMapper
featured: true
order: 6
---

## Problem

Build a vision-to-action experimentation platform for embodied *Drosophila* simulation — a sandbox
where compound-eye vision drives locomotion through procedurally generated terrain, compatible with
standard RL tooling.

## What I built

- A bio-inspired sandbox on **FlyGym and MuJoCo** with compound-eye retinal sampling, rule-based
  controllers, and Gymnasium-compatible environments.
- A **voxel-to-MJCF arena generator** that parses 3D voxel region files, extracts per-column surface
  heightmaps, and emits MuJoCo MJCF scenes with per-block box geoms for procedurally generated terrains.
- A **binocular vision pipeline** that splits left/right compound-eye inputs, maps them through
  FlyGym's hexagonal photoreceptor `Retina` model, and computes brightness-asymmetry control vectors
  with **OpenCV CUDA acceleration** (CPU fallback).
- A Gymnasium `Env` wrapper exposing `step`/`reset`/`render` for downstream RL policies, plus a
  rule-based controller mapping retinal observations to discrete locomotion primitives.
- Reproducible MP4 rollouts, arena previews, and joint-DOF time-series plots for vision diagnostics
  and kinematic replay debugging.
