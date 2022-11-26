export function wrapPromise<T>(promise: Promise<T>): {read: () => T | undefined} {
  let status = "pending";
  let result: T | undefined;
  let error: Error;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      error = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw error;
      } else if (status === "success") {
        return result;
      }
    }
  };
}