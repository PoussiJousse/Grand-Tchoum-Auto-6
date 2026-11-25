# Grand-Tchoum-Auto-6 · TrioLingo Industrial Edition Pro Max

Apprendre l'anglais d'un **technicien de maintenance en chaîne de production**. Une seule page HTML installable sur téléphone : hors-ligne, **zéro traceur, zéro cookie, zéro compte**.

- **Version courante :** L1 v0.1 · 2026-11-25
- **Pour installer (ami·e, utilisateur·rice) :** [`docs/TrioLingo_Installation_v0.1_2026-11-25.md`](docs/TrioLingo_Installation_v0.1_2026-11-25.md)

![Installer en 4 étapes](docs/TrioLingo_Installation_v0.1_2026-11-25.svg)

## Les 4 sections
| | Section | Lot |
|---|---|---|
| 📖 | Lire & apprendre : vocabulaire métier, grammaire, révision espacée | L2 |
| 🎧 | Écouter : briefings, consignes, appels (voix installée sur le téléphone uniquement) | L3 |
| 🎙 | Parler : modèle, enregistrement, note automatique **sur demande** ou auto-note | L4 |
| 🔧 | Mode mystère **Grand Tchoum Auto 6** : retrouver la douille de 13 (jeu 3D, style console années 2000, 100 % original) | L5–L6 |

---

## Notes de version

### L1 v0.1 · 2026-11-25 · Le socle
- 🏗 **App installable** (écran d'accueil iPhone et Android) qui marche **sans réseau** une fois ouverte.
- 👷 **Profil local** : prénom ou pseudo, couleur du casque, teinte de peau. Jamais envoyé.
- 🧭 **Test de placement** de 5 min : 18 questions (15 sans voix anglaise), 3 par compétence (facile, moyen, difficile), bouton **« Je ne sais pas »**. Niveaux A1 → B1 au départ. Refaire le test ne fait **jamais baisser** un niveau.
- 📊 **Radar de 7 compétences** : vocabulaire, grammaire, conjugaison, syntaxe, lecture, écoute, oral (« ? » tant que non évalué). XP, niveau de technicien, semaine en flammes 🔥 (un jour sans = 💤, jamais de série perdue).
- 🌐 **Menus FR puis EN** (mode Auto) : les menus passent en anglais vers A2+, tout le reste vers B1. Réglable : Auto / Français / English.
- 🗣 **Voix anglaise** : seules les voix **installées sur le téléphone** sont utilisées (les voix « en ligne » sont ignorées exprès). Guide d'installation si aucune.
- 🎙 **Micro** : réglage du consentement déjà en place (Options → Micro). Message clair avant tout envoi de la voix à Google ou Apple ; Non = auto-note locale.
- 💾 **Export / import** d'un fichier `.json` avec barre de progression. **Copie de secours** automatique avant import, avant effacement, et si la sauvegarde est illisible (jamais d'écrasement silencieux).
- 📲 Rappels : installer l'app (sinon l'iPhone peut effacer les données après 7 jours), exporter au moins 1 fois par semaine.
- 🔧 Sections 1 à 4 : écran « arrive au lot X » ; aperçu visuel du mode mystère.
- 🔒 Verrou de sécurité dans la page : **aucune connexion réseau possible** (`connect-src 'none'`).

**Testé** (navigateur Chromium, écran de téléphone 390 × 844) : démarrage, profil, test complet avec et sans voix, accueil, progrès, lexique, options, export, effacement, import, rechargement **sans réseau**, sauvegarde abîmée (copie de secours créée). Résultat : 0 erreur, **0 requête vers un autre site**.

**Limites connues**
- Pas encore essayé sur un vrai iPhone ni Android.
- Les questions d'écoute dépendent d'une voix anglaise installée sur le téléphone.
- Les sections 1 à 4 sont des écrans d'attente (contenu aux lots 2 à 6).

---

## Décisions de cadrage (2026-11-25)
| # | Sujet | Choix |
|---|---|---|
| D1 | Évaluer l'oral | Reconnaissance du navigateur, **sur demande** (sinon auto-note locale) |
| D2 | Nom du mode 4 | Grand Tchoum Auto 6 : parodie gratuite, jamais vendue, aucun logo/police/perso/carte d'un jeu existant |
| D3 | Niveau de départ | Test de placement 5 min |
| D4 | Anglais | Américain, avec notes UK quand le mot diffère |
| D5 | Interface | Français au début, bascule progressive vers l'anglais |
| D6–D7 | Dépôt | Ce dépôt public : app + jeu |

## Fichiers
| Fichier | Rôle |
|---|---|
| `index.html` | L'app entière (une seule page, aucun fichier externe) |
| `sw.js` | Mode hors-ligne (ne contacte aucun autre site) |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | Installation sur téléphone |
| `docs/` | Guides pour l'utilisateur (nom, version et date dans le nom de fichier) |

## Mettre en ligne (GitHub Pages)
1. Sur GitHub : **Settings → Pages**.
2. **Source : Deploy from a branch** → branche **`main`** → dossier **`/ (root)`** → **Save**.
3. Attendre 1 à 2 min : le lien s'affiche en haut de la page Pages. C'est ce lien qu'on envoie aux amis.

Mise à jour : remplacer `index.html` et `sw.js` sur `main` ; les téléphones prennent la nouvelle version à la réouverture (1 à 2 fois).
