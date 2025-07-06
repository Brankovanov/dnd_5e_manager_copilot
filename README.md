# D&D 5e Character Creation and Management App (Client)

This is the Angular frontend for the D&D 5e Character Creation and Management App. It allows players to create, view, and manage their Dungeons & Dragons 5e characters, fetching reference data from the official [D&D 5e API](https://www.dnd5eapi.co/).

## Features

- Browse D&D 5e races and classes with details
- Create a new character (name, race, class, background, stats, equipment, etc.)
- Edit and update existing characters
- Delete characters with confirmation
- Data fetched dynamically from the 5e API
- Responsive UI styled with TailwindCSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

1. Clone the repository and navigate to the `client` directory:

   ```sh
   git clone <your-repo-url>
   cd dnd_character_app/client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Development Server

Run the development server:

```sh
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The app will reload if you change any source files.

### Build

To build the project for production:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

Run unit tests via [Karma](https://karma-runner.github.io):

```sh
ng test
```

## Project Structure

- `/src/app/features` – Feature modules and components (character, race, class, etc.)
- `/src/app/shared` – Shared components (navbar, etc.)
- `/src/app/layout` – Layout components
- `/src/assets` – Static assets

## Tech Stack

- **Framework:** Angular 15+
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Routing:** Angular Router
- **Data Fetching:** Angular HttpClient
- **API:** [D&D 5e API](https://www.dnd5eapi.co/)

## Backend

The backend is implemented in ASP.NET Core Web API (see `/server` directory in the root project).

## Further Help

- [Angular CLI Documentation](https://angular.io/cli)
- [D&D 5e API Docs](https://www.dnd5eapi.co/docs/)

---

*This project is for educational and personal use. Dungeons & Dragons and all related terms are property of Wizards of the Coast.*
