# StuCo Frontend

Welcome to the **StuCo Frontend** repository! This project is part of StuCo, a social platform connecting high school students with U.S. college students. This repository contains the code for the frontend interface, built using modern web technologies for an engaging and dynamic user experience.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool for modern web projects.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or higher recommended).
- **npm** or **yarn**: You can use npm (comes with Node.js) or yarn as a package manager.

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/StuCo-Official/Frontend.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd Frontend
   ```

3. **Install dependencies**:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

This will start the Vite server, and you can access the app at `http://localhost:3000`.

### Building for Production

To build the frontend for production, use the following command:

```sh
npm run build
# or
yarn build
```

This will create an optimized production build in the `dist` folder.

## Folder Structure

- **src/**: Main source code for the frontend.
  - **assets/**: Static assets like images and icons.
  - **components/**: Reusable React components.
    - **auth/**: Components related to authentication (e.g., signup, login).
    - **layout/**: Layout components (e.g., header, footer).
    - **posts/**: Components related to posts and content.
    - **ui/**: General UI components (e.g., buttons, modals).
  - **pages/**: Application pages.
  - **styles/**: Tailwind CSS styles and global styles.
- **public/**: Public assets.
- **App.tsx**: Main application component.
- **index.css**: Global CSS file.
- **main.tsx**: Entry point of the application.
- **vite-env.d.ts**: Vite environment type definitions.

## Contributing

We welcome contributions to StuCo! Please feel free to open issues or submit pull requests. Before submitting a pull request, make sure to:

1. Create a new branch for your feature/fix.
2. Follow the existing code style and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions, please reach out to the StuCo team at [contact@stuco.com](mailto:contact@stuco.com).

