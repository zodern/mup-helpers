
While verifying the deployment, Meteor Up attempts to load the app until it is sucessful and has the http status code 200 or redirects to a page that does. Some apps do neither. This package adds a `/___mup_verify` route for those apps so mup can still detect that they started sucessfully. This requires mup 1.2.9 or newer.
