import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

export const { GET } = createFromSource(source, {
  localeMap: {
    'zh-cn': {
      components: {
        tokenizer: createTokenizer(),
      },
    },
    'zh-tw': {
      components: {
        tokenizer: createTokenizer(),
      },
    },
  },
});
