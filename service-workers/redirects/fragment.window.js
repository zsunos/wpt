// META: script=../service-worker/resources/test-helpers.sub.js

promise_test(async t => {
  const reg = await service_worker_unregister_and_register(t, "resources/fragment-serviceworker.js", "resources/");
  t.add_cleanup(async () => await reg.unregister());
  await wait_for_state(t, reg.installing, 'activated');
  const frame = await with_iframe("resources/fragment-frame.html");
  await new Promise((resolve, reject) => {
    self.resolve = resolve;
    self.reject = reject;
  });
}, "Forward response fragments");
