import css from './css-variables'

export default {
  '@global *': {
    boxSizing: 'border-box',
    fontFamily: css.fontFamily,
  },
  '@global html': {
    height: '100%',
  },
  '@global body': {
    minHeight: '100%',
    position: 'relative',
    backgroundColor: css.colorChampagneBackground,
    color: css.colorGrayB,
    WebkitFontSmoothing: 'antialiased',
    fontSize: '100%',
    margin: 0,
  },
  '@font-face': [
    {
      fontFamily: 'Nexa',
      src: [
        'url("/static/fonts/Nexa_Regular-webfont.woff2") format("woff2")',
        'url("/static/fonts/Nexa_Regular-webfont.woff") format("woff")',
        'url("/static/fonts/Nexa_Regular-webfont.ttf") format("truetype")',
        'url("/static/fonts/Nexa_Regular-webfont.svg#nexa_regularregular") format("svg")',
      ],
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
    },
    {
      fontFamily: 'Nexa',
      src: [
        'url("/static/fonts/Nexa_XBold-webfont.woff2") format("woff2")',
        'url("/static/fonts/Nexa_XBold-webfont.woff") format("woff")',
        'url("/static/fonts/Nexa_XBold-webfont.ttf") format("truetype")',
        'url("/static/fonts/Nexa_XBold-webfont.svg#nexa_xboldregular") format("svg")',
      ],
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
    },
    {
      fontFamily: 'transavicon',
      src: [
        'url("/static/fonts/transavicon.woff2") format("woff2")',
        'url("/static/fonts/transavicon.woff") format("woff")',
        'url("/static/fonts/transavicon.ttf") format("truetype")',
        'url("/static/fonts/transavicon.svg#transavicon") format("svg")',
      ],
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  ],
  '@global h1': {
    color: css.colorBlue,
    fontSize: '1.5rem',
    margin: '0 0 1rem',
  },
  '@global h4': {
    color: css.colorBlue,
  },
  '@global pre': {
    position: 'absolute',
    display: 'block',
    bottom: 0,
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    margin: '1em 0',
    padding: '1rem',
    fontSize: '1.5rem',
    backgroundColor: '#313031',
    color: '#9e9e9e',
    borderLeft: '0.5em solid #34a962',
  },
}
