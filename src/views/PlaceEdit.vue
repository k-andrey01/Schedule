<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование/создание места</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputTitle2">Город</label>
					<select class="form-control" id="inputSource" v-model="cityId">
						<option v-for="(city, key) in cities" :value="key">{{ city }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputTitle2">Заведение</label>
					<input type="text" class="form-control" id="inputTitle2" v-model="name">
				</div>
				<div class="form-group">
					<label for="inputTitle3">Улица</label>
					<input type="text" class="form-control" id="inputTitle3" v-model="street">
				</div>
				<div class="form-group">
					<label for="inputTitle4">Дом</label>
					<input type="text" class="form-control" id="inputTitle4" v-model="house">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
import { cities } from "../config";
import {mapActions} from "vuex";

export default {
	data() {
		return {
			id: parseInt(this.$route.params.id),
			cityId: "",
			name: "",
			street: "",
			house: ""
		};
	},
	created() {
		if (this.id !== 0 && this.place) {
			this.cityId = this.place.cityId;
			this.name = this.place.name;
			this.street = this.place.street;
			this.house = this.place.house;
		}
	},
	methods: {
		async handleSubmit(e) {
			e.preventDefault();
			const item = {
				cityId: this.cityId,
				name: this.name,
				street: this.street,
				house: this.house
			};
			if (this.id !== 0) {
				item.id = this.id;
				await this.editPlace(item);
			} else {
				await this.addPlace(item);
			}
			await this.$router.push({name: "placeLoader"});
		},
		...mapActions([
			'addPlace',
			'editPlace'
		])
	},
	computed: {
		place() {
			return this.id !== 0 ?
				this.$store.state.place.find(item => item.id === this.id):
				null;
		},
		cities() { return cities; },
	}
}
</script>
