import { render, screen, waitFor, act } from '@testing-library/react';
import App from './App';
import Exercise10_2b from './exercise-10-2b/Exercise10_2b';
import fetchMock from "jest-fetch-mock";

// Use jest-fetch-mock for fetch mocking
fetchMock.enableMocks();

// Test exercise 10.2b - which creates a http request to dummyjson.com and renders the result as a list of user names
describe("Exercise10_2b", () => {
  beforeEach(() => {
    // Clear fetch mock history before each test
    fetchMock.resetMocks();
  });

  // test case for exercise 10.2b basic use without any user interaction
  it('renders exercise 10.2b', async () => {

    // Define the response for the next fetch request to dummyjson.com
    fetchMock.mockResponseOnce(JSON.stringify(
      {
        "users": [
            {
                "id": 1,
                "firstName": "John",
                "lastName": "Doe",            
            },
            {
                "id": 2,
                "firstName": "Jane",
                "lastName": "Doe",
            }
        ]
      }
    ));

    await act(async () => {
      render(<Exercise10_2b />);
    });

    // Wait for the component to fetch data
    await screen.findByText("Exercise 10.2b");

    // Check if the user names are rendered correctly
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

});
