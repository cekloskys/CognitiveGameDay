import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backButton: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '20%',
    marginLeft: '2%',
  },
  header: {
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    resizeMode: 'contain',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 0,
    color: '#000000',
    width: '100%',
    textAlign: 'center',
  },
  title4: {
    fontSize: 25,
    fontWeight: 'normal',
    position: 'absolute',
    marginTop: 0,
    color: '#000000',
    width: '100%',
    textAlign: 'center',
  },
  title3: {
    fontSize: 20,
    fontStyle: 'italic',
    position: 'absolute',
    bottom: 80,
    color: '#000000',
    width: '100%',
    textAlign: 'center',
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 60,
    bottom: 30,
    justifyContent: 'space-evenly',
  },
  addGameButton: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '20%',
    marginLeft: '4%'
  },
  deleteGameButton: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '20%',
    marginLeft: '3%'

  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
