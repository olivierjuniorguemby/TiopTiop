# TchoTchop — Template UI/UX (Client + Admin) — HTML/CSS/JS

Ce dépôt contient un **template statique** (HTML/CSS/JS) pour l'application **TchoTchop** :
- **Côté client** : navigation, menus, panier, commande, suivi, notifications, abonnement, réductions, historique, assistance, etc.
- **Côté admin** : gestion des produits, catégories, commandes, livraisons, incidents, fournisseurs, achats, ventes, clients, annonces/pubs, et une vue **géolocalisation (Leaflet)**.

> ⚠️ Remarque : ce template est **sans backend** (données simulées dans `assets/js/mock-data.js`).  
> Il est prêt à être branché sur ton futur backend Node.js (ou ASP.NET Core) via API.

---

## 1) Analyse fonctionnelle (cohérente avec ton cahier des charges)

### Parcours Client
1. **Découverte & recherche**
   - Accueil avec **recherche**, **filtres** (prix, catégories), sections “Populaire”, “Suggestions”
   - Affichage des **catégories** partout (menu & pages)

2. **Menus & détails**
   - Chaque menu/plat :
     - Photos (carrousel)
     - Prix
     - Catégorie (petit-déj, déjeuner, dessert, etc.)
     - **Ingrédients / constitution**
     - **Suggestions** (produits associés)
     - **Personnalisation** (extras, niveau piment, accompagnements)
   - Ajout de plusieurs menus au panier

3. **Panier & commande**
   - Panier multi-produits
   - Commande **pour plusieurs personnes** (notes / noms / quantités)
   - Paiement (placeholder UI) : local + international

4. **Livraison & suivi**
   - Statuts : reçue → en préparation → prête → en livraison → livrée
   - **Notifications à chaque étape**
   - Estimation ETA et **suivi livreur** (simulation + Leaflet)
   - Historique des commandes
   - Page “Mes réductions”

5. **Fidélité & abonnement**
   - Abonnement client fidèle
   - Réductions et annonces via notifications

6. **Incidents & support**
   - Gestion d’incidents (litiges) côté client
   - Aide / FAQ, Contact, À propos

7. **Pubs & annonces**
   - Emplacements et page dédiée aux annonces

### Parcours Admin
- Tableau de bord : KPI, commandes, livraisons
- Gestion :
  - **Commandes**
  - **Livraisons** (assignation livreur, statuts)
  - **Incidents / litiges**
  - **Produits & catégories** (menus)
  - **Clients**
  - **Fournisseurs**
  - **Achats / Ventes**
  - **Annonces / pubs**
- Géolocalisation :
  - Carte Leaflet + markers (zones, clients, livreurs) + geolocation navigateur

---

## 2) Charte graphique (orange + inspiration africaine)
- Couleur principale : **#ff7900** (sans dégradés)
- Fond : blanc chaud (teinte crème) pour confort visuel
- Motifs africains très subtils (pattern SVG ton sur ton)
- Composants “fast-food moderne” inspirés des apps McDonald's/KFC, mais avec une touche africaine (icônes, pattern, textes, sections)

---

## 3) Structure du projet

```
tchoptchop_template/
  index.html
  menu.html
  menu-detail.html
  cart.html
  checkout.html
  tracking.html
  auth.html
  profile.html
  subscriptions.html
  reductions.html
  history.html
  ads.html
  incidents.html
  help.html
  about.html
  contact.html

  admin/
    index.html
    products.html
    categories.html
    orders.html
    deliveries.html
    incidents.html
    suppliers.html
    purchases.html
    sales.html
    customers.html
    ads.html
    geo.html
    settings.html

  assets/
    css/style.css
    js/app.js
    js/mock-data.js
    js/maps.js
    img/logo.svg
    img/pattern.svg
```

---

## 4) Comment tester localement
Ouvre `index.html` dans ton navigateur.  
Pour éviter certains blocages (fetch / modules), tu peux servir en local :

- Python :
  - `python -m http.server 8080`
  - puis ouvrir `http://localhost:8080/`

---

## 5) À brancher ensuite sur ton backend
- Remplacer les données de `mock-data.js` par des appels API (`fetch`)
- Ajouter auth (JWT), paiements (PSP), push notifications (web push / FCM), tracking réel (mobile)

Bon build 🚀
