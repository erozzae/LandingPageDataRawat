import Vue from 'vue';
import GMap from "D:\\materi ugm sem4\\pkl\\berkas_PI\\Rosyihan M_ Portofolio\\landing-page-data-rawat-group\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "D:\\materi ugm sem4\\pkl\\berkas_PI\\Rosyihan M_ Portofolio\\landing-page-data-rawat-group\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapCircle from "D:\\materi ugm sem4\\pkl\\berkas_PI\\Rosyihan M_ Portofolio\\landing-page-data-rawat-group\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMapCircle.vue";
import GMapInfoWindow from "D:\\materi ugm sem4\\pkl\\berkas_PI\\Rosyihan M_ Portofolio\\landing-page-data-rawat-group\\landing-page-data-rawat-group\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "", loaded: false, libraries: undefined})
}