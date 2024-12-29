# React Form Validation App

This project is a React-based application that demonstrates a custom form implementation with validation using `react-hook-form` and `zod`. It includes a reusable input component and applies validation rules for fields such as name, email, and passwords.

## Features

- **React Hook Form**: Simplifies form handling and validation.
- **Zod Validation**: Ensures input data adheres to the defined schema.
- **Reusable Components**: Custom input component for streamlined development.
- **Password Matching**: Ensures passwords and confirmation match.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

3. Fill out the form with valid data and observe validation messages for errors.

## Project Structure

```
.
├── src
│   ├── assets
│   │   └── react.svg         # React logo
│   ├── components
│   │   ├── CustomForm
│   │   │   ├── CustomForm.tsx
│   │   │   └── CustomInput.tsx
│   │   └── CustomInput.css  # Styling for input components
│   ├── App.tsx              # Main app entry point
│   └── App.css              # Global styles
├── public
└── index.html               # HTML template
```

## Form Validation Schema

The form uses `zod` for validation. Below is the schema definition:

```typescript
const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters long')
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs the linter to check for code issues.

## Dependencies

- [React](https://react.dev)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

Enjoy building with React! 🚀
