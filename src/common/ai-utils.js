export function isPathSelectable(path) {
  if (!path || !path.editable) {
    return false;
  }

  return true;
}