module.exports = {
  backgroundColor: { value: 'transparent' },
  borderColor: { value: '{colors.border.secondary.value}' },
  borderStyle: { value: 'solid' },
  borderWidth: { value: '{borderWidths.medium.value}' },

  item: {
    backgroundColor: { value: 'transparent' },
    borderColor: { value: '{colors.border.secondary.value}' },
    borderStyle: { value: 'solid' },
    borderWidth: { value: '{borderWidths.medium.value}' },
    color: { value: '{colors.font.secondary.value}' },
    fontSize: { value: '{fontSizes.medium.value}' },
    fontWeight: { value: '{fontWeights.bold.value}' },
    padding: { value: ['{space.small.value}', '{space.medium.value}'] },
    textAlign: { value: 'center' },
    transitionDuration: { value: '{time.transition.medium.value}' },

    _hover: {
      color: { value: '{colors.font.hover.value}' },
    },
    _focus: {
      color: { value: '{colors.font.focus.value}' },
    },
    _active: {
      color: { value: '{colors.font.interactive.value}' },
      borderColor: { value: '{colors.font.interactive.value}' },
      backgroundColor: { value: 'transparent' },
    },
    _disabled: {
      color: { value: '{colors.font.disabled.value}' },
      backgroundColor: { value: 'transparent' },
      borderColor: { value: '{colors.border.tertiary.value}' },
    },
  },
};
