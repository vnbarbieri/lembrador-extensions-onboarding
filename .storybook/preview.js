import { UIProvider } from '@lembrador-extensions/ui/lib'

export const decorators = [
  (Story) => (
    <UIProvider>
      <Story />
    </UIProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
