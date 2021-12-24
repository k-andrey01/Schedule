import { apiUrl } from "./config";
import axios from "axios";

export default {
	city: {
		cityUrl: "city",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.cityUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.cityUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.cityUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.cityUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.cityUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.cityUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	type: {
		typeUrl: "type",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.typeUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.typeUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.typeUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.typeUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.typeUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.typeUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	language: {
		languageUrl: "language",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.languageUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.languageUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.languageUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.languageUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.languageUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.languageUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	place: {
		placeUrl: "place",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.placeUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.placeUrl}?expand`,
				method: "GET"
			});
		},
		getByFiltering(id)
		{
			return axios({
				url: `${apiUrl}/${this.placeUrl}?expand&cityId=${id}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.placeUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.placeUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.placeUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.placeUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	performance: {
		performanceUrl: "performance",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.performanceUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.performanceUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.performanceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.performanceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.performanceUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.performanceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},

	schedule: {
		scheduleUrl: "schedule",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.scheduleUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.scheduleUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.scheduleUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.scheduleUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.scheduleUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.scheduleUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
};
