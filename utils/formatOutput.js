import jsxToString from 'jsx-to-string'

const formatOutput = component => {
  // Formatted the component to a string
  const formatted = jsxToString(component, {
    useFunctionCode: true,
    functionNameOnly: true,
    shortBooleanSyntax: true,
    displayName: 'Button'
  })

  // Get the first closing tag
  const closingTag = formatted.match(/(\/>|>)/)[0]

  // Set the first property on it's own line and indent it.
  return formatted.replace(' ', '\n  ').replace(closingTag, `\n${closingTag}`)
}

export default formatOutput
