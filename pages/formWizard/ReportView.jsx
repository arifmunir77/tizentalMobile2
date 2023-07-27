import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import Pdf from 'react-native-pdf';

import {useAppState} from '../../hooks/useAppState';
import RNFetchBlob from 'rn-fetch-blob';

import Icon from 'react-native-vector-icons/Entypo';

const ReportView = () => {
  const [stepValues, setStepValues] = useAppState();

  let pdfUrl = 'https://tezintel.com' + stepValues?.reportPath;

  console.log('pftdd', pdfUrl);

  if (!pdfUrl) {
    return (
      <View style={styles.container}>
        <Text>No PDF URL available.</Text>
      </View>
    );
  }

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Downloader App Storage Permission',
          message:
            'Downloader App needs access to your storage ' +
            'so you can download files',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadFile();
      } else {
        console.log('storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const downloadFile = () => {
    const {config, fs} = RNFetchBlob;
    const date = new Date();
    const fileDir = fs.dirs.DownloadDir;
    config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDir +
          '/download_' +
          Math.floor(date.getDate() + date.getSeconds() / 2) +
          '.pdf',
        description: 'file download',
      },
    })
      .fetch('GET', pdfUrl, {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
        alert('file downloaded successfully ');
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={requestStoragePermission}
        style={styles.downloadButton}>
        <Icon name="dots-three-vertical" size={30} color="white" />
      </TouchableOpacity>

      <Pdf
        trustAllCerts={false}
        source={{uri: pdfUrl, cache: true}}
        style={styles.pdf}
        onError={error => console.log('Error while loading PDF: ', error)}
      />
    </View>
  );
};

export default ReportView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
  downloadButton: {
    position: 'absolute', 
    top: 0,  
    right: 0,  
    width: 50,
    height: 50,
    borderWidth: 0.5,
    backgroundColor: ' rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    zIndex: 5,
  },
  buttonText: {
    color: '#fff',
  },
});
