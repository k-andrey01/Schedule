<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование/создание города</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputTitle">Город</label>
					<input type="text" class="form-control" id="inputTitle" v-model="name">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
import { formatInputDate, formatInputTime } from "../utils";
import {mapActions} from "vuex";

export default {
	data() {
		return {
			id: parseInt(this.$route.params.id),
			name: "",
		};
	},
	created() {
		if (this.id !== 0 && this.city) {
			this.name = this.city.name;
		}
	},
	methods: {
		async handleSubmit(e) {
			e.preventDefault();
			const item = {
				name: this.name,
			};
			if (this.id !== 0) {
				item.id = this.id;
				await this.editItem(item);
			} else {
				await this.addItem(item);
			}
			await this.$router.push({name: "cityLoader"});
		},
		...mapActions([
			'addItem',
			'editItem'
		])
	},
	computed: {
		city() {
			return this.id !== 0 ?
				this.$store.state.city.find(item => item.id === this.id):
				null;
		}
	}
}
</script>
