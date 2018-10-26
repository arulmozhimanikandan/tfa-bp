import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import css from '../../config/css-variables'

const COLORS = ['ruby', 'green', 'blue', 'white', 'transparent']

const Button = ({
  classes,
  onClick,
  children,
  name,
  color,
  icon,
  isDisabled,
}) =>
  onClick && COLORS.find(c => c === color) ? (
    <button
      name={name}
      className={classNames(classes.button, {
        [classes.colorGreen]: color === 'green',
        [classes.colorRuby]: color === 'ruby',
        [classes.colorBlue]: color === 'blue',
        [classes.colorWhite]: color === 'white',
        [classes.colorTransparent]: color === 'transparent',
        [classes.disabled]: isDisabled,
      })}
      disabled={isDisabled}
      onClick={e => !isDisabled && onClick(e)}
    >
      {icon.name && (
        <Icon
          name={icon.name}
          className={classNames(classes.icon, {
            [classes.iconRight]: icon.position === 'right',
          })}
        />
      )}
      <span className={classes.children}>{children}</span>
    </button>
  ) : null

const styles = {
  button: {
    padding: '0.5rem 1.7rem',
    borderRadius: '1.25rem',
    backgroundColor: css.colorRuby,
    color: css.colorRubyTypography,
    border: 'none',
    cursor: 'pointer',
    boxShadow: 'inset 0 -0.125rem 0.25rem 0 rgba(0,0,0,.2)',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color .2s',
    whiteSpace: 'nowrap',
    outline: 'none',

    '&:hover, &:active, &:focus': {
      backgroundColor: css.colorRubyHover,
    },
  },
  colorGreen: {
    backgroundColor: css.colorGreen,
    color: css.colorGreenTypography,

    '&:hover, &:active, &:focus': {
      backgroundColor: css.colorGreenHover,
    },
  },
  colorBlue: {
    backgroundColor: css.colorBlue,
    color: css.colorBlueTypography,

    '&:hover, &:active, &:focus': {
      backgroundColor: css.colorBlueHover,
    },
  },
  colorWhite: {
    backgroundColor: css.colorWhite,
    borderColor: css.colorWhiteBorder,
    color: css.colorGrayA,
    boxShadow: `inset 0 -3px 2px 0 ${css.colorWhiteBorder}`,
    borderRadius: '0.5rem',
    border: `1px solid ${css.colorWhiteBorder}`,

    '&:hover, &:active, &:focus': {
      backgroundColor: css.colorWhiteHover,
    },
  },
  disabled: {
    backgroundColor: css.colorGrayC,
    color: css.colorBlack,
    '&:hover, &:active, &:focus': {
      backgroundColor: css.colorGrayC,
      cursor: 'default',
    },
  },
  colorTransparent: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    border: 'none',
    padding: 0,
    color: css.colorGrayA,
    boxShadow: 'none',
    fontWeight: 'normal',

    '&:hover, &:active, &:focus': {
      backgroundColor: 'transparent',
    },
  },
  children: {
    display: 'inline-block',
  },
  icon: {
    textShadow: '0 0.125rem 0.125rem rgba(0,0,0,0.2)',
    marginRight: '0.7rem',
  },
  iconRight: {
    marginRight: 0,
    marginLeft: '0.7rem',
    float: 'right',
  },
}

Button.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
    colorGreen: PropTypes.string,
    colorWhite: PropTypes.string,
    disabled: PropTypes.string,
    colorTransparent: PropTypes.string,
    children: PropTypes.string,
    icon: PropTypes.string,
    iconRight: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
  name: PropTypes.oneOf(COLORS),
  isDisabled: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
  }),
}

Button.defaultProps = {
  color: 'ruby',
  icon: {
    iconPosition: 'left',
  },
}

export default injectSheet(styles)(Button)
