promise_test(() => fetch("resources/h1-parsing.json").then(res => res.json()).then(runH1ParsingTests), "Loading data…");

function runH1ParsingTests(h1ParsingTestData) {
  for(let i = 0; i < h1ParsingTestData.length; i++) {
  	const testData = h1ParsingTestData[i];
  	promise_test(async t => {
  	  const response = await fetch("resources/h1-parsing.py?message=" + encodeURIComponent(testData.message));
  	  assert_equals(response.status, testData.status);
  	  assert_equals(response.statusText, testData.statusText);
  	  for(let y = 0; y < testData.headers.length; y++) {
  	  	assert_equals(response.headers.get(testData.headers[y][0]), testData.headers[y][1]);
  	  }
  	  const body = await response.text();
  	  assert_equals(body, testData.body);
  	}, testData.description);
  }
}
