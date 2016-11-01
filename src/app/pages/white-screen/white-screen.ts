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

	get shouldShow(): boolean {
		return Math.random() < 0.5;
	}

	constructor(
		private changeDetectorRef: ChangeDetectorRef
	) {
		//
	}

	ngOnInit() {
		for (let x = 0; x < this.count; x++) {
			this.timers.push(Observable.timer(0, Math.random() * 200)
				.take(10)
				.do(() => {
					this.flags.push(true);

					this.changeDetectorRef.markForCheck();
				}));
		}

		Observable.merge(...this.timers).subscribe();
	}

	ngOnDestroy() {
		//
	}

}