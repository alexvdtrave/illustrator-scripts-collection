import {
  isArray, isEmptyArray, hasActiveDocument, chunkLoop,
} from './common/utils';
import {isPathSelectable} from './common/ai-utils';
import {ProgressPalette} from './common/ui-progress';
import commonStrings from './common/i18n/strings.json';
import strings from './i18n/find-smaller-strings.json';

(function FindSmallerPaths() {
  if (!hasActiveDocument()) {
    alert(localize(commonStrings.error_no_open_documents));
    return;
  }

  if (isEmptyArray(app.activeDocument.pathItems)) {
    alert(localize(commonStrings.error_empty_document));
    return;
  }

  const selecedPaths = app.activeDocument.selection;
  if (isArray(selecedPaths) && selecedPaths.length !== 1) {
    alert(localize(strings.error_single_path_selected));
    return;
  }

  const progressPalette = new ProgressPalette(strings.dialog_progress_title);
  progressPalette.show();

  const area = Math.abs(selecedPaths[0].area);
  let nonEditablePaths = 0;
  chunkLoop(app.activeDocument.pathItems, 10, (path) => {
    if (Math.abs(path.area) <= area) {
      if (isPathSelectable(path)) {
        path.selected = true;
      } else {
        nonEditablePaths += 1;
      }
    }
  }, (progress) => {
    progressPalette.setProgress(progress);
    app.redraw();
  });
  if (nonEditablePaths > 0) {
    alert(localize(commonStrings.error_found_non_editable_paths));
  }
}());
