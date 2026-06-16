---
title: Deepsick Marketplace
tagline: Second-hand marketplace with fair-price analytics — React + FastAPI + MySQL, with auth, buyer-seller messaging, and advanced database programs.
role: Auth, messaging & advanced DB programs (team of 4)
period: Spring 2026
status: complete
stack:
  - React 19
  - Vite
  - FastAPI
  - Python
  - MySQL 8
  - GCP Cloud SQL
  - PBKDF2 / HMAC
metrics:
  - { label: "PBKDF2-SHA256 iterations", value: "390k" }
  - { label: "Mercari listings seeded", value: "~1.4M" }
  - { label: "normalized tables", value: "6" }
categories:
  - fullstack
  - backend
  - database
links: {}
featured: true
order: 4
---

## Problem

A second-hand marketplace (CS411 database project, team of 4) where buyers evaluate used items with
data-driven context. The differentiator is **fair-price comparison** against a peer group of similar
listings — same category, brand, and condition — seeded from ~1.4M Mercari listings, on a normalized
6-table MySQL schema running on GCP Cloud SQL.

## My role

I owned the **authentication system, the messaging backend, and all three advanced database programs**.

### Authentication — built from scratch, no framework
- **Password hashing** with PBKDF2-SHA256 at **390,000 iterations** and a random 16-byte salt
  (OWASP-aligned), stored as a structured `pbkdf2_sha256$iterations$salt$digest` string so parameters
  can evolve without breaking existing hashes — plus a multi-format verifier to migrate legacy MD5
  hashes from the Mercari import.
- **Stateless session tokens** signed with HMAC-SHA256 (`user_id:issued_at` + server secret), avoiding
  any server-side session store; verification uses constant-time comparison (`hmac.compare_digest`) to
  defeat timing attacks, with careful Base64 padding handling across platforms.

### Messaging + advanced database programs
- **Messaging backend**: thread + message CRUD with per-message read tracking and thread archiving.
- **Stored procedure** `initiate_conversation` — encapsulates the whole "contact seller" flow in the
  database: validates the product is active, confirms buyer/seller are distinct valid users, dedupes
  existing threads, rate-limits active conversations, and creates-or-appends. Uses a multi-relation
  JOIN and a `GROUP BY` aggregation, with `IF … SIGNAL` control structures for descriptive errors.
- **Trigger** `after_message_insert` — auto-reopens an archived thread (`is_archived = FALSE`) when a
  new message arrives, keeping inbox state aligned with activity without app-layer logic.
- **SERIALIZABLE transaction wrapper** — wraps the stored-procedure call at the strictest isolation
  level so two rapid "Message Seller" clicks can't create duplicate threads; either everything commits
  or everything rolls back.

## Schema design

Six normalized tables (`users`, `products`, `transactions`, `returns`, `message_threads`, `messages`)
with `ENUM`-constrained states (status, condition), foreign keys with `ON DELETE CASCADE` /
`SET NULL`, and boolean state columns (`is_archived`, `is_read`) that enable archiving and unread
counts without extra tables.
