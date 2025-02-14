// - The below are going to be the default values, eventually this will move to a UI component so it can be easily changed by the user
// - To enable + use Ollama models, ensure inference and/or embeddings model are downloaded and ollama is running https://ollama.com/library
// - Icons within UI are not yet dynamic, to change currently, you must change the img src path in the UI component
// - IMPORTANT: when Ollama Embeddings + Ollama inference enabled at the same time, this can cause time-to-first-token to be quite long
// - IMPORTANT: Follow-up questions are not yet implrmented with Ollama models, only OpenAI compatible models that use  {type: "json_object"}

export const config = {
  useOllamaInference: false,
  useOllamaEmbeddings: false,
  searchProvider: "serper", // 'serper', 'google'
  inferenceModel: "mixtral-8x7b-32768", // Updated model (switch to a valid model like llama-3-3b)
  inferenceAPIKey: process.env.GROQ_API_KEY,
  embeddingsModel: "text-embedding-3-small", // Updated embeddings model
  textChunkSize: 800,
  textChunkOverlap: 200,
  numberOfSimilarityResults: 2,
  numberOfPagesToScan: 10,
  nonOllamaBaseURL: "https://api.groq.com/openai/v1",
  useFunctionCalling: true,
  useRateLimiting: false,
  useSemanticCache: false,
  usePortkey: false,
};
