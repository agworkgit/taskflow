# TaskFlow

TaskFlow is a modern, responsive task management app built with **React** and **TailwindCSS**, featuring drag-and-drop task management, dark/light mode, persistent storage, productivity stats, and a sleek UI optimized for both desktop and mobile. The app is deployed on **Vercel**.

## Features

-   Create, edit, and delete tasks
-   Categorize tasks (`To Do`, `In Progress`, `Done`)
-   Mark tasks as completed
-   Filter tasks by category or priority
-   Drag-and-drop task reordering (`@hello-pangea/dnd`)
-   View productivity stats (completed vs pending tasks) with charts
-   Persistent data using **LocalStorage**
-   Light/Dark mode toggle (dynamic theme with custom colors)
-   Fully responsive layout
-   Smooth hover and drag animations
-   Footer with copyright, developer name, and dynamic year

## Styling & Theme

-   **Light mode:** soft whites with blue accents for buttons
-   **Dark mode:** ChatGPT-inspired palette (`#444654` for backgrounds, `#10a37f` for checkboxes)
-   Buttons, inputs, and hover effects have subtle animations for polish
-   All components, including **task list, filters, charts, header, and footer**, use this color palette

## Tech Stack

-   React 18+ (functional components, hooks)
-   TailwindCSS for utility-first styling
-   LocalStorage for task persistence
-   Recharts for task statistics visualization
-   `@hello-pangea/dnd` for drag-and-drop functionality
-   Vercel for deployment

## Project Structure

```
src/
├── assets/ # Logo assets (dark/light)
├── components/
│ ├── Header.jsx # Header with logo, title, theme toggle
│ ├── TaskForm.jsx # Task input form
│ ├── TaskList.jsx # Task list with drag-and-drop
│ ├── TaskFilters.jsx # Category/priority filters
│ ├── StatsChart.jsx # Productivity charts
│ └── Footer.jsx # Footer with copyright info
├── utils/
│ └── storage.js # LocalStorage helpers
├── App.jsx # Main app component
└── index.js # App entry point
```

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/taskflow.git
cd taskflow
```

```bash
# Install dependencies
npm install
```

```bash
# Start development server
npm start
```

## Author

Alex Grigore
BSc Computer Science Student | Front-End Developer

-   agworksbox@gmail.com
-   https://alex-grigore.netlify.app

## MIT License

Copyright (c) 2025 Alex Grigore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
