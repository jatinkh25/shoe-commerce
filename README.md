# Shoe Commerce

## Overview

ShoeCommerce is an online commerce web application built using Next.js 13, TypeScript, React-Redux, React-Query, and Cosmic CMS. This web app allows users to browse and purchase shoes online. It integrates with Cosmic CMS to manage the content and products displayed on the website.

## Features

- Browse and search for shoes
- Filter shoes by various attributes (e.g., brand, size, color)
- View detailed product information
- Add products to the shopping cart
- Manage the shopping cart (update quantities, remove items)
- Checkout and place orders

## Technologies Used

- Next.js 13: A React framework for server-side rendering and static site generation.
- TypeScript: A typed superset of JavaScript that provides static typing capabilities.
- React-Redux: A state management library for React applications.
- React-Query: A library for managing and caching server-state in React applications.
- Cosmic CMS: A headless CMS (Content Management System) for managing content and products.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jatinkh25/shoe-commerce
   ```

2. Install dependencies:

   ```bash
   cd shoe-commerce
   yarn install
   ```

3. Configure Cosmic CMS:

   - Create an account on Cosmic CMS (<https://www.cosmicjs.com/>).
   - Create a new Bucket and define your content models for shoes, orders, etc.
   - Obtain your Cosmic CMS API keys.

4. Configure environment variables:

   - Create a `.env.local` file in the project root directory.
   - Set the following environment variables:

     ```bash
     COSMIC_API_KEY=your_cosmic_api_key
     COSMIC_BUCKET_SLUG=your_cosmic_bucket_slug
     ```

5. Start the development server:

   ```bash
   yarn dev
   ```

6. Open your browser and visit `http://localhost:3000` to access the ShoeCommerce web app.

## Deployment

To deploy the ShoeCommerce web app to a production environment, follow these steps:

1. Build the production-ready version:

   ```bash
   yarn build
   ```

2. Configure your deployment platform (e.g., Vercel, Netlify, AWS, etc.) to deploy the built files.

3. Set the environment variables mentioned in the installation step on your deployment platform.

4. Deploy the application using the chosen deployment platform.

## Folder Structure

The folder structure of the ShoeCommerce web app is organized as follows:

```bash
├── components        # Reusable React components
├── app               # Next.js app directory
├── hooks             # Custom hooks
├── lib               # Library functions used in the project
├── store             # Redux store configuration and slices
├── utils             # Utility functions, providers, data, constants and types
└── ...
```

## Contributing

Contributions are welcome! If you would like to contribute to the ShoeCommerce web app, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The creators of Next.js, React-Redux, React-Query, and Cosmic CMS for providing excellent tools and frameworks.
- The open-source community for their contributions and support.
- Any other acknowledgments you would like to add.
