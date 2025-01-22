This project provides a simple setup for performing Load, Soak, and Stress tests on an API or web service.
These tests help ensure that the system can handle expected and peak traffic, remain stable over long durations, and degrade gracefully under extreme conditions.

You will need k6 installed, which you can do through chocolatey or by heading to the k6.io website.

## To run the tests

### Load Test

k6 run load.js

### Soak Test

k6 run soak.js

### Stress Test

k6 run stress.js