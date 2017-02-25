<template>
    <div>
        <p class="title is-1">Score: {{ score }}</p>
    </div>

</template>

<script>
    export default {
        mounted() {
            Event.$on('insertSquare', () => {
                this.score++;
            });
        },

    	data() {
            return {
                score: 0,
            }
        }
    }
</script>
