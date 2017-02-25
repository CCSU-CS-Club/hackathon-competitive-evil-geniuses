<template>

    <div class="pagination stand">
        <ul class="pagination-list">
        <li v-for="tile in tiles">
            <a 
                class="pagination-link button is-large"
                :class="selected == tile ? 'is-current' : ''"
                @click="selectTile(tile)"
                :disabled="lock"
            >{{ tile }}</a>
        </li>
        </ul>
    </div>
</template>

<script>
    export default {

        mounted() {
            this.registerEvents();
        },

        data() {
            return {
                tiles: ['A', 'C', 'R', 'G', 'B', 'E', 'L'],
                selected: null,
                lock: false,
            };
        },

        methods: {
            selectTile(tile) {
                this.selected = tile;
                Event.$emit('unlockBoard');
            },

            removeTile() {
                this.tiles.splice(this.tiles.indexOf(this.selected), 1);
                this.selected = null;
            },

            registerEvents() {
                Event.$on('selectSquare', (location) => {
                    Event.$emit('insertSquare', {x: location.x, y: location.y, letter: this.selected});

                    this.removeTile();
                });
            }
        }
    }
</script>
