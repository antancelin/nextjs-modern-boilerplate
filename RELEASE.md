# Release Process

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to automate releases based on [Conventional Commits](https://www.conventionalcommits.org/).

## How it works

### Conventional Commits

Use the following format for your commits:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### Commit types and their version impact

- **fix**: Bug fix → PATCH version (1.0.0 → 1.0.1)
- **feat**: New feature → MINOR version (1.0.0 → 1.1.0)
- **BREAKING CHANGE**: Breaking change → MAJOR version (1.0.0 → 2.0.0)
- **docs**: Documentation only → PATCH version
- **chore**: Maintenance, build tasks, etc. → PATCH version
- **refactor**: Code refactoring → PATCH version
- **style**: Formatting, missing semicolons, etc.
- **ci**: Continuous integration changes

#### Examples

```bash
git commit -m "fix(ui): correct button alignment issue"
git commit -m "feat(auth): add OAuth login support"
git commit -m "chore(deps): update react to 19.2.0"
git commit -m "docs(readme): update installation instructions"
```

### Automated process

1. **Push to main**: Each push to `main` triggers the release workflow
2. **Commit analysis**: semantic-release analyzes commits since the last release
3. **Version generation**: Automatic calculation of the new version based on commit types
4. **Release creation**: GitHub Release created with auto-generated notes — no commits pushed back to `main`

### Configuration

- **`package.json` (`release`)**: semantic-release configuration (branches + plugins)
- **`.github/workflows/release.yaml`**: GitHub Actions workflow
- **`commitlint.config.js`**: Commit message validation

### Branches and deployment

- **main**: Production branch, automatic releases
- **feature branches**: No automatic release, CI runs on PRs

### Required permissions

The workflow requires the following permissions:

- `contents: write` — To create tags and GitHub Releases
- `issues: write` — To comment on related issues
- `pull-requests: write` — To comment on related PRs

These permissions are configured in the workflow and use the built-in `GITHUB_TOKEN`.

### Usage

```bash
# Use commitizen for guided conventional commits
npm run commitizen

# Validate commit messages
npm run commitlint
```
