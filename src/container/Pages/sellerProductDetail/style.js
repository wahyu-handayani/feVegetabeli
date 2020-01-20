import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: '5%',
    height: '10%',
    elevation: 3,
  },
  textHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: '10%',
  },
  editProfilButton: {
    flexDirection: 'row',
    width: '100%',
    height: 35,
    paddingHorizontal: 14,
    paddingLeft: 140,
    paddingTop: 10,
  },
  touchableEdit: {
    backgroundColor: 'grey',
    borderRadius: 100,
    alignItems: 'center',
  },
  textEdit: {
    color: 'white',
    fontSize: 15,
  },
  editButton: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingHorizontal: 14,
    paddingLeft: 130,
    paddingTop: 10,
  },
  touchEdit: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    width: '50%',
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 19,
  },
  textEditProfile: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: 17,
  },
  containerFollowUs: {
    flexDirection: 'column',
    height: 110,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 4,
  },
  containerRincian: {
    flexDirection: 'column',
    height: 400,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 4,
  },
  textNameProduct: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 14,
    // fontWeight: 'bold',
  },
  textStok: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 90,
    color: 'grey',
  },
  textCategory: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 65,
    color: 'grey',
  },
  textMarket: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 43,
    color: 'grey',
  },
  textDesc: {
    fontSize: 15,
    paddingRight: 15,
    marginBottom: 10,
    marginLeft: 14,
    color: 'grey',
  },
  textFollow: {
    fontSize: 17,
    marginTop: 18,
    marginBottom: 10,
    marginLeft: 14,
    fontWeight: 'bold',
  },
  textRp: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 14,
    fontWeight: 'bold',
    color: '#F15B5D',
  },
  containerFacebook: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    paddingHorizontal: 14,
  },
});
