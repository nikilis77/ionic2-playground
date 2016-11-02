import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
	moduleId: module.id,
	templateUrl: "white-screen.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhiteScreenPage implements OnInit, OnDestroy {

	count = 5;
	flags: boolean[] = [];
	timers: Observable<any>[] = [];
	counter = 0;
	ids: number[] = [];

	get shouldShow(): boolean {
		return Math.random() < 0.5;
	}

	constructor(
		private changeDetectorRef: ChangeDetectorRef
	) {
		//
	}

	doSomething() {
		console.log("DO SOMETHING");
		for (let i = 0; i < 3000000; i++) {
			Math.sqrt(i) / Math.log(i) / Math.cos(i);
		}
		if (this.counter < 5) {
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