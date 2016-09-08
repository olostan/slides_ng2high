var obs = Rx.Observable.interval(500)
    .take(5)
    .do(i => console.log("obs value "+ i) );