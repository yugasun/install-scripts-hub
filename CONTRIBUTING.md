# Contributing to Install Scripts Hub

Thank you for your interest in contributing to Install Scripts Hub! We welcome contributions from the community.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- Any package manager (npm/pnpm/bun)
- Git

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/install-scripts-hub.git
   cd install-scripts-hub
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

## 📝 How to Contribute

### Adding a New Installation Script

1. **Create the script file**: Add your script to `/public/installs/your-tool.sh`
   ```bash
   #!/bin/bash
   # Your installation script here
   ```

2. **Add script metadata**: Update the JSON files in `/public/`:
   - `/public/scripts.en.json` (English)
   - `/public/scripts.zh.json` (Chinese)
   - `/public/scripts.json` (fallback)
   
   Example:
   ```json
   {
     "name": "Your Tool",
     "url": "your-tool.sh",
     "sourceUrl": "https://github.com/author/your-tool",
     "description": "Description of your tool",
     "category": "development-tools",
     "tags": ["tag1", "tag2"]
   }
   ```

3. **Test your script**: Ensure it works correctly:
   ```bash
   curl -fsSL http://localhost:3000/installs/your-tool.sh | bash
   ```

### Improving Existing Code

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Run tests and linting:
   ```bash
   npm run typecheck
   npm run lint
   npm run format:check
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request

## 📋 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add installation script for rust
fix: resolve copy button not working on mobile
docs: update README with new scripts
```

## 🧪 Testing

Before submitting a PR, make sure:

- [ ] The code builds without errors: `pnpm build`
- [ ] The code builds without errors: `npm run build`
- [ ] All type checks pass: `npm run typecheck`
- [ ] Code is properly formatted: `npm run format:check`
- [ ] ESLint passes: `npm run lint`
- [ ] The application works in your browser
- [ ] Installation scripts work correctly

## 📁 Project Structure

```
src/
├── app/                # Next.js App Router pages
├── components/         # React UI components
└── lib/                # Services, i18n, types, utils
public/
├── installs/           # Installation scripts
├── scripts.en.json     # English script metadata
├── scripts.zh.json     # Chinese script metadata
└── scripts.json        # Fallback metadata
```

## 🎨 Code Style

- Use TypeScript for type safety
- Follow the existing code structure
- Write clear, descriptive variable and function names
- Add JSDoc comments for public APIs
- Keep components small and focused
- Prefer `@/` path alias imports (see `tsconfig.json`)

## 🌐 Internationalization

When adding new UI text:

1. Add the key to `/src/lib/i18n/translations/en.ts`
2. Add the translation to `/src/lib/i18n/translations/zh.ts`
3. Use `$t('your.key')` in your component

## 🐛 Reporting Bugs

Create an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment info (OS, browser, etc.)

## 💡 Feature Requests

Create an issue describing:
- The feature you'd like to see
- Why it would be useful
- How it should work
- Any alternatives you've considered

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!
