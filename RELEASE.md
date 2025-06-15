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
- **docs**: Documentation only
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance, build tasks, etc.

#### Examples

```bash
# Bug fix (PATCH)
git commit -m "fix(ui): correct button alignment issue"

# New feature (MINOR)
git commit -m "feat(auth): add OAuth login support"

# Breaking change (MAJOR)
git commit -m "feat(api): change authentication method

BREAKING CHANGE: API endpoints now require JWT tokens instead of API keys"
```

### Automated process

1. **Push to main**: Each push to the `main` branch triggers the release workflow
2. **Commit analysis**: semantic-release analyzes commits since the last release
3. **Version generation**: Automatic calculation of the new version based on commit types
4. **Changelog generation**: Creation/update of the `CHANGELOG.md` file
5. **Release creation**: Git tag and GitHub release with release notes
6. **Commit changes**: Automatic commit of updated changelog and package.json

### Configuration

- **`.releaserc`**: semantic-release configuration
- **`.github/workflows/release.yaml`**: GitHub Actions workflow
- **`package.json`**: Dependencies and scripts
- **`commitlint.config.js`**: Commit message validation

### Branches and deployment

- **main**: Production branch, automatic releases
- **develop/feature branches**: No automatic release

### Required permissions

The workflow requires the following permissions:

- `contents: write` - To create tags and commits
- `issues: write` - To comment on related issues
- `pull-requests: write` - To comment on related PRs

These permissions are configured in the workflow and use the automatic `GITHUB_TOKEN`.

### Usage

```bash
# Use commitizen for guided conventional commits
npm run commitizen

# Validate commit messages
npx commitlint --from HEAD~1 --to HEAD

# Manual release (not recommended, use automatic releases)
npm run semantic-release
```
