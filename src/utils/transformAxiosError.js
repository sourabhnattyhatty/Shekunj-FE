export const transformError = (error) => {
  const err = {
    statusCode: 500,
    message: "Something went wrong",
    data: {},
  };
  if (error && error.data && error.data.statusCode) {
    const data = error.data;
    err.statusCode = data.statusCode || 500;
    err.message = data.message || "Something went wrong";
    err.data = data.data || {};
  } else {
    if (error && error.response) {
      const { data } = error.response;
      err.statusCode = data.statusCode || 500;
      err.message = data.message || "Something went wrong";
      err.data = data.data || {};
    }
  }
  return err;
};
