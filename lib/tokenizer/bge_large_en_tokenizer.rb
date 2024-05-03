# frozen_string_literal: true

module DiscourseAi
  module Tokenizer
    class BgeLargeEnTokenizer < BasicTokenizer
      def self.tokenizer
        @@tokenizer ||= Tokenizers.from_file("./plugins/discourse-ai/tokenizers/bge-large-zh.json")
      end
    end
  end
end
