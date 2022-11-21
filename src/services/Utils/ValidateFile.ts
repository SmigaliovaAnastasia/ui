const types = ['image/png', 'image/jpeg', 'image/gif']

export const ValidateFiles = (file: File) => {
  let err : string = "";
  if (types.every(type => file.type !== type)) {
    err += file.type + ' is not a supported format\n';
  }
  let size = 1000000;
  if (file.size > size) {
    err += file.size + 'is too large, please pick a smaller file\n';
  }
  return err;
}
