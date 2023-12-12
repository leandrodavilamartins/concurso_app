import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage, SystemMessage, ChatMessage } from 'langchain/schema';
import { PUBLIC_OPENAI_KEY } from '$env/static/public';
import {
	ChatPromptTemplate,
	SystemMessagePromptTemplate,
	HumanMessagePromptTemplate
} from 'langchain/prompts';

const chat = new ChatOpenAI({ openAIApiKey: PUBLIC_OPENAI_KEY });

export { chat };
