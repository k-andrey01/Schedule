<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Места проведения мероприятий</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editPlace', params: {id: 0}}">
				Добавить
			</router-link>
			<a href="/">
				<button class="btn btn-lg btn-block btn-default">Расписание</button>
			</a>
			<a href="languageLoader">
				<button class="btn btn-lg btn-block btn-default">Языки мероприятий</button>
			</a>
			<a href="typeLoader">
				<button class="btn btn-lg btn-block btn-default">Типы мероприятий</button>
			</a>
			<a href="cityLoader">
				<button class="btn btn-lg btn-block btn-default">Города</button>
			</a>
			<a href="performanceLoader">
				<button class="btn btn-lg btn-block btn-default">Мероприятия</button>
			</a>
		</div>

		<div class="container">
			<label class="btn btn-lg btn-block btn-default">Выберите город для фильтрации, если хотите отфильтровать данные</label>
			<select class="btn btn-lg btn-block btn-default" v-model="cityId">
				<option v-for="(city, key) in cities" :value="key">{{ city }}</option>
			</select>
			<button class="btn-info" v-on:click="filtering(cityId)">Фильтровать</button>
			<button class="btn-danger" v-on:click="$router.push('placeLoader')">Очистить</button>
		</div>

		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 65%">Город проведения мероприятия</th>
				<th style="width: 65%">Название заведения</th>
				<th style="width: 65%">Улица</th>
				<th style="width: 65%">Номер дома</th>
			</tr>
			</thead>
			<tbody>

			<tr v-for="item in place" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{ item.city.name }}</td>
				<td>{{ item.name }}</td>
				<td>{{ item.street }}</td>
				<td>{{ item.house }}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'editPlace', params: {id: item.id, cityId: item.cityId, street: item.street, house: item.house}}">
					<span class="glyphicon glyphicon-pencil"></span>
				</router-link></td>
				<td><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
					<span class="glyphicon glyphicon-remove"></span>
				</button></td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import {cities} from '../config'
import {formatDate, wait} from "../utils";
import {mapActions, mapState} from 'vuex';

export default {
	methods: {
		formatDate,
		async handleRemoveClick(e, id) {
			await this.removePlace(id);
		},
		filtering(id){
			this.$store.dispatch('initializePlaceFilt', parseInt(id));
			this.$router.push({name:'place'})
		},
		...mapActions([
			'removePlace'
		])
	},
	computed: {
		cities: () => cities,
		...mapState({
			place: state => state.place
		})
	},
}
</script>
