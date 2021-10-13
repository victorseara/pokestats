// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import MockIntersectionObserver from "testUtils/mocks/MockIntersectionObserver";

beforeAll(() => {
  window.IntersectionObserver = MockIntersectionObserver;
  window.IntersectionObserverEntry = jest.fn();
});

afterAll(() => {
  jest.clearAllMocks();
});
