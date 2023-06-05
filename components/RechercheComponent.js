import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Picker } from 'react-native';

const RechercheComponent = () => {
  const [professeurs, setProfesseurs] = useState([]);
  const [specialites, setSpecialites] = useState([]);
  const [villesActuelles, setVillesActuelles] = useState([]);
  const [villesDesirees, setVillesDesirees] = useState([]);
  const [specialiteSelectionnee, setSpecialiteSelectionnee] = useState('');
  const [villeActuelleSelectionnee, setVilleActuelleSelectionnee] = useState('');
  const [villesDesireesSelectionnees, setVillesDesireesSelectionnees] = useState([]);
  const [resultats, setResultats] = useState([]); // Ajout du state pour les résultats de recherche

  useEffect(() => {
    fetch('https://troubled-red-garb.cyclic.app/professeurs')
      .then(response => response.json())
      .then(data => {
        setProfesseurs(data);
        const specialitesUniques = Array.from(new Set(data.map(professeur => professeur.specialite)));
        setSpecialites(specialitesUniques);
        const villesActuellesUniques = Array.from(new Set(data.map(professeur => professeur.villeFaculteActuelle)));
        setVillesActuelles(villesActuellesUniques);
        const villesDesireesUniques = Array.from(new Set(data.flatMap(professeur => professeur.villeDesiree.split(';'))));
        setVillesDesirees(villesDesireesUniques);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const rechercheProfesseurs = () => {
    // Filtres de recherche
    let professeursFiltres = professeurs;

    if (specialiteSelectionnee) {
      professeursFiltres = professeursFiltres.filter(
        (professeur) => professeur.specialite === specialiteSelectionnee
      );
    }

    if (villeActuelleSelectionnee) {
      professeursFiltres = professeursFiltres.filter(
        (professeur) =>
          professeur.villeFaculteActuelle === villeActuelleSelectionnee
      );
    }

    if (villesDesireesSelectionnees.length > 0) {
      professeursFiltres = professeursFiltres.filter((professeur) =>
        professeur.villeDesiree.split(';').some((villeDesiree) =>
          villesDesireesSelectionnees.includes(villeDesiree)
        )
      );
    }

    // Mise à jour des résultats de recherche
    setResultats(professeursFiltres);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Search professors</Text>

          <Text style={styles.label}>specializations :</Text>
          <Picker
            selectedValue={specialiteSelectionnee}
            onValueChange={(itemValue) => setSpecialiteSelectionnee(itemValue)}
          >
            <Picker.Item label="All specializations" value="" />
            {specialites.map((specialite, index) => (
              <Picker.Item key={index} label={specialite} value={specialite} />
            ))}
          </Picker>

          <Text style={styles.label}>current city :</Text>
          <Picker
            selectedValue={villeActuelleSelectionnee}
            onValueChange={(itemValue) => setVilleActuelleSelectionnee(itemValue)}
          >
            <Picker.Item label="All cities" value="" />
            {villesActuelles.map((ville, index) => (
              <Picker.Item key={index} label={ville} value={ville} />
            ))}
          </Picker>

          <Text style={styles.label}>Wanted city :</Text>
          <Picker
            selectedValue={villesDesireesSelectionnees}
            onValueChange={(itemValue) => setVillesDesireesSelectionnees(itemValue)}
            mode="multiple"
          >
            <Picker.Item label="All wanted cities" value={[]} />
            {villesDesirees.map((ville, index) => (
              <Picker.Item key={index} label={ville} value={ville} />
            ))}
          </Picker>

          <Text style={styles.searchButton} onPress={rechercheProfesseurs}>
            Search
          </Text>
        </View>

        {/* Affichage des résultats */}
        {resultats.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Résultats de recherche :</Text>
            {resultats.map((professeur, index) => (
              <View key={index}>
                <Text>{professeur.nom} {professeur.prenom}</Text>
                <Text>{professeur.email}</Text>
                <Text>{professeur.specialite} {professeur.grade}</Text>
                <Text> {professeur.villeFaculteActuelle} ,</Text>
                <Text> Villes désirées: {professeur.villeDesiree}</Text>
                <Text>_________________________</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  searchButton: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#007bff',
    padding: 10,
    textAlign: 'center',
  },
});

export default RechercheComponent;
