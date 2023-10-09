/**
 * @since 2023-10-09
 * @author vivaxy
 */
import * as E from '../enums/events.js';

export default {
  init(events) {
    function handleUpdateDownloadURL({ svgURL, pngURL, fileName }) {
      const $exportAsSVG = document.getElementById('export-as-svg');
      $exportAsSVG.setAttribute('href', svgURL);
      $exportAsSVG.setAttribute('download', fileName);

      const $exportAsPNG = document.getElementById('export-as-png');
      $exportAsPNG.setAttribute('href', pngURL);
      $exportAsPNG.setAttribute('download', fileName);
    }

    events.on(E.UPDATE_DOWNLOAD_URL, handleUpdateDownloadURL);
  },
};
