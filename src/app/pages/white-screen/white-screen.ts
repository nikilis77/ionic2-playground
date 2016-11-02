import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
	moduleId: module.id,
	templateUrl: "white-screen.html"
})
export class WhiteScreenPage implements OnInit, OnDestroy {

	flags: boolean[] = [];
	timers: Observable<any>[] = [];
	counter = 0;
	ids: number[] = [];

	doSomething() {
		console.log("DO SOMETHING");
		for (let i = 0; i < 3000000; i++) {
			Math.sqrt(i) / Math.log(i) / Math.cos(i);
		}
		if (this.counter < 1) {
			this.ids.push(setTimeout(() => {
				this.counter++;
				this.doSomething();
			}, 0));
		}
	}

	ngOnInit() {
		this.doSomething();
	}

	ngOnDestroy() {
		this.ids.forEach(id => {
			clearTimeout(id);
		});
	}

}