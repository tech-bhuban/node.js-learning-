# 🎟️ Simple Redeem Code System

A lightweight, single-file Node.js application built with Express.js that allows users to redeem discount codes for rewards.

## 🚀 Features
- **Code Validation**: Checks if a code is valid (e.g., `SAVE10`, `FREEGIFT`).
- **One-Time Use**: Prevents users from redeeming the same code twice during a session.
- **Minimalist UI**: Simple HTML/JavaScript interface for immediate testing.
- **Lightweight**: Entire server logic and UI contained in one ~35 line file.

## 🛠️ Tech Stack
- **Backend**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com)
- **Storage**: In-memory `Set` and `Object` (for demo purposes).

## 🏁 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the required dependencies:
```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install express

