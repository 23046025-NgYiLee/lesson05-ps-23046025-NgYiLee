import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SectionList, Button } from 'react-native';

const initialData = [
  {
    title: "Protein",
    data: [
      { name: "Chicken Breast", image: require('./assets/img/chicken.jpg') },
      { name: "Almonds", image: require('./assets/img/almond.jpg') }
    ]
  },
  {
    title: "Fiber",
    data: [
      { name: "Broccoli", image: require('./assets/img/broccoli.jpg') },
      { name: "Lentils", image: require('./assets/img/lentils.jpg') }
    ]
  }
];

export default function App() {
  const [sections, setSections] = useState(initialData);

  // Add Protein Item
  const addProtein = () => {
    const newProteinItem = { name: "Salmon", image: require('./assets/img/salmon.jpg') };
    setSections(prevSections =>
        prevSections.map(section =>
            section.title === "Protein" ? { ...section, data: [...section.data, newProteinItem] } : section
        )
    );
  };

  // Add Fiber Item
  const addFiber = () => {
    const newFiberItem = { name: "Apple", image: require('./assets/img/apple.jpg') };
    setSections(prevSections =>
        prevSections.map(section =>
            section.title === "Fiber" ? { ...section, data: [...section.data, newFiberItem] } : section
        )
    );
  };

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Add Protein" onPress={addProtein} />
          <Button title="Add Fiber" onPress={addFiber} />
        </View>
        <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item }) => (
                <View style={styles.item}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <View
                    style={[
                      styles.headerContainer,
                      { backgroundColor: title === "Protein" ? '#FF6347' : '#4CAF50' }
                    ]}
                >
                  <Text style={styles.header}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  headerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 5,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
});
