Generated Reference Documentation
=================================

This folder contains static, generated reference documentation.

Python
------

The AutobahnPython HTML reference documentation must be copied to

	static/reference/python

I.e.

	cd AutobahnPython/doc
	make html
	cp -R _build/html/* ../../wwwtavendo/autobahnws/autobahnws/static/reference/python/

The file

	static/reference/python/_static/doctools.js

then needs to be modified for (at the very end of the file):

	$(document).ready(function() {
	  Documentation.init();
	  var frame = $('#thisframe', window.parent.document);
	  frame.height(document.body.offsetHeight);
	});


Android
-------

The AutobahnAndroid HTML reference documentation must be copied to

	static/reference/android

Replace

	</head>

with

		<script>
		   $(document).ready(function() {
		      var frame = $('#thisframe', window.parent.document);
		      frame.height(document.body.offsetHeight + 100);
		   });
		</script>
	</head>

This works, since *jQuery* allows [multiple *ready* functions](http://docs.jquery.com/Tutorials:Multiple_$%28document%29.ready%28%29) to be defined.

