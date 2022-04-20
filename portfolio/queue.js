import { EventEmitter } from '@mwni/events'


export default class extends EventEmitter{
	constructor(portfolio){
		super()
		this.branches = {}
	}

	add({ stage, execute, ...meta }){
		let branch = this.branches[stage]

		if(!branch){
			branch = this.branches[stage] = {
				chain: Promise.resolve(),
				tasks: []
			}
		}

		branch.tasks.push(meta)
		
		return branch.chain = branch.chain
			.then(() => {
				this.emit('change')
				return execute()
			})
			.then(() => {
				meta.complete = true

				if(branch.tasks.every(task => task.complete)){
					this.emit('change')
				}
			})
	}

	wait(stage){
		return this.branches[stage]?.chain || Promise.resolve()
	}
}