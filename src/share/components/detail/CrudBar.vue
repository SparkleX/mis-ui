<template>
	<div>
		<v-toolbar>
			<v-toolbar-title>{{label}}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn id="idEdit" small color="primary" v-on:click="onPressEdit" >Edit</v-btn>
				<v-btn id="idSave" small color="primary" hidden="true" v-on:click="onPressSave" >Save</v-btn>
				<v-btn id="idRemove" small v-on:click="onPressRemove" ><v-icon>mdi-delete-circle</v-icon></v-btn>
				<v-btn id="idCancel" small hidden="true" v-on:click="onPressCancel" >Cancel</v-btn>
				<v-btn id="idAdd" small hidden="true" v-on:click="onPressAdd" >Cancel</v-btn>
			</v-toolbar-items>
			<!--  <template v-if="$vuetify.breakpoint.smAndUp">
			<v-btn icon>
			<v-icon>mdi-export-variant</v-icon>
			</v-btn>
			<v-btn icon>
			<v-icon>mdi-delete-circle</v-icon>
			</v-btn>
			<v-btn icon>
			<v-icon>mdi-plus-circle</v-icon>
			</v-btn>
			</template>-->
		</v-toolbar>	
	</div>
</template>

<script>
export default {
	props: { 
		label: { type:String }
	},
	methods: {
		onPressEdit : function (evt) {
			this.$parent.onPressEdit(evt);
		},
		onPressCancel : function (evt) {
			this.$parent.onPressCancel(evt);
		}			
	}	
}
</script>