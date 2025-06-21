# Todo CLI

An interactive command-line todo application built with TypeScript, featuring a menu-driven interface powered by inquirer.js and lightweight database storage with lowdb.

## Features

- 🎯 Interactive menu-driven interface
- ✅ Add and complete tasks
- 👁️ Toggle visibility of completed tasks
- 🗑️ Purge completed tasks
- 💾 Persistent storage using lowdb
- 🎨 Beautiful command-line prompts with inquirer.js
- 📋 Clean task list display

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Install locally

```bash
git clone git@github.com:grgpk/cli-todo-ts-app.git
cd cli-todo-ts-app
npm install
npm install -g typescript
```

## Usage

### Starting the Application

Simply run the command to launch the interactive menu:

```bash
npm start
```

## Technical Details

### Dependencies

The application is built with these key dependencies:

- **inquirer.js** - Interactive command line prompts
- **lowdb** - Lightweight JSON database for Node.js
- **TypeScript** - Type-safe JavaScript development

### Data Storage

Tasks are stored in a JSON (`Todos.json`) file using lowdb

### Database Schema

```json
{
  "tasks": [
    {
      "id": "number",
      "task": "Task description",
      "complete": false
    }
  ]
}
```
