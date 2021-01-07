import $globalmethod from '@/global/globalMethod';

const iSAndroid = $globalmethod.iSAndroid();

switch (iSAndroid) {
case 'pc':
  window.location = window.location.origin+'/pc.html#/';
  break;
default:
  window.location = window.location.origin+'/mobile.html#/';
  break;
}
