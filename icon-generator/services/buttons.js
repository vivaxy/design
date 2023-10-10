/**
 * @since 2023-10-09
 * @author vivaxy
 */
import * as E from '../enums/events.js';

export default {
  init(events) {
    const $exportAsSVG = document.getElementById('export-as-svg');
    const $exportAsPNG = document.getElementById('export-as-png');
    const $importFromSVG = document.getElementById('import-from-svg');

    $importFromSVG.addEventListener('click', function () {
      alert('TODO');
      console.log('1. File Upload');
      console.log('2. Parse SVG File');
      console.log('3. Update Forms');
    });

    function handleUpdateDownloadURL({ svgURL, pngURL, fileName }) {
      $exportAsSVG.setAttribute('href', svgURL);
      $exportAsSVG.setAttribute('download', fileName);

      $exportAsPNG.setAttribute('href', pngURL);
      $exportAsPNG.setAttribute('download', fileName);
    }

    events.on(E.DOWNLOAD_URL_CHANGE, handleUpdateDownloadURL);
  },
};
