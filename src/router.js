import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";
import CityList from "./views/CityList";
import TypeList from "./views/TypeList"
import LanguageList from "./views/LanguageList";
import PlaceList from "./views/PlaceList";
import PerformanceList from "./views/PerformanceList"
import ScheduleList from "./views/ScheduleList"
import CityLoader from "./views/CityLoader"
import TypeLoader from "./views/TypeLoader";
import LanguageLoader from "./views/LanguageLoader";
import PlaceLoader from "./views/PlaceLoader";
import PerformanceLoader from "./views/PerformanceLoader";
import CityEdit from "./views/CityEdit";
import LanguageEdit from "./views/LanguageEdit";
import TypeEdit from "./views/TypeEdit";
import PlaceEdit from "./views/PlaceEdit";
import PerformanceEdit from "./views/PerformanceEdit";
import ScheduleEdit from "./views/ScheduleEdit";
import PlaceFiltLoader from "./views/PlaceFiltLoader";

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/app", component: App, children: [
				{path:"/app", name:"app", component: ScheduleList},
				{path:"/app/:id", name: "editSchedule", component: ScheduleEdit}
			]},
		{path: "/cityLoader", name:"cityLoader", component:CityLoader},
		{path: "/city", name: "city", component: CityList},
		{path: "/city/:id", name: "editCity", component: CityEdit},
		{path: "/typeLoader", name:"typeLoader",component:TypeLoader},
		{path: "/type", name: "type", component: TypeList},
		{path:"/type/:id", name:"editType",component:TypeEdit},
		{path: "/languageLoader", name:"languageLoader",component:LanguageLoader},
		{path: "/language", name: "language", component: LanguageList},
		{path:"/language/:id", name:"editLanguage", component:LanguageEdit},
		{path: "/placeLoader", name:"placeLoader",component:PlaceLoader},
		{path: "/place", name: "place", component: PlaceList},
		{path:"/place/:id", name:"editPlace",component:PlaceEdit},
		{path: "/placeFiltLoader",name:"placeFiltLoader", component: PlaceFiltLoader},
		{path: "/performanceLoader", name:"performanceLoader",component:PerformanceLoader},
		{path:"/performance", name: "performance", component: PerformanceList},
		{path: "/performance/:id", name: "editPerformance", component: PerformanceEdit}
	]
});
