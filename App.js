import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      img: require('./src/Interrogação.png'),
      texto: 'Boa Sorte',
    };

    this.frase =[
      "Parabéns você ganhou o boné (PRÊMIO 1)",
      "Parabéns você ganhou a camisa (PRÊMIO 2)",
      "Parabéns você ganhou a carteira (PRÊMIO 3)",
      "Parabéns você ganhou o cobertor (PRÊMIO 4)",
      "Parabéns você ganhou a garrafa (PRÊMIO 5)",
    ];

    (this.imgs = [
      require('./src/Boné.png'),
      require('./src/Camisa.png'),
      require('./src/Carteira.png'),
      require('./src/Cobertor.png'),
      require('./src/Garrafa.png'),
    ]);

    this.sortear = this.sortear.bind(this);
  }

  sortear() {
    let num = Math.floor(Math.random() * this.frase.length);
    this.setState({
      texto: this.frase[num],
      img: this.imgs[num],
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.estiloImg}/>
        <Text style={styles.texto}>{this.state.texto}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.sortear}>
          <View style={styles.botaoArea}>
            <Text style={styles.botaoTexto}>SORTEAR</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 230,
    heidht: 40,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 40,
    marginBottom: 10,
  },
  botaoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  estiloImg: {
    width: 300,
    height: 300,
    borderRadius: 500,
  },
  texto: {
    fontSize: 20,
    color: 'red',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
