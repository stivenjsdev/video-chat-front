import { setShowOverlay } from '../store/actions';
import store from '../store/store';
import * as wss from './wss';

const defaultConstraints = {
  audio: true,
  video: true,
};

let localStream;

export const getLocalPreviewAndInitRoomConnection = async (
  isRoomHost,
  identity,
  roomId = null
) => {
  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      console.log('successfully received local stream');
      localStream = stream;
      showLocalVideoPreview(localStream);

      //dispatch an action to hide overlay
      store.dispatch(setShowOverlay(false));

      // isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity, roomId);
      if (isRoomHost) {
        wss.createNewRoom(identity);
      } else {
        wss.joinRoom(identity, roomId);
      }
    })
    .catch((err) => {
      console.log(
        "error occurred when trying to get an access to local stream"
      );
      console.log(err);
    });
};

const showLocalVideoPreview = (stream) => {
  // show local video preview
};
