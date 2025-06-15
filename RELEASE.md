# Release Process

Ce projet utilise [semantic-release](https://github.com/semantic-release/semantic-release) pour automatiser les releases basées sur les [Conventional Commits](https://www.conventionalcommits.org/).

## Comment ça fonctionne

### Commits conventionnels

Utilisez le format suivant pour vos commits :

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### Types de commits et leur impact sur la version

- **fix**: Correction de bug → Version PATCH (1.0.0 → 1.0.1)
- **feat**: Nouvelle fonctionnalité → Version MINOR (1.0.0 → 1.1.0)
- **BREAKING CHANGE**: Changement cassant → Version MAJOR (1.0.0 → 2.0.0)
- **docs**: Documentation uniquement
- **style**: Formatage, points-virgules manquants, etc.
- **refactor**: Refactoring du code
- **test**: Ajout de tests
- **chore**: Maintenance, tâches de build, etc.

#### Exemples

```bash
# Correction de bug (PATCH)
git commit -m "fix(ui): correct button alignment issue"

# Nouvelle fonctionnalité (MINOR)
git commit -m "feat(auth): add OAuth login support"

# Breaking change (MAJOR)
git commit -m "feat(api): change authentication method

BREAKING CHANGE: API endpoints now require JWT tokens instead of API keys"
```

### Processus automatisé

1. **Push sur main** : Chaque push sur la branche `main` déclenche le workflow de release
2. **Analyse des commits** : semantic-release analyse les commits depuis la dernière release
3. **Génération de version** : Calcul automatique de la nouvelle version basée sur les types de commits
4. **Génération du changelog** : Création/mise à jour du fichier `CHANGELOG.md`
5. **Création de la release** : Tag Git et release GitHub avec les notes de version
6. **Commit des changements** : Commit automatique du changelog et du package.json mis à jour

### Configuration

- **`.releaserc`** : Configuration de semantic-release
- **`.github/workflows/release.yaml`** : Workflow GitHub Actions
- **`package.json`** : Dépendances et scripts

### Branches et déploiement

- **main** : Branche de production, releases automatiques
- **develop/feature branches** : Pas de release automatique

### Permissions requises

Le workflow nécessite les permissions suivantes :

- `contents: write` - Pour créer les tags et commits
- `issues: write` - Pour commenter les issues liées
- `pull-requests: write` - Pour commenter les PRs liées

Ces permissions sont configurées dans le workflow et utilisent le token `GITHUB_TOKEN` automatique.
