<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование/создание мероприятия</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputTitle3">Тип мероприятия</label>
					<select class="form-control" id="inputSource" v-model="typeId">
						<option v-for="(type, key) in types" :value="key">{{ type }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputTitle3">Язык</label>
					<select class="form-control" id="inputSource" v-model="languageId">
						<option v-for="(language, key) in languages" :value="key">{{ language }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputTitle3">Название</label>
					<input type="text" class="form-control" id="inputTitle3" v-model="name">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
import { types, languages } from "../config";
import {mapActions} from "vuex";

export default {
	data() {
		return {
			id: parseInt(this.$route.params.id),
			typeId: "",
			languageId: "",
			name: ""
		};
	},
	created() {
		if (this.id !== 0 && this.performance) {
			this.typeId = this.performance.typeId;
			this.languageId = this.performance.languageId;
			this.name = this.performance.name;
		}
	},
	methods: {
		async handleSubmit(e) {
			e.preventDefault();
			const item = {
				typeId: this.typeId,
				languageId: this.languageId,
				name: this.name
			};
			if (this.id !== 0) {
				item.id = this.id;
				await this.editPerformance(item);
			} else {
				await this.addPerformance(item);
			}
			await this.$router.push({name: "performanceLoader"});
		},
		...mapActions([
			'addPerformance',
			'editPerformance'
		])
	},
	computed: {
		performance() {
			return this.id !== 0 ?
				this.$store.state.performance.find(item => item.id === this.id):
				null;
		},
		types() {return types},
		languages() {return languages}
	}
}
</script>

