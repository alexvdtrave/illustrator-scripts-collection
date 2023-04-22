export function isArray(arg) {
  return arg && !isNaN(arg.length);
};

export function isEmptyArray(arg) {
  return isArray(arg) && arg.length === 0;
}

export function isNonEmptyArray(arg) {
  return isArray(arg) && arg.length > 0;
}

export function hasActiveDocument() {
  return app && isNonEmptyArray(app.documents) && app.activeDocument;
}

export function chunk(arg, size) {
  const arr = [].slice.call(arg);
  const chunks = [];

  for (let i = 0, j = arr.length; i < j; i += size) {
    chunks.push(arr.slice(i, i + size));
  }

  return chunks;
}

export function chunkLoop(arr, chunkSize, onItemCallback, onChunkProcessed) {
  const chunks = chunk(arr, chunkSize);

  for (let c = 0; c < chunks.length; c++) {
    const chunk = chunks[c];
    for (let i = 0; i < chunk.length; i++) {
      onItemCallback && onItemCallback(chunk[i]);
    }

    const progress = (100 * c) / chunks.length;
    onChunkProcessed && onChunkProcessed(progress);
  }
}