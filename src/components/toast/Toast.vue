<template>
    <div class="toast-wrap">
    	<a href="javascript:;" v-if="isShow">{{tips}}</a>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				time: 2000,
				isShow: true
			}
		},
		mounted() {
			// this.autoClose()
		},
		methods: {
			autoClose() {
				setTimeout(() => {
					this.isShow = false;
				}, this.time)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.toast-wrap {
		text-align: center;
		a {
			padding: 0.3rem 1rem;
			background: rgba(0, 0, 0, 1);
			color: #fff;
			border-radius: 1rem;
		}
	}
</style>