---
layout: default
title: Testing APIs
---

# Testing APIs

When testing code that talks to an API (like a weather service or a payment gateway), we face a problem: external APIs are slow, require internet, and sometimes cost money per request.

To solve this, we use **Mocking**.

## What is Mocking?

Mocking is creating a "stunt double" for an external service. The mock looks like the real service but returns a pre-defined response without actually making a network call.

## Example: Mocking an API call in Python

Suppose we have a function that gets the temperature from an API.

```python
import requests

def get_weather(city):
    response = requests.get(f"https://api.weather.com/{city}")
    return response.json()["temp"]
```

In our test, we mock `requests.get`:

```python
from unittest.mock import patch
from my_app import get_weather

@patch('requests.get')
def test_get_weather(mock_get):
    # We tell the mock what to return
    mock_get.return_value.json.return_value = {"temp": 25}
    
    result = get_weather("London")
    
    assert result == 25
    # Verify the URL was correct
    mock_get.assert_called_with("https://api.weather.com/London")
```

## What to Test in an API

1.  **Payload Validation:** Does our code send the correct JSON format?
2.  **Response Handling:** Does our code correctly parse the JSON we get back?
3.  **Error Handling:** What happens if the API returns a 404 (Not Found) or a 500 (Server Error)?

## Contract Testing

In large teams, we use "Contract Testing" to ensure that the Frontend and Backend agree on the data format. If the Backend changes a field name, the Contract Test will fail immediately.

## Summary

Never make real API calls in a unit test. Use mocks to simulate success, failure, and edge cases.
