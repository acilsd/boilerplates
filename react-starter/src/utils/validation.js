const checkValidity = (obj, func) => {
  const noName = obj.name.length > 0;
  const noText = obj.text.length > 0;
  func({ noName, noText });
  return (noName && noText);
};

export default checkValidity;
