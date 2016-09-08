var obs = Rx.Observable.interval(500)
    .take(5)
    .do(i => console.log("obs value "+ i) )
    .share();

obs.subscribe(value =>
    console.log("observer 1 received " + value));
obs.subscribe(value =>
    console.log("observer 2 received " + value));
