# Readme

Site web du Photographe Charles Cantin présentant son travail et les prestations qu'il propose ainsi qu'un formulaire de contact.

## Motivation

J'ai développé ce site dans le cadre d'une évaluation d'entrainement Front End chez Studi

## Build status

Développement terminé et site mis en prod

## Tech/Framework used

- REACT JS
- CSS/SASS
- BOOTSTRAP

Le site a été déployé sur Netlify de manière à profiter de leur système de formulaire.

Le CMS a été déployé sur Forestry pour permettre l'utilisation automatique avec Github.

Concernant les données modifiables par le client via Forestry, elles se situent dans :

- Media : /src/assets/images
  > Répertoire contenant les fichiers images qui réceptionne les upload du client
- Images : /src/datas/images
  > Répertoire contenant les fichiers MD des images avec le nom, la category et le fichier
- Prestations : /src/datas/services
  > Répertoire contenant les fichiers MD des prestations avec le nom, le prix, la description et le commentaire

## Déploiement de la solution

Il s'agit d'un site en REACT JS, il faut donc effectuer un build pour le déploiement (Netlify permet de faire le build en automatique.)

    npm run build

Un formulaire caché a été inséré dans le fichier /public/index.html et une fonction qui permet de faire un POST a été ajouté dans le composant /src/components/MyForm.jsx pour utiliser la gestion des formulaires de Netlify. Si vous souhaitez utiliser un autre gestionnaire, il faudra certainement effectué des modifications.

```html
<!-- A little help for the Netlify post-processing bots -->
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="lastname" />
  <input type="text" name="firstname" />
  <input type="text" name="telephone" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
```

```Javascript
    fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...formData }),
    })
```

Les fichiers MD et les images sont uploadées directement par le client depuis Forestry.
En cas de modification, il faudra veiller à respecter le format des fichiers.

/src/datas/images/image.md

```
---
name: image
category: catégories
file: image.jpg

---
```

/src/datas/services/prestation.md

```
---
price: prix
name: presation
description: description
commentaire: commentaire

---
```
