import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: 0,
    color: '#FFF',
    width: '100%',
    textAlign: 'center',
  },
  title2: {
    fontSize: 25,
    position: 'absolute',
    top: 15,
    color: '#FFF',
    width: '100%',
    textAlign: 'center',
  },
  title4: {
    fontSize: 25,
    position: 'absolute',
    top: 30,
    color: '#FFF',
    width: '100%',
    textAlign: 'center',
  },
  title3: {
    fontSize: 20,
    fontStyle: 'italic',
    position: 'absolute',
    bottom: 80,
    color: '#FFF',
    width: '100%',
    textAlign: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 30,
  },
  searchButton: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
