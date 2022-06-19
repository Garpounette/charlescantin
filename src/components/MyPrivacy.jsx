function MyPrivacy({ name, url, uri }) {
  return (
    <div className="MyPrivacy">
      <h1>POLITIQUE DE CONFIDENTIALITÉ</h1>
      <h2>ARTICLE 1 : PRÉAMBULE</h2>
      <p>
        Cette politique de confidentialité s'applique au site : <strong>{name}</strong>
      </p>
      <p>
        La présente politique de confidentialité a pour but d'exposer aux utilisateurs du site :
      </p>
      <ul>
        <li>
          La manière dont sont collectées et traitées leurs données à caractère personnel. Doivent
          être considérées comme données personnelles toutes les données étant susceptibles
          d'identifier un utilisateur. Il s'agit notamment du prénom et du nom, de l'âge, de
          l'adresse postale, l'adresse mail, la localisation de l'utilisateur ou encore son adresse
          IP ;
        </li>
        <li>Quels sont les droits des utilisateurs concernant ces données ;</li>
        <li>
          Qui est responsable du traitement des données à caractère personnel collectées et traitées
          ;
        </li>
        <li>A qui ces données sont transmises ;</li>
        <li>Eventuellement, la politique du site en matière de fichiers "cookies".</li>
      </ul>
      <p>
        Cette politique de confidentialité complète les mentions légales et les Conditions Générales
        d'Utilisation que les utilisateurs peuvent consulter à l'adresse ci-après :
      </p>
      <p>
        <strong>{url}</strong>
      </p>
      <h2>ARTICLE 2 : PRINCIPES GÉNÉRAUX EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DE DONNÉES</h2>
      <p>
        Conformément aux dispositions de l'article 5 du Règlement européen 2016/679, la collecte et
        le traitement des données des utilisateurs du site respectent les principes suivants :
      </p>
      <ul>
        <li>
          Licéité, loyauté et transparence : les données ne peuvent être collectées et traitées
          qu'avec le consentement de l'utilisateur propriétaire des données. A chaque fois que des
          données à caractère personnel seront collectées, il sera indiqué à l'utilisateur que ses
          données sont collectées, et pour quelles raisons ses données sont collectées ;
        </li>
        <li>
          Finalités limitées : la collecte et le traitement des données sont exécutés pour répondre
          à un ou plusieurs objectifs déterminés dans les présentes conditions générales
          d'utilisation ;
        </li>
        <li>
          Minimisation de la collecte et du traitement des données : seules les données nécessaires
          à la bonne exécution des objectifs poursuivis par le site sont collectées ;
        </li>
        <li>
          Conservation des données réduites dans le temps : les données sont conservées pour une
          durée limitée, dont l'utilisateur est informé. Lorsque cette information ne peut pas être
          communiquée, l'utilisateur est informé des critères utilisés pour déterminer la durée de
          conservation ;
        </li>
        <li>
          Intégrité et confidentialité des données collectées et traitées : le responsable du
          traitement des données s'engage à garantir l'intégrité et la confidentialité des données
          collectées.
          <br />
          <br />
        </li>
      </ul>
      <p>
        Afin d'être licites, et ce conformément aux exigences de l'article 6 du règlement européen
        2016/679, la collecte et le traitement des données à caractère personnel ne pourront
        intervenir que s'ils respectent au moins l'une des conditions ci-après énumérées :
      </p>
      <ul>
        <li>L'utilisateur a expressément consenti au traitement ;</li>
        <li>Le traitement est nécessaire à la bonne exécution d'un contrat ;</li>
        <li>Le traitement répond à une obligation légale ;</li>
        <li>
          Le traitement s'explique par une nécessité liée à la sauvegarde des intérêts vitaux de la
          personne concernée ou d'une autre personne physique ;
        </li>
        <li>
          Le traitement peut s'expliquer par une nécessité liée à l'exécution d'une mission
          d'intérêt public ou qui relève de l'exercice de l'autorité publique ;
        </li>
        <li>
          Le traitement et la collecte des données à caractère personnel sont nécessaires aux fins
          des intérêts légitimes et privés poursuivis par le responsable du traitement ou par un
          tiers.
        </li>
      </ul>
      <h2>ARTICLE 3 : UTILISATION DES FICHIERS "COOKIES"</h2>
      <p>Le site a éventuellement recours aux techniques de "cookies".</p>
      <p>
        Un "cookie" est un fichier de petite taille (moins de 4 ko), stocké par le site sur le
        disque dur de l'utilisateur, contenant des informations relatives aux habitudes de
        navigation de l'utilisateur.
      </p>
      <p>
        Ces fichiers lui permettent de traiter des statistiques et des informations sur le trafic,
        de faciliter la navigation et d'améliorer le service pour le confort de l'utilisateur.
      </p>
      <p>
        Pour l'utilisation de fichiers "cookies" impliquant la sauvegarde et l'analyse de données à
        caractère personnel, le consentement de l'utilisateur est nécessairement demandé.
      </p>
      <p>
        Ce consentement de l'utilisateur est considéré comme valide pour une durée de 6 (six) mois
        maximum. A l'issue de cette période, le site demandera à nouveau l'autorisation de
        l'utilisateur pour enregistrer des fichiers "cookies" sur son disque dur.
      </p>
      <h2>ARTICLE 4 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ</h2>
      <p>
        La présente politique de confidentialité peut être consultée à tout moment à l'adresse
        ci-après indiquée :
      </p>
      <p>
        <strong>
          {url}
          {uri}
        </strong>
      </p>
      <p>
        L'éditeur du site se réserve le droit de la modifier afin de garantir sa conformité avec le
        droit en vigueur.
      </p>
      <p>
        Par conséquent, l'utilisateur est invité à venir consulter régulièrement cette politique de
        confidentialité afin de se tenir informé des derniers changements qui lui seront apportés.
      </p>
      <p>
        Il est porté à la connaissance de l'utilisateur que la dernière mise à jour de la présente
        politique de confidentialité est intervenue le : 19/06/2022.
      </p>
    </div>
  );
}

export default MyPrivacy;
