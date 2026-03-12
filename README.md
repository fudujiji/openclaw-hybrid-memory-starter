# OpenClaw Hybrid Memory Starter

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-production--minded-blue.svg)](#)

> A persistent AI agent system with hybrid memory, self-recovery, multi-model routing, and file-driven long-term context.

This repository is a compact showcase of a bigger idea:

**AI assistants should not behave like short-lived chat sessions.**
They should remember, recover, route intelligently, and stay maintainable over time.

## Why this is impressive

Most assistant demos can answer a prompt.
Very few are designed like systems.

This project focuses on the parts that make agents actually useful in the real world:

- **hybrid memory** instead of shallow chat history
- **cost-aware retrieval** instead of calling expensive memory on every turn
- **self-recovery** instead of fragile one-run demos
- **multi-model routing** instead of one-model-for-everything
- **file-driven architecture** instead of opaque prompt spaghetti

## Core capabilities

### 1) Hybrid memory

The system combines:

- **local memory search** for precise facts and fast recall
- **long-horizon memory agent** for cross-session continuity and deeper patterns

This gives the assistant two different memory strengths instead of forcing one memory layer to do everything.

### 2) Production-minded retrieval strategy

Memory is not queried blindly.
The system uses a practical routing strategy:

1. search local memory first
2. only escalate when deeper memory is needed
3. merge both results into one answer path

That keeps **latency lower**, **cost under control**, and **quality high**.

### 3) Self-recovery and persistence

This style of assistant is designed to run as an ongoing system, not a disposable demo.

Key ideas:

- startup automation
- health monitoring
- periodic consolidation
- operational recovery
- stable long-term runtime behavior

### 4) Multi-model routing

Different tasks should not always use the same model.

A production-grade assistant should be able to route work based on context such as:

- reading
- coding
- memory retrieval
- low-cost background operations

### 5) File-driven architecture

Instead of hiding everything inside one giant prompt, the system keeps long-term context structured and inspectable.

Examples of stable memory layers:

- user profile
- operational state
- long-term memory
- daily logs
- agent behavior / persona

This makes the system easier to:

- audit
- update
- debug
- extend

## System architecture

```text
User message
   ↓
Task / intent routing
   ↓
Local memory search ───────────────┐
   ↓                               │
Enough context? ── yes ─────────→ answer
   │                               │
   no                              │
   ↓                               │
Long-horizon memory agent          │
   ↓                               │
Merge + rank memory results ───────┘
   ↓
Model routing
   ↓
Final response
```

## What makes it production-minded

This repo is intentionally small, but it represents a more serious philosophy for agent systems:

- build for **continuity**, not just clever replies
- design for **maintenance**, not just demos
- optimize for **real runtime tradeoffs**, not just benchmark vibes
- keep memory **structured, layered, and evolvable**

## Repository structure

```text
.
├── README.md
├── LICENSE
├── .gitignore
├── memory.example.json
├── docs/
│   ├── APPLY.md
│   └── ARCHITECTURE.md
└── examples/
    └── merge-memory.js
```

## Example configuration

```json
{
  "memory": {
    "local": {
      "enabled": true
    },
    "agent": {
      "enabled": true,
      "endpoint": "http://localhost:8888"
    },
    "strategy": "local-first-agent-second"
  }
}
```

## Example use cases

- remembering prior user preferences
- carrying project context across sessions
- retrieving long-range decisions and timelines
- keeping prompt size small while preserving continuity
- building a persistent personal AI operator

## For application reviewers

If you are reading this repository as part of an application, the short version is:

- this project explores durable memory infrastructure for AI agents
- it is designed around real-world runtime constraints
- it shows product thinking, systems thinking, and implementation taste

See [`docs/APPLY.md`](docs/APPLY.md) for a concise application-oriented summary.

## Next improvements

- [ ] add benchmark notes for latency and cost
- [ ] add a tiny demo app
- [ ] add ranked merge heuristics
- [ ] add screenshots / diagrams
- [ ] add a landing image / visual identity

## License

MIT
