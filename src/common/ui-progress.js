import progressStrings from './i18n/ui-progress-strings.json';

export function ProgressPalette(title) {
  const palette = new Window('palette', localize(title));
  const progressPanel = palette.add('panel', undefined, localize(progressStrings.progress_group_title));

  const progressBar = progressPanel.add('progressbar', undefined, 0, 100);
  progressBar.size = [200, 20];
  progressBar.value = 0;

  const progressText = progressPanel.add('statictext', undefined, '--%');
  progressText.size = [200, 20];
  progressText.justify = 'center';

  return {
    show() {
      palette.show();
    },
    hide() {
      palette.hide();
    },
    setProgress(value) {
      progressBar.value = value;
      progressText.text = Number(value).toFixed(2) + '%';
    },
  };
}
