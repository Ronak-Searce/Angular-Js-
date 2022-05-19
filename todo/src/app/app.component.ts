
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public items = [];
	public newTask;

	public addToList() {
		let t = {
			name:"Title-1",
			descp: "tasks for today",
			TCO: Date.now(),
			ETA : "dd/mm/yyyy"
		}
		if (this.newTask == '') {
		}
		else {
			this.items.push(this.newTask);
			this.newTask = '';
		}
	}

	public deleteTask(index) {
		this.items.splice(index, 1);
	}

	public now: Date = new Date();

    // // constructor() {
    // //     setInterval(() => {
    // //       this.now = new Date();
    // //     }, 1);
    // }
}
