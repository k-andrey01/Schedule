<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Расписание</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editSchedule', params: {id: 0}}">
				Добавить
			</router-link>
			<a href="cityLoader">
				<button class="btn btn-lg btn-block btn-default">Города</button>
			</a>
			<a href="languageLoader">
				<button class="btn btn-lg btn-block btn-default">Языки мероприятий</button>
			</a>
			<a href="typeLoader">
				<button class="btn btn-lg btn-block btn-default">Типы мероприятий</button>
			</a>
			<a href="placeLoader">
				<button class="btn btn-lg btn-block btn-default">Места проведения мероприятий</button>
			</a>
			<a href="performanceLoader">
				<button class="btn btn-lg btn-block btn-default">Мероприятия</button>
			</a>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 65%">Место проведения</th>
				<th style="width: 65%">Мероприятие</th>
				<th style="width: 65%">Дата и время</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in schedule" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{ item.place.name }}</td>
				<td>{{ item.performance.name }}</td>
				<td>{{ formatDate(new Date(item.date_time)) }}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'editSchedule', params: {id: item.id, placeId: item.placeId, performanceId: item.performanceId, date_time: item.date_time}}">
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
import { formatDate } from "../utils";
import {mapActions, mapState} from 'vuex';

export default {
	methods: {
		formatDate,
		async handleRemoveClick(e, id) {
			await this.removeSchedule(id);
		},
		...mapActions([
			'removeSchedule'
		])
	},
	computed: {
		...mapState({
			schedule: state => state.schedule
		})
	}
}
</script>
