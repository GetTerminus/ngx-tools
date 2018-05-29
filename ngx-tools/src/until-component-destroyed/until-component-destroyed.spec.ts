import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { untilComponentDestroyed } from './until-component-destroyed';



@Component({
  template: ``,
})
class TestHostComponent implements OnDestroy, OnInit {
  stub = jest.fn();
  myInterval!: Subscription;

  ngOnInit() {
    this.myInterval = interval(200).pipe(untilComponentDestroyed(this)).subscribe((v: number) => {
      this.stub(v);
    });
  }

  ngOnDestroy() {}
}

@Component({
  template: ``,
})
class TestHostDoubleComponent implements OnDestroy, OnInit {
  stub1 = jest.fn();
  stub2 = jest.fn();
  myInterval!: Subscription;
  mySecondInterval!: Subscription;

  ngOnInit() {
    this.myInterval = interval(200).pipe(untilComponentDestroyed(this)).subscribe((v: number) => {
      this.stub1(v);
    });
    this.mySecondInterval = interval(200).pipe(untilComponentDestroyed(this)).subscribe((v: number) => {
      this.stub2(v);
    });
  }

  ngOnDestroy() {}
}


describe(`untilComponentDestroyed`, () => {

  test(`should cancel an observable stream during the destroy cycle`, () => {
    const testComponent: TestHostComponent = new TestHostComponent();
    jest.useFakeTimers();

    testComponent.ngOnInit();
    jest.advanceTimersByTime(610);

    testComponent.ngOnDestroy();
    jest.advanceTimersByTime(1000);

    expect(testComponent.stub).toHaveBeenCalledTimes(3);

    setTimeout(() => {
      testComponent.ngOnDestroy();
    }, 2000);

    setTimeout(() => {
      expect(testComponent.stub).toHaveBeenCalledTimes(3);
    }, 5000);
  });


  test(`should cancel an observable stream during the destroy cycle`, () => {
    const testComponent: TestHostDoubleComponent = new TestHostDoubleComponent();
    jest.useFakeTimers();

    testComponent.ngOnInit();
    jest.advanceTimersByTime(610);

    testComponent.ngOnDestroy();
    jest.advanceTimersByTime(1000);

    expect(testComponent.stub1).toHaveBeenCalledTimes(3);
    expect(testComponent.stub2).toHaveBeenCalledTimes(3);

    setTimeout(() => {
      testComponent.ngOnDestroy();
    }, 2000);

    setTimeout(() => {
      expect(testComponent.stub1).toHaveBeenCalledTimes(3);
      expect(testComponent.stub2).toHaveBeenCalledTimes(3);
    }, 5000);
  });
});
