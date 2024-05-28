import { colorConstants } from './constants';
import Toast from 'react-native-root-toast';


const toastShow=(message,type,time)=>{
    Toast.show(message, {
        duration: time ?? 2000,
        position:10,
        shadow: true,
        animation: true,
        hideOnPress: true,
        textColor:colorConstants.background,
        delay: 0,
        backgroundColor:type ? type : 'red',
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        }
    });
}

export default toastShow