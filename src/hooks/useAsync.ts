import React from "react";

type Status = "idle" | "pending" | "resolved" | "rejected";

interface State<T> {
  status: Status;
  data: T | null;
  error: string | null;
}

type Action<T> =
  | { type: "pending" }
  | { type: "resolved"; data: T }
  | { type: "rejected"; error: string };

const asyncReducer =
  <T>() =>
  (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "pending": {
        return { status: "pending", data: null, error: null };
      }
      case "resolved": {
        return { status: "resolved", data: action.data, error: null };
      }
      case "rejected": {
        return { status: "rejected", data: null, error: action.error };
      }
    }
  };

function useAsync<T>(
  asyncCallback: () => Promise<T>,
  initialState: Partial<State<T>>,
  dependencies: any
) {
  const reducer = asyncReducer<T>();

  const [state, dispatch] = React.useReducer(reducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState,
  });

  React.useEffect(() => {
    const promise = asyncCallback();
    if (!promise) {
      return;
    }
    dispatch({ type: "pending" });
    promise.then(
      (data) => {
        dispatch({ type: "resolved", data });
      },
      (error) => {
        dispatch({ type: "rejected", error });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return state;
}

export default useAsync;
