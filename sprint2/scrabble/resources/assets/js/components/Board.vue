<template>

    <table class="board">
		<tr v-for="(row, i) in board">
			<td v-for="(square, j) in row">
				<button 
					type="button"
					class="square"
					:class="square.letter ? 'button is-warning' : ''"
					@click="selectSquare(i, j)" 
					:disabled="lock || square.letter || (empty && !square.center)"
				>{{ square.letter }}{{ square.center && ! square.letter ? '&hearts;' : '' }}</button>
			</td>
		</tr>
    </table>

</template>

<script>
    export default {
    	mounted() {
    		this.buildBoard();
    		this.registerEvents();
    	},

    	data() {
    		return {
    			board: null,
    			lock: true,
    			empty: true,
    		}
    	},

    	methods: {
    		newSquare(options = {}) {
				return { 
    				letter: null,
    				center: options.center ? options.center : false,
    			};
    		},

    		selectSquare(x, y) {
				Event.$emit('selectSquare', {x, y});
    		},
			
			buildBoard() {
    			this.board = [];
    			for (let i = 0; i < 15; i++) {
    				let row = [];
    				for (let j = 0; j < 15; j++) {
    					if (i == 7 && j == 7) {
    						row.push(this.newSquare({center: true}));
    						continue;
    					}

    					row.push(this.newSquare());
    				}
    				this.board.push(row);
    			}
    		},

    		registerEvents() {
	    		Event.$on('lockBoard', () => {
	    			this.lock = true;
	    		});

	    		Event.$on('unlockBoard', () => {
	    			this.lock = false;
	    		});

	    		Event.$on('insertSquare', (data) => {
	    			let {x, y, letter} = data;

	    			let square = this.board[x][y];

	    			if (! square.letter) {
	    				square.letter = letter;
	    			}

					this.lock = true;

					if (this.empty) {
						this.empty = false;
					}
    			});
    		}
    	}
    }
</script>
