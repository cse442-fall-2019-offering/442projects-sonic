import React, { Component } from 'react';
import { Text, View, Dimensions} from 'react-native';
import { RNCamera } from 'react-native-camera';

class Camera extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];
    let { width } = Dimensions.get('window');
	  this.maskLength = (width*85)/100; 

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
	      flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }

  onBarCodeRead(scanResult) {
   // console.warn(scanResult.type);
   // console.warn(scanResult.data);
    this.props.navigation.navigate('NutritionFactsScreen',{idType:"upc", itemInformation:`${scanResult.data}`})
    if (scanResult.data != null) {
	    if (!this.barcodeCodes.includes(scanResult.data)) {
	      this.barcodeCodes.push(scanResult.data);
	    //  console.warn('onBarCodeRead call');
	    }
    }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
  }

  render() {

    return (

      <View style={styles.container}>

        <RNCamera
            ref={ref => {this.camera = ref;}}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            style={styles.preview}
            type={this.state.camera.type}
        />

        <View style={[styles.overlay, styles.topOverlay]}>
	          <Text style={styles.scanScreenMessage}>Please scan the barcode</Text>
	      </View>

      	<View style={[styles.overlay, styles.bottomOverlay]}> 
            <Text>Please Scan the barcode</Text>
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default Camera;