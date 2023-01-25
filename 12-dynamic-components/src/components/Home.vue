<template>
	<h1>Home</h1>
</template>

<script>
export default {
	unmounted() {
		console.log("Home unmounted")
		//In KeepAlive this wont work
		//activated and deactived hooks will work
	},
	activated() {
		console.log("Home activated")
	},
	deactivated() {
		console.log("Home deactivated")
	}
}
</script>
