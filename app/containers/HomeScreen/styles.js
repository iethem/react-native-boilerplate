import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F3F3F3',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: '#444',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  body: {
    backgroundColor: '#FFF',
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  localeToggle: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: '#1292B4',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: '#444',
  },
  separator: {
    backgroundColor: '#DAE1E7',
    height: 1,
  },
});

export default styles;
