##Discord Bot - Repo
- **[Click Here](https://github.com/alvi00/ask_alvi_discord)**

##Telegram Bot - Repo
- **[click here](https://github.com/alvi00/ask_alvi_tel)**


<h1 align="center">Ask Alvi Search Engine</h1>


## Technologies Used

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Vercel AI SDK**: The Vercel AI SDK is a library for building AI-powered streaming text and chat UIs.
- **Groq & Mixtral**: Technologies for processing and understanding user queries.
- **Langchain.JS**: A JavaScript library focused on text operations, such as text splitting and embeddings.
- **Brave Search**: A privacy-focused search engine used for sourcing relevant content and images.
- **Serper API**: Used for fetching relevant video and image results based on the user's query.
- **OpenAI Embeddings**: Used for creating vector representations of text chunks.
- **Cheerio**: Utilized for HTML parsing, allowing the extraction of content from web pages.
- **Ollama (Optional)**: Used for streaming inference and embeddings.
- **Upstash Redis Rate Limiting (Optional)**: Used for setting up rate limiting for the application.
- **Upstash Semantic Cache (Optional)**: Used for caching data for faster response times.

💡 Ever wondered what happens when you ask a question on our AI-powered platform? It’s not just a simple reply—it’s a full-on adventure behind the scenes! Here’s how it all works:

Step 1: First, We Clean Up Your Question
When you type in a question, the AI doesn’t just take it as is. First, we polish it up using Groq’s Mistral model and OpenAI’s completion model. This makes sure your question is clear and well-structured so that we get the best possible results in the next steps.

Step 2: Hunting for Answers on the Web
Next, we search the internet—but not just with Google. We use:
🔹 Google (via Serper API)
🔹 Brave Search (for more independent results)
🔹 Qwen-2 LLM (which also gives AI-powered insights)

These sources help us find the most relevant articles, research papers, and discussions related to your question. Instead of just giving you links, we dig deeper to extract useful information.

Step 3: Scraping & Cleaning Up the Data
Once we have the top links, we don’t just rely on summaries. Instead, we scrape the full webpage using Bright Data’s web scraper.
But raw web pages are messy—so we clean up the text using Cheerio, which removes ads, extra code, and all the unnecessary clutter.

Step 4: Breaking Down the Information
Now, we have a bunch of clean text, but it’s still too long to process in one go. So, we split it into smaller chunks using Recursive Character Text Splitter. This helps the AI focus on the important details without losing context.

Step 5: Storing the Knowledge for Future Use
Each chunk of text is then converted into smart embeddings using OpenAI’s embedding model and saved in a memory vector database.
This allows the AI to remember past information and pull up relevant details instantly whenever needed.

Step 6: Finding the Best Matches
Before answering, the AI searches the memory database to find similar chunks of information. This ensures that the final response is based on accurate and relevant knowledge, instead of just random guesses.

Step 7: Generating the Perfect Answer
Now comes the fun part! Based on the question type, the AI decides which model is best suited to answer:
🔹 Groq (Mistral) – Fast and efficient
🔹 Llama – Great for deeper reasoning
🔹 Claude 3 – Best for well-structured responses

With all the pieces in place, the AI puts everything together and generates a final response that’s accurate, relevant, and well-explained.

And Boom! There’s Your Answer!
All of this happens in just a few seconds—from refining your question to searching the web, scraping data, analyzing information, and generating a response. Pretty cool, right? 🚀


## Contributing

Contributions to the project are welcome. Feel free to fork the repository, make your changes, and submit a pull request. You can also open issues to suggest improvements or report bugs.


## License

This project is licensed under the MIT License.
