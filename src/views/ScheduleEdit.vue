<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование/создание мероприятия в расписании</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputTitle3">Место</label>
					<select class="form-control" id="inputSource" v-model="placeId">
						<option v-for="(place, key) in places" :value="key">{{ place }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputTitle3">Мероприятие</label>
					<select class="form-control" id="inputSource" v-model="performanceId">
						<option v-for="(performance, key) in performances" :value="key">{{ performance }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputTitle3">Дата и время</label>
					<input type="text" class="form-control" id="inputTitle3" v-model="date_time">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
import {formatDate, formatInputDate, formatInputTime} from "../utils";
import {performances, places} from "../config";
import {mapActions} from "vuex";

export default {
	data() {
		return {
			id: parseInt(this.$route.params.id),
			placeId: "",
			performanceId: "",
			date_time: "2021-11-18T20:50:00.600+00:00"
		};
	},
	created() {
		if (this.id !== 0 && this.schedule) {
			this.placeId = this.schedule.placeId;
			this.performanceId = this.schedule.performanceId;
			this.date_time = this.schedule.date_time;
		}
	},
	methods: {
		async handleSubmit(e) {
			e.preventDefault();
			const item = {
				placeId: this.placeId,
				performanceId: this.performanceId,
				date_time: this.date_time
			};
			if (this.id !== 0) {
				item.id = this.id;
				await this.editSchedule(item);
			} else {
				await this.addSchedule(item);
			}
			await this.$router.push({name: "loader"});
		},
		...mapActions([
			'addSchedule',
			'editSchedule'
		])
	},
	computed: {
		schedule() {
			return this.id !== 0 ?
				this.$store.state.schedule.find(item => item.id === this.id):
				null;
		},
		places(){return places},
		performances(){return performances}
	}
}
</script>
