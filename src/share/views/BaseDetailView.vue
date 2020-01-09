<!--<template>
	<div>
		<v-btn small color="error" v-on:click="onPressSave" >Save</v-btn>
		<v-btn small color="error" v-on:click="onPressRemove" >Remove</v-btn>
		<slot></slot>
	</div>
</template>-->

<script>
import * as ViewUtil from "./ViewUtil"
export default {
	props: { 
		//formMode: {type: String,default: "viewMode"}
	},
	data : function(){
		return {
			formMode: "viewMode"
		}
	},
	methods: {
		onPressSave : function () {
			alert('Save');
		},
		onPressRemove : function () {
			alert('Remove');
		},
		onPressEdit : function (evt) {
			if(this.formMode==="viewMode") {
				ViewUtil.setEditable(this, true);
				this.formMode = "editMode";
				evt.currentTarget.hidden=true;
				document.getElementById("idSave").hidden = false;
				document.getElementById("idRemove").hidden = true;
				document.getElementById("idCancel").hidden=false;

			}			
		},
		onPressCancel : function () {
			if(this.formMode==="editMode") {
				ViewUtil.setEditable(this, false);
				this.formMode = "viewMode";
				document.getElementById("idSave").hidden = true;
				document.getElementById("idRemove").hidden = false;
				document.getElementById("idCancel").hidden=true;
				document.getElementById("idEdit").hidden=false;
			}			
		}		
	}
}
</script>