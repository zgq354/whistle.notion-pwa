# whistle.notion-pwa
A whistle plugin to enable Notion Web App as an installable PWA through script and manifest injection.

## Usage
1. Install whistle via its [GitHub](https://github.com/avwo/whistle), and let the requests under the `www.notion.so` domain can be captured by whistle.
2. Install this plugin `npm i -g whistle.notion-pwa`
3. Enable the plugin on whistle
4. Open the `https://www.notion.so` in the browser, and you will see the PWA prompt.

## ToDo
1. Hack the css to support the `window-controls-overlay` display mode.
2. Ignore the `/product`, `/about`, `/pricing`... pages to open in the PWA.

## License
MIT
