---
title: Modality-Aware KV Tiering
tagline: Vision-language RAG inference optimization — hybrid retrieval and query rewriting for multimodal document QA served through vLLM.
role: RAG subsystem owner
period: Mar 2026 – May 2026
status: complete
stack:
  - Python
  - PyTorch
  - vLLM
  - Qwen3-Omni
  - CLIP
  - SentenceTransformers
  - BM25
  - pytest
metrics: []
categories:
  - ai-infra
  - rag
links:
  github: https://github.com/Shr3yash/Modality-Aware-KV-Tiering-for-Multimodal-RAG
featured: true
order: 2
---

## Problem

Multimodal document QA needs to feed both retrieved text and image evidence into a vision-language
model — and retrieval quality on entity-, acronym-, and number-heavy queries (MMDocRAG) makes or
breaks the answer. The goal was to improve retrieval coverage and add query rewriting without
destabilizing the production inference pipeline or changing the default baseline path.

## What I built

- The RAG subsystem for a multimodal document-QA inference project, feeding retrieved text and image
  evidence into a **Qwen3-Omni VLM served through vLLM** with OpenAI-compatible streaming APIs.
- Opt-in **hybrid retrieval** fusing BM25 lexical ranking with SBERT dense embeddings via Reciprocal
  Rank Fusion — improving coverage for entity-, acronym-, and number-heavy MMDocRAG queries without
  changing the default baseline path.
- Deterministic and **LLM-based query rewriting** with multi-variant retrieval, JSON-only rewrite
  parsing, SHA-256 keyed disk caching, and failure fallback to preserve pipeline stability.
- Multi-query text and **CLIP text-to-image retrieval** integrated into the existing pipeline while
  preserving downstream contracts for prompt construction, visual pruning, image-prune cache keys,
  and KV-cache experiments.

## Evaluation

Extended evaluation outputs with query variants, retrieval recall, lexical EM/F1, LLM-judge scoring,
TTFT, generation latency, and total latency. Added pure-Python pytest coverage for RRF fusion and
query-rewriter behavior.
