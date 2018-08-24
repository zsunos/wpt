// META: script=../service-worker/resources/test-helpers.sub.js

promise_test(async t => {
  const reg = await service_worker_unregister_and_register(t, "resources/fragment-serviceworker.js", "resources/");
  t.add_cleanup(async () => await reg.unregister());
  await wait_for_state(t, reg.installing, 'activated');
  const response = await fetch("resources/test");
  assert_equals(response.url, new URL("resources/test.txt#success", location));
}, "Forward response fragments");
