<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование/создание типа мероприятия</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputTitle">Тип мероприятия</label>
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
		if (this.id !== 0 && this.type) {
			this.name = this.type.name;
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
				await this.editType(item);
			} else {
				await this.addType(item);
			}
			await this.$router.push({name: "typeLoader"});
		},
		...mapActions([
			'addType',
			'editType'
		])
	},
	computed: {
		type() {
			return this.id !== 0 ?
				this.$store.state.type.find(item => item.id === this.id):
				null;
		}
	}
}
</script>
