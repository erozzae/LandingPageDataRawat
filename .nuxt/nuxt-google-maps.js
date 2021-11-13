import Vue from 'vue';
import GMap from "C:\\Users\\LENOVO\\OneDrive - UGM 365\\Documents\\Project IT\\WebApps-frontEnd-vueJS-Proyek Aplikasi Dasar 1\\Data Rawat\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "C:\\Users\\LENOVO\\OneDrive - UGM 365\\Documents\\Project IT\\WebApps-frontEnd-vueJS-Proyek Aplikasi Dasar 1\\Data Rawat\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapCircle from "C:\\Users\\LENOVO\\OneDrive - UGM 365\\Documents\\Project IT\\WebApps-frontEnd-vueJS-Proyek Aplikasi Dasar 1\\Data Rawat\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMapCircle.vue";
import GMapInfoWindow from "C:\\Users\\LENOVO\\OneDrive - UGM 365\\Documents\\Project IT\\WebApps-frontEnd-vueJS-Proyek Aplikasi Dasar 1\\Data Rawat\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "", loaded: false, libraries: undefined})
}