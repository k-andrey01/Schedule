import Vue from 'vue';
import Vuex from 'vuex';
import CityApi from './api';
import TypeApi from './api'
import LanguageApi from './api'
import PlaceApi from './api'
import PerformanceApi from './api'
import ScheduleApi from './api'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		city: [],
		type: [],
		language: [],
		place: [],
		performance: [],
		schedule: [],
		alertText: ""
	},
	getters: {

	},
	mutations: {
		'SET_CITY'(state, city) {
			state.city = city;
		},
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		},
		'ADD_CITY'(state, city) {
			state.city.push(city);
		},
		'EDIT_CITY'(state, city) {
			const item = state.city.find(item => item.id === city.id);
			Object.assign(item, city);
		},
		'REMOVE_CITY'(state, city) {
			const index = state.city.findIndex(item => item.id === city.id);
			state.city.splice(index, 1);
		},

		'SET_SCHEDULE'(state, schedule) {
			state.schedule = schedule;
		},
		'ADD_SCHEDULE'(state, schedule) {
			state.schedule.push(schedule);
		},
		'EDIT_SCHEDULE'(state, schedule) {
			const item = state.schedule.find(item => item.id === schedule.id);
			Object.assign(item, schedule);
		},
		'REMOVE_SCHEDULE'(state, schedule) {
			const index = state.schedule.findIndex(item => item.id === schedule.id);
			state.schedule.splice(index, 1);
		},

		'SET_TYPE'(state, type) {
			state.type = type;
		},
		'ADD_TYPE'(state, type) {
			state.type.push(type);
		},
		'EDIT_TYPE'(state, type) {
			const item = state.type.find(item => item.id === type.id);
			Object.assign(item, type);
		},
		'REMOVE_TYPE'(state, type) {
			const index = state.type.findIndex(item => item.id === type.id);
			state.type.splice(index, 1);
		},

		'SET_LANGUAGE'(state, language) {
			state.language = language;
		},
		'ADD_LANGUAGE'(state, language) {
			state.language.push(language);
		},
		'EDIT_LANGUAGE'(state, language) {
			const item = state.language.find(item => item.id === language.id);
			Object.assign(item, language);
		},
		'REMOVE_LANGUAGE'(state, language) {
			const index = state.language.findIndex(item => item.id === language.id);
			state.language.splice(index, 1);
		},

		'SET_PLACE'(state, place) {
			state.place = place;
		},
		'ADD_PLACE'(state, place) {
			state.place.push(place);
		},
		'EDIT_PLACE'(state, place) {
			const item = state.place.find(item => item.id === place.id);
			Object.assign(item, place);
		},
		'REMOVE_PLACE'(state, place) {
			const index = state.place.findIndex(item => item.id === place.id);
			state.place.splice(index, 1);
		},

		'SET_PERFORMANCE'(state, performance) {
			state.performance = performance;
		},
		'ADD_PERFORMANCE'(state, performance) {
			state.performance.push(performance);
		},
		'EDIT_PERFORMANCE'(state, performance) {
			const item = state.performance.find(item => item.id === performance.id);
			Object.assign(item, performance);
		},
		'REMOVE_PERFORMANCE'(state, performance) {
			const index = state.performance.findIndex(item => item.id === performance.id);
			state.performance.splice(index, 1);
		},
	},
	actions: {
		async initialize(context) {
			try {
				const response = await CityApi.city.getAll();
				context.commit('SET_CITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addItem(context, item) {
			try {
				const response = await CityApi.city.add(item);
				context.commit('ADD_CITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItem(context, item) {
			try {
				const response = await CityApi.city.edit(item.id, item);
				context.commit('EDIT_CITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItem(context, id) {
			try {
				const response = await CityApi.city.delete(id);
				context.commit('REMOVE_CITY', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async initializeSchedule(context) {
			try {
				const response = await ScheduleApi.schedule.getAllWithExpand();
				context.commit('SET_SCHEDULE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addSchedule(context, item) {
			try {
				const response = await ScheduleApi.schedule.add(item);
				context.commit('ADD_SCHEDULE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editSchedule(context, item) {
			try {
				const response = await ScheduleApi.schedule.edit(item.id, item);
				context.commit('EDIT_SCHEDULE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeSchedule(context, id) {
			try {
				const response = await ScheduleApi.schedule.delete(id);
				context.commit('REMOVE_SCHEDULE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async initializePerformance(context) {
			try {
				const response = await PerformanceApi.performance.getAllWithExpand();
				context.commit('SET_PERFORMANCE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addPerformance(context, item) {
			try {
				const response = await PerformanceApi.performance.add(item);
				context.commit('ADD_PERFORMANCE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editPerformance(context, item) {
			try {
				const response = await PerformanceApi.performance.edit(item.id, item);
				context.commit('EDIT_PERFORMANCE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removePerformance(context, id) {
			try {
				const response = await PerformanceApi.performance.delete(id);
				context.commit('REMOVE_PERFORMANCE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async initializeType(context) {
			try {
				const response = await TypeApi.type.getAll();
				context.commit('SET_TYPE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addType(context, item) {
			try {
				const response = await TypeApi.type.add(item);
				context.commit('ADD_TYPE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editType(context, item) {
			try {
				const response = await TypeApi.type.edit(item.id, item);
				context.commit('EDIT_TYPE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeType(context, id) {
			try {
				const response = await TypeApi.type.delete(id);
				context.commit('REMOVE_TYPE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async initializePlace(context) {
			try {
				const response = await PlaceApi.place.getAllWithExpand();
				context.commit('SET_PLACE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async initializePlaceFilt(context) {
			try {
				const response = await PlaceApi.place.getByFiltering(cityId);
				context.commit('SET_PLACE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async addPlace(context, item) {
			try {
				const response = await PlaceApi.place.add(item);
				context.commit('ADD_PLACE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editPlace(context, item) {
			try {
				const response = await PlaceApi.place.edit(item.id, item);
				context.commit('EDIT_PLACE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removePlace(context, id) {
			try {
				const response = await PlaceApi.place.delete(id);
				context.commit('REMOVE_PLACE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async initializeLanguage(context) {
			try {
				const response = await LanguageApi.language.getAll();
				context.commit('SET_LANGUAGE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addLanguage(context, item) {
			try {
				const response = await LanguageApi.language.add(item);
				context.commit('ADD_LANGUAGE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editLanguage(context, item) {
			try {
				const response = await LanguageApi.language.edit(item.id, item);
				context.commit('EDIT_LANGUAGE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeLanguage(context, id) {
			try {
				const response = await LanguageApi.language.delete(id);
				context.commit('REMOVE_LANGUAGE', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		}
	}

});
