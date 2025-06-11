import { stripHtmlTags } from '../util'

test('stripHtmlTags removes HTML tags', () => {
  const result = stripHtmlTags('<p>Hello <strong>World</strong></p>');
  expect(result).toBe('Hello World');
});
