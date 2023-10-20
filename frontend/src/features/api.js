export const url = "https://croco-blu-backend.apadanagroup.repl.co/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};