import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AboutComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>
       Plateforme de Permutation pour Enseignants Universitaires
       </Text>
      <Text style={styles.paragraph}>
Cette plateforme est simplement un espace permettant aux professeurs universitaires de rechercher un partenaire pour une permutation. Elle se limite à cette fonctionnalité. Les enseignants peuvent rechercher des partenaires intéressés par un échange dans d'autres établissements d'enseignement supérieur. Le système facilite la recherche et la correspondance entre les enseignants ayant une volonté mutuelle d'échanger.
</Text>

<Text style={styles.paragraph}>
La plateforme offre une interface conviviale et sécurisée aux enseignants pour communiquer et échanger les informations nécessaires. Les membres peuvent créer des profils personnels et renseigner des informations concernant leurs spécialités, les établissements et les informations de contact. Les enseignants peuvent consulter les profils des partenaires potentiels et entrer en contact avec eux pour discuter des détails de l'accord d'échange.
</Text>
<Text style={styles.paragraph}>
En utilisant cette plateforme, les enseignants peuvent faciliter leur recherche de partenaires d'échange, économiser du temps et des efforts en évitant les communications individuelles et les recherches continues d'opportunités d'échange. Ce système est efficace et utile pour les enseignants souhaitant changer d'institution ou travailler dans un nouvel établissement pour élargir leur expérience académique.
      </Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'left',
    padding: 4,
  },
  paragraph: {
    margin: 4,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'left',
  },
    cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  }
});
