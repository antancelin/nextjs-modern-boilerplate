# Plan de mise a jour (hors SEO et hors tests)

## P0 - A faire en premier

### 1) Patch securite Next.js

- Pourquoi: il reste 1 vulnerabilite `high` en production sur `next@15.5.9`.
- Objectif: passer au minimum sur `15.5.12` (ou la derniere patch 15 disponible).

Commandes:

```bash
npm i next@^15.5.12 eslint-config-next@^15.5.12 @next/bundle-analyzer@^15.5.12
npm audit --omit=dev
```

Critere de validation:

- `npm audit --omit=dev` ne remonte plus de `high` sur les deps prod.

### 2) Migrer `next lint` vers ESLint CLI

- Pourquoi: `next lint` est deprecie et sera retire en Next 16.
- Objectif: supprimer cette dette de migration maintenant.

Commandes:

```bash
npx @next/codemod@canary next-lint-to-eslint-cli .
npm run lint
```

Critere de validation:

- plus d'avertissement "`next lint` is deprecated".

## P1 - Stabiliser la maintenance

### 3) Unifier la configuration semantic-release

- Pourquoi: il y a 2 sources de verite (`package.json.release` et `.releaserc`).
- Objectif: garder une seule configuration pour eviter les divergences.
- Decision recommandee: garder `package.json.release` et supprimer `.releaserc` (ou inversement, mais une seule source).

Commande de verification:

```bash
npx semantic-release --dry-run
```

Critere de validation:

- le dry-run charge uniquement les plugins attendus de la config retenue.

### 4) Mettre a jour les dependances directes (patch/minor)

- Pourquoi: reduire la dette technique et limiter les gros sauts plus tard.
- Objectif: faire une passe patch/minor maintenant, laisser les majors pour un lot dedie.

Commande utile:

```bash
npm outdated
```

Critere de validation:

- apres mise a jour: `npm run lint && npm run typecheck && npm run build` passent.

### 5) Ajouter `format:check` dans la CI

- Pourquoi: garantir le style de code au meme niveau que lint/typecheck/build.
- Objectif: ajouter une etape dediee dans `.github/workflows/ci.yaml`.

Commande de verification:

```bash
npm run format:check
```

Critere de validation:

- la CI echoue si le formatage n'est pas conforme.

## P2 - Finitions

### 6) Aligner la version Node dans tout le projet

- Pourquoi: la CI est sur Node 20, mais pas de fichier local de version (`.nvmrc` / `.node-version`).
- Objectif: harmoniser local + CI + docs.

Critere de validation:

- meme version Node documentee et utilisee partout.

### 7) Nettoyer le warning npm `Unknown env config "devdir"`

- Pourquoi: warning present a chaque commande npm, bruit inutile.
- Objectif: retirer la config `devdir` de l'environnement npm global/shell.

Commande de verification:

```bash
npm config get devdir
```

Critere de validation:

- plus d'avertissement sur `devdir` lors des commandes npm.

## Validation finale (gate de fin)

Executer dans cet ordre:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

Definition de "nickel":

- zero erreur format/lint/typecheck/build
- zero vulnerabilite `high` ou `critical` sur les dependances de production
- plus de warning deprecation `next lint`
