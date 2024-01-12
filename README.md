
# Project Title

A brief description of what this project does and who it's for


# Recipe API

The Recipe API is a simple web service that allows users to manage and retrieve recipes based on different dish types.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **Create Recipes:** Add new recipes to the database.
- **Retrieve Recipes:** Get recipes based on dish types.
- **Update Recipes:** Modify existing recipes.
- **Delete Recipes:** Remove recipes from the database.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aicha-azr/Recipe_API.git

### Usage

- To start the server, run: npm start

### API Endpoints 

- GET /recipes/:type: Get recipes based on dish type.
- POST /recipes/:type/:name: Add a new recipe.
- PUT /recipes/:name: Update an existing recipe.
- DELETE /recipes/:name: Delete a recipe.

