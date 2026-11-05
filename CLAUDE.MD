# AGENTS.md

# Ratey

Ratey est une application pour rechercher et noter des jeux vidéos.

Un utilisateur doit, avant d'utiliser l'application : 
- S'inscrire / se connecter avec Clerk

Un utilisateur connecté peut :
- Naviguer à travers les pages 
- Rechercher des jeux dans la barre de recherche du haut (API d'IGDB)
- Voir la carte d'un jeu
- L'ajouter à : ses favoris, à jouer plus tard, donner une évaluation (base de 5 étoiles, peut noter en quart de points. ex.: 4.25/5)
- Modifier ou supprimer son évaluation
- Dans les pages "Favoris", "À jouer plus tard", et "Vos évaluations", il peut rechercher et trier par: titre, studio, année, évaluation (pas dans "À jouer plus tard")
- Supprimer les filtres précédents
- Modifier ses paramètres
- Se déconnecter

# Stack
Electron (Typescript), Vite, Vue.js, Tailwind, Prisma 7 + Neon (PostgreSQL), Clerk, Vitest

# Commandes

- `npm run start` : serveur de développement
- `npm test` : tests Vitest, à lancer après chaque modification.
- `npm run lint` et `npm run build` : doivent passer avant chaque commit
- `npx prisma validate` : Après toute modification de `prisma/schema.prisma`

# Structure

- `app/` : pages et Route Handlers (`app/api/.../route.ts`) ; `app/actions/` Server Actions
- `lib/` : logique métier pure et testee (taxes, prix, acces) ; tests a cote : `lib/*.test.ts`
- `prisma/schema.prisma` : modele de donnees
- `docs/` : cahier des charges, diagramme de classes, journal IA

# Interdits

- Jamais `prisma migrate reset`, `git push --force`, `git reset --hard` sans mon accord
- Jamais lire ni afficher `.env` (utiliser `.env.example` pour connaître le noms des variables)
- Jamais de nouveau paquet npm sans me demander

# Facon de travailler

- Propose un plan avant de coder ; une tâche a la fois
- Apres chaque modification : `npm test` et `npm run lint`
- Commit : `type : description` (feat, update, docs, chore, test, fix)
- Réponds en francais
- Si une règle metier ou un nom de champ manque : pose la question, NE DEVINE PAS.
