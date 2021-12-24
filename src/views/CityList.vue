<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Города</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editCity', params: {id: 0}}">
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
				<th style="width: 65%">Город</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in city" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{ item.name }}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'editCity', params: {id: item.id}}">
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
import {formatDate, wait} from "../utils";
	import {mapActions, mapState} from 'vuex';

	export default {
		methods: {
			formatDate,
			async handleRemoveClick(e, id) {
				await this.removeItem(id);
			},
			...mapActions([
				'removeItem',
				'initialize'
			])
		},
		computed: {
			...mapState({
				city: state => state.city
			})
		}
	}


</script>
