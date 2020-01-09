<template>
	<div>
		<v-text-field :label="label" :readonly="!editable" :value="value" @input="onInput($event)"></v-text-field>  
	</div>
</template>

<script>
export default {
	props: { 
		label: { type:String },
		dataBind: { type:String, required: true },
		value: { type:[String, Number] }
	},
	methods: {
		onInput : function (event) {
			this.$emit('input', event.value);
		}
	},
	data: () => ({
		editable: false,
		visible:true
	})
}
</script>

