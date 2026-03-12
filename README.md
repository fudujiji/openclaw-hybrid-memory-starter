# OpenClaw Hybrid Memory Starter

A minimal starter repo for building hybrid memory retrieval in OpenClaw:

- local memory search for fast factual recall
- long-horizon memory agent as a secondary layer
- fallback-first design to keep latency and cost under control

## Why

Pure local recall is fast but shallow across long timelines.
Pure remote memory is richer but slower and more expensive.
This starter combines both:

1. query local memory first
2. ask the long-horizon memory agent when deeper context is needed
3. merge results into one answer path

## What this repo includes

- architecture sketch
- example routing logic
- config template
- practical prompts for memory-aware assistants

## Suggested flow

```text
user asks something about history/preferences/decisions
        ↓
local memory search
        ↓
if confidence is low or long-range context is needed
        ↓
memory agent retrieval
        ↓
merge + answer
```

## Example config

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

## Use cases

- assistant remembers prior user decisions
- project continuity across sessions
- preference recall without bloating prompts
- lower-cost memory systems with graceful fallback

## Roadmap

- [ ] example retrieval merger script
- [ ] benchmark latency/cost tradeoffs
- [ ] sample OpenClaw integration guide

## License

MIT
