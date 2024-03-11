import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, FlatList, ScrollView } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [destino, setDestino] = useState('');
  const [dataEmbarque, setDataEmbarque] = useState('');
  const [hora, setHora] = useState('');
  const [lista, setLista] = useState([]);

  const cadastrarPassagem = () => {
    const novaPassagem = { nome, destino, dataEmbarque, hora };
    setLista([...lista, novaPassagem]);

    setNome('');
    setDestino('');
    setDataEmbarque('');
    setHora('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/avião-desenhos-animados-1301493.jpg')}
        style={styles.airplaneImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Venda de Passagens Aéreas</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Destino"
          value={destino}
          onChangeText={(text) => setDestino(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Embarque"
          value={dataEmbarque}
          onChangeText={(text) => setDataEmbarque(text)}
        />
        <Button title="Vender" onPress={cadastrarPassagem} />
      </View>
      <ScrollView style={styles.listaContainer}>
        <Text style={styles.subtitle}>Passagens Cadastradas:</Text>
        <FlatList
          data={lista}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.passagemItem}>
              <View style={styles.azulClara}>
                <Text style={styles.passagemLabel}>Nome do Passageiro:</Text>
                <Text>{item.nome}</Text>
                <Text style={styles.passagemLabel}>Destino:</Text>
                <Text>{item.destino}</Text>
                <Text style={styles.passagemLabel}>Data de Embarque:</Text>
                <Text>{item.dataEmbarque}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  airplaneImage: {
    width: '100%',
    height: '30%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(173, 216, 230, 0.3)',
    width: '100%',
    height: '30%',
  },
  overlayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  formContainer: {
    flex: 0.6, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  listaContainer: {
    flex: 0.5,
    padding: 20,
    backgroundColor: 'orange',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  passagemItem: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  azulClara: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  passagemLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
