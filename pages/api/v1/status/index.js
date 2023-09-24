function status(request, response) {
  response.status(200).json({ value: "Agora sim o UTF-8 irá funcionar" });
}

export default status;
