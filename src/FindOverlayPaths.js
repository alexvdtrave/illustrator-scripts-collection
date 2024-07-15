import {
  isEmptyArray, hasActiveDocument, chunkLoop,
} from './common/utils';
import {isPathSelectable} from './common/ai-utils';
import {ProgressPalette} from './common/ui-progress';
import commonStrings from './common/i18n/strings.json';
import strings from './i18n/find-overlay-strings.json';

(function FindOverlayPaths() {
  if (!hasActiveDocument()) {
    alert(localize(commonStrings.error_no_open_documents));
    return;
  }

  if (isEmptyArray(app.activeDocument.pathItems)) {
    alert(localize(commonStrings.error_empty_document));
    return;
  }

  app.activeDocument.selection = null;

  const progressPalette = new ProgressPalette(strings.dialog_progress_title);
  progressPalette.show();

  const doc = [];
  function addItem(position, item) {
    const x = Math.ceil(position[0]);
    const y = Math.ceil(position[1]);
    if (!doc[x]) {
      doc[x] = [];
    }

    if (!doc[x][y]) {
      doc[x][y] = [];
    }

    doc[x][y].push(item);
  }

  chunkLoop(app.activeDocument.pathItems, 10, (path) => {
    addItem(path.position, path);
  }, (progress) => {
    progressPalette.setProgress(progress);
    app.redraw();
  });

  const selection = [];
  for (const x in doc) {
    for (const y in doc[x]) {
      if (doc[x][y].length > 1) {
        // TODO: z-index sort
        const paths = doc[x][y].sort((a, b) => a.area - b.area);
        let path = paths[0];
        for (let i = 1; i < paths.length; i += 1) {
          if (paths[i].area === path.area && paths[i].width === path.width) {
            selection.push(paths[i]);
          } else {
            path = paths[i];
          }
        }
      }
    }
  }

  let nonSelectablePaths = 0;
  chunkLoop(selection, 10, (path) => {
    if (isPathSelectable(path)) {
      path.selected = true;
    } else {
      nonSelectablePaths += 1;
    }
  }, (progress) => {
    progressPalette.setProgress(progress);
    app.redraw();
  });

  if (nonSelectablePaths > 0) {
    alert(localize(commonStrings.error_found_non_editable_paths));
  }
}());
