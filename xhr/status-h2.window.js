// META: script=/common/get-host-info.sub.js

[
  200,
  210,
  400,
  404,
  410,
  500,
  502
].forEach(status => {
  async_test(t => {
    const client = new XMLHttpRequest();
    client.open("GET", get_host_info().H2_ORIGIN + "/xhr/resources/status.py?code=" + status);
    client.send();
    client.onload = t.step_func_done(() => {
      assert_equals(client.status, status, "status should be " + status);
      assert_equals(client.statusText, "", "statusText should be the empty string");
    });
  }, "statusText over H2 for status " + status + " should be the empty string");
});
