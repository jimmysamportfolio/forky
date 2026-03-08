export interface SSEMessage {
  id: string;
  event: string;
  data: string;
  retry?: number;
}

export type MessageRole = "user" | "assistant" | "system";

export type FinishReason = "stop" | "length" | "content_filter";

export interface ChatCompletionDelta {
  role: MessageRole;
  content: string;
}

export interface ChatCompletionChunk {
  id: string;
  object: "chat.completion.chunk";
  created: number;
  model: string;
  delta: ChatCompletionDelta;
  finish_reason: FinishReason | null;
}